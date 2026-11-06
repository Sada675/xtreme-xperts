import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "+44128761991"; // Replace with WhatsApp number
  const message = "Hello! I need help with a device repair.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-5 bottom-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/20 transition-all duration-300 hover:scale-110 hover:bg-[#20BA5A] sm:right-8 sm:bottom-8 sm:h-16 sm:w-16"
    >
      <FaWhatsapp className="text-3xl sm:text-4xl" />

      <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500"></span>
      </span>
    </a>
  );
}
