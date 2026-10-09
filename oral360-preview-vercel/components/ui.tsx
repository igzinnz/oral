import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "@/lib/clinic";
export function Brand() {
  return (
    <span className="brand">
      <span className="brand-name">
        oral<span>360</span>
        <i aria-hidden="true">°</i>
      </span>
      <span className="brand-caption">CLÍNICA ODONTOLÓGICA</span>
    </span>
  );
}
export function WhatsAppLink({
  children,
  message,
  className = "",
}: {
  children: ReactNode;
  message?: string;
  className?: string;
}) {
  return (
    <a
      className={`button ${className}`}
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        className="whatsapp-icon"
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M16.01 3.2A12.76 12.76 0 0 0 5.1 22.58L3.4 28.8l6.37-1.67a12.83 12.83 0 0 0 6.23 1.6h.01A12.77 12.77 0 0 0 16.01 3.2Zm0 23.4a10.65 10.65 0 0 1-5.44-1.49l-.39-.23-3.78.99 1.01-3.68-.25-.4a10.61 10.61 0 1 1 8.85 4.81Zm5.83-7.95c-.32-.16-1.89-.93-2.18-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.36.24-.68.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.6-1.89-1.78-2.21-.18-.32-.02-.49.14-.65.15-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.36-.26-.62-.52-.53-.71-.54l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.27c.16.21 2.22 3.38 5.38 4.74.75.32 1.33.52 1.79.66.75.24 1.44.21 1.98.13.6-.09 1.89-.77 2.16-1.51.27-.74.27-1.37.19-1.51-.08-.13-.29-.21-.61-.37Z"
        />
      </svg>
      <span>{children}</span>
      <ArrowUpRight className="button-arrow" size={18} aria-hidden="true" />
      <span className="sr-only"> (abre o WhatsApp em uma nova aba)</span>
    </a>
  );
}
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span aria-hidden="true" />
      {children}
    </p>
  );
}
