import React from "react";
import Logo from "../../public/images/logo.svg";
import CustomButton from "./CustomButton";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mt-5 mb-20">
      {/* <div className="rounded-2xl p-px bg-linear-to-r from-0% from-[#1F2937] via-50% via-[#374151]/40 to-100% to-[#1F2937]"> */}
      {/* <div className="rounded-[calc(1rem-1px)] p-3 bg-linear-to-r from-0% from-[#111827] via-55% via-[#1F2937]/20 to-100% to-[#111827]"> */}
      <div className="relative rounded-2xl p-3 overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(93deg,rgba(31,41,55,1)_0%,rgba(55,65,81,1)_50%,rgba(31,41,55,1)_100%)_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(black_0_0)_padding-box,_linear-gradient(black_0_0)] after:content-[''] after:absolute after:inset-0 after:-z-10 after:border-[inherit] after:[background:linear-gradient(71deg,rgba(17,24,39,1)_0%,rgba(31,41,55,0.48)_50%,rgba(17,24,39,1)_100%)]">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Logo className="w-8 h-8" />
          </Link>

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
      {/* </div> */}
      {/* </div> */}
    </header>
  );
}
