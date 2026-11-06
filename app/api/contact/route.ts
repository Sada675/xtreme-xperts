import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const allowedDevices = [
  "mobile",
  "laptop",
  "tablet",
  "gaming-console",
  "other",
];

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[char];
  });
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
      console.error("Missing Resend environment variables.");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const body = await request.json();

    const { name, email, phone, device, subject, message } = body;

    // Required fields
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof device !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !device.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    // Length validation
    if (
      name.length > 100 ||
      email.length > 254 ||
      subject.length > 150 ||
      message.length > 5000 ||
      (phone && (typeof phone !== "string" || phone.length > 30))
    ) {
      return NextResponse.json(
        { error: "One or more fields exceed the allowed length." },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    // Device validation
    if (!allowedDevices.includes(device)) {
      return NextResponse.json(
        { error: "Please select a valid device type." },
        { status: 400 },
      );
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safePhone = escapeHtml(
      typeof phone === "string" && phone.trim()
        ? phone.trim()
        : "Not provided",
    );
    const safeDevice = escapeHtml(device);
    const safeSubject = escapeHtml(subject.trim());
    const safeMessage = escapeHtml(message.trim());

    const { data, error } = await resend.emails.send({
      from: "Xtreme Xperts <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL],
      replyTo: email.trim(),
      subject: `New Repair Enquiry - ${device}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; background: #f8fafc; padding: 30px; border-radius: 12px;">

          <div style="background: #251039; padding: 25px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: #fbbf24; margin: 0;">Xtreme Xperts</h1>
            <p style="color: white; margin-bottom: 0;">New Customer Enquiry</p>
          </div>

          <div style="background: white; padding: 25px; border: 1px solid #e5e7eb;">

            <h2 style="color: #251039;">Customer Details</h2>

            <p><strong>Full Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Phone:</strong> ${safePhone}</p>
            <p><strong>Device:</strong> ${safeDevice}</p>
            <p><strong>Subject:</strong> ${safeSubject}</p>

            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 25px 0;" />

            <h3 style="color: #251039;">Customer Message</h3>

            <div style="background: #fffbeb; padding: 18px; border-left: 4px solid #f59e0b; border-radius: 6px; color: #374151; line-height: 1.7; white-space: pre-wrap;">
              ${safeMessage}
            </div>

            <p style="margin-top: 25px; color: #6b7280; font-size: 13px;">
              This enquiry was submitted through the Xtreme Xperts website.
            </p>

          </div>

          <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 12px;">
            © ${new Date().getFullYear()} Xtreme Xperts. All rights reserved.
          </div>

        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);

      return NextResponse.json(
        { error: "Unable to send your message. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been sent successfully!",
        id: data?.id,
      },
      { status: 200 },
    );

  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}