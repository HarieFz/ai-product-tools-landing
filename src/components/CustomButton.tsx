import React from "react";
import { Button } from "@headlessui/react";
import Link from "next/link";

export default function CustomButton({
  variant,
  size,
  href,
  children,
}: {
  variant: "primary" | "secondary";
  size: "large" | "medium";
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href || ""}>
      <div
        className={`w-full ${
          variant === "secondary"
            ? "p-px rounded-lg bg-linear-to-r from-0% from-[#1F2937] via-50% via-[#4B5563] to-100% to-[#1F2937]"
            : ""
        }`}
      >
        <Button
          className={`w-full data-[hover]:cursor-pointer transition-colors ${
            size === "large" ? "px-4 py-[11px]" : "px-3 py-[5px]"
          } rounded-[calc(0.5rem-1px)] bg-linear-to-t ${
            variant === "primary"
              ? `from-0% from-[#4F46E5] to-100% to-[#6366F1] 
            hover:from-[#4F46E5] hover:to-[#4F46E5]
            inset-shadow-[0_1px_0_rgba(255,255,255,0.16)]`
              : "from-0% from-[#1F2937]/65 to-100% to-[#1F2937]"
          }`}
        >
          <div className={`font-medium text-sm ${variant === "primary" ? "text-white" : "text-[#D1D5DB]"}`}>
            {children}
          </div>
        </Button>
      </div>
    </Link>
  );
}
