import CustomButton from "@/components/CustomButton";
import { Field, Input, Label } from "@headlessui/react";
import React from "react";

export default function Signin() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="mb-12">
        <h1 className="animate-gradient bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle font-semibold text-transparent text-5xl">
          Reset your password
        </h1>
      </div>
      <div className="w-[400px] flex flex-col items-center gap-5">
        <Field className="w-full">
          <Label className="form-label">Email</Label>
          <div className="form-border">
            <Input placeholder="Your email" className="form-input group" />
          </div>
        </Field>

        <div className="w-full shrink-0 flex flex-col gap-5 mt-1">
          <CustomButton variant="primary" size="large">
            Reset Password
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
