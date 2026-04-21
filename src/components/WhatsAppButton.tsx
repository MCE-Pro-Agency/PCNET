const WhatsAppButton = () => {
  const phoneNumber = "33625159452"; // Votre numéro sans + ni espaces
  const message = "Bonjour, je souhaite avoir des informations sur vos produits.";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactez-nous sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
        <path d="M16.004 0C7.164 0 .002 7.16.002 15.997c0 2.82.737 5.573 2.14 7.998L.004 32l8.27-2.107a16.02 16.02 0 0 0 7.73 1.97C24.84 31.863 32 24.7 32 15.998 32 7.16 24.84 0 16.004 0zm0 29.327a13.48 13.48 0 0 1-7.27-2.117l-.522-.31-4.91 1.25 1.31-4.77-.34-.54a13.42 13.42 0 0 1-2.08-7.143c0-7.47 6.1-13.55 13.6-13.55 7.47 0 13.55 6.08 13.55 13.55s-6.08 13.63-13.34 13.63zm7.44-10.14c-.41-.205-2.42-1.19-2.79-1.33-.37-.14-.64-.205-.91.205-.27.41-1.05 1.33-1.29 1.6-.24.27-.47.31-.88.1-.41-.205-1.73-.64-3.3-2.04-1.22-1.09-2.04-2.43-2.28-2.84-.24-.41-.03-.63.18-.83.18-.18.41-.47.61-.71.2-.24.27-.41.41-.68.14-.27.07-.51-.03-.71-.1-.2-.91-2.2-1.25-3.01-.33-.79-.66-.68-.91-.69-.24-.01-.51-.01-.78-.01s-.71.1-1.09.51c-.37.41-1.43 1.4-1.43 3.41s1.47 3.96 1.67 4.23c.2.27 2.88 4.42 6.99 6.2.98.42 1.74.67 2.33.86.98.31 1.87.27 2.57.16.79-.12 2.42-.99 2.76-1.94.34-.95.34-1.77.24-1.94-.1-.17-.37-.27-.78-.48z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;