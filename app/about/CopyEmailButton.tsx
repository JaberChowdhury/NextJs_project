"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function CopyEmailButton() {
  const handleCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigator.clipboard.writeText("your-email@example.com");
    const button = event.currentTarget;

    button.classList.add("!border-green-500");
    const originalHTML = button.innerHTML;

    button.innerHTML = `
      <span class="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-white group-hover:text-gray-200">
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        Copied!
      </span>
    `;

    setTimeout(() => {
      button.classList.remove("!border-green-500");
      button.innerHTML = originalHTML;
    }, 1500);
  };

  return (
    <Button
      size="lg"
      variant="secondary"
      onClick={handleCopy}
      className="relative w-32 h-12 bg-[#161616] text-white rounded-xl overflow-hidden group cursor-pointer gap-2 transition-all duration-300 hover:bg-[#2a2a2a] active:bg-[#3a3a3a] border-2 border-transparent"
    >
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-y-full text-white group-hover:text-gray-200">
        <Mail className="w-4 h-4 mr-2" />
        E-Mail
      </span>
      <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-white group-hover:text-gray-200">
        <Mail className="w-4 h-4 mr-2" />
        Let's Go!
      </span>
    </Button>
  );
}
