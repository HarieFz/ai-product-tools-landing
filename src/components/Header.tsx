import React from "react";
import Logo from "../../public/images/logo.svg";
import CustomButton from "./CustomButton";

export default function Header() {
  return (
    <header className="mt-5 mb-20">
      <div className="rounded-2xl p-px bg-linear-to-r from-0% from-[#1F2937] via-50% via-[#374151]/40 to-100% to-[#1F2937]">
        <div className="rounded-[calc(1rem-1px)] p-3 bg-linear-to-r from-0% from-[#111827] via-55% via-[#1F2937]/20 to-100% to-[#111827]">
          <div className="flex justify-between items-center">
            <div>
              <Logo className="w-8 h-8" />
            </div>

            <div className="flex items-center gap-3">
              <CustomButton variant="secondary" size="medium" href="/signin">
                Sign in
              </CustomButton>
              <CustomButton variant="primary" size="medium" href="/signup">
                Register
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
