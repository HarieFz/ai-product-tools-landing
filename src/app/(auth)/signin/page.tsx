import CustomButton from "@/components/CustomButton";
import { Field, Input, Label } from "@headlessui/react";
import Link from "next/link";
import React from "react";

export default function Signin() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="mb-12">
        <h1 className="animate-gradient bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle font-semibold text-transparent text-5xl">
          Welcome back
        </h1>
      </div>
      <div className="w-[400px] flex flex-col items-center gap-5">
        <Field className="w-full">
          <Label className="form-label">Email</Label>
          <div className="form-border">
            <Input placeholder="Your email" className="form-input group" />
          </div>
        </Field>

        <Field className="w-full">
          <div className="flex justify-between">
            <Label className="form-label">Password</Label>
            <Link href="/forgotpassword" className="text-sm text-[#4B5563]">
              Forgot?
            </Link>
          </div>
          <div className="form-border">
            <Input placeholder="Your password" className="form-input group" />
          </div>
        </Field>

        <div className="w-full shrink-0 flex flex-col gap-5 mt-1">
          <CustomButton variant="primary" size="large">
            Sign In
          </CustomButton>

          <div className="flex items-center justify-between gap-3">
            <div className="w-[181px] h-[1px] bg-linear-to-r from-0% from-[#9CA3AF]/0 via-50% via-[#9CA3AF]/24 to-100% to-[#9CA3AF]/0"></div>
            <div>
              <p className="text-sm italic text-[#4B5563]">or</p>
            </div>
            <div className="w-[181px] h-[1px] bg-linear-to-r from-0% from-[#9CA3AF]/0 via-50% via-[#9CA3AF]/24 to-100% to-[#9CA3AF]/0"></div>
          </div>

          <CustomButton variant="secondary" size="large">
            Sign In with Google
          </CustomButton>
        </div>

        <div>
          <p className="text-sm text-[#838997]">
            Don&#39;t you have an account?{" "}
            <Link href="/signup" className="text-[#6366F1]">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
