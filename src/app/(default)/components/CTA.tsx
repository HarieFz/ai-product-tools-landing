import ArrowRight from "../../../../public/images/arrow-right-svgrepo-com.svg";
import BlurredShape from "../../../../public/images/blurred-shape.svg";
import React from "react";
import CustomButton from "@/components/CustomButton";

export default function CTA() {
  return (
    <div className="relative overflow-hidden mb-12">
      <div className="absolute -top-72 right-32 z-0">
        <BlurredShape />
      </div>
      <div className="relative z-10 py-20 bg-linear-to-r from-0% from-[#1F2937]/0 via-50% via-[#1F2937]/50 to-100% to-[#1F2937]/0">
        <div className="flex flex-col items-center justify-center">
          <h2
            className="animate-gradient bg-[linear-gradient(to_right,_#F9FAFB,_#E5E7EB,_#C7D2FE,_#E5E7EB,_#F9FAFB)] bg-[length:200%_auto] bg-clip-text font-nacelle font-semibold text-transparent text-[40px] mb-4"
            data-aos="fade-up"
          >
            Join the content-first platform
          </h2>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="group" data-aos="fade-up" data-aos-delay={400}>
            <CustomButton variant="primary" size="large">
              <div className="flex items-center gap-1">
                <p>Start Building</p>
                <div className="text-white/50 mt-0.5 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight />
                </div>
              </div>
            </CustomButton>
          </div>
          <div data-aos="fade-up" data-aos-delay={600}>
            <CustomButton variant="secondary" size="large">
              Schedule Demo
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
