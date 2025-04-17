"use client";

import React, { useEffect, useRef, useState } from "react";
import VideoThumb from "../../../../public/images/hero-image-01.jpg";
import Subtract from "../../../../public/images/subtract.svg";
import ArrowRight from "../../../../public/images/arrow-right-svgrepo-com.svg";
import BlurredShapeGray from "../../../../public/images/blurred-shape-gray.svg";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  return (
    <div className="relative flex flex-col items-center mb-20">
      <div className="absolute -bottom-40 -left-40">
        <BlurredShapeGray />
      </div>
      <h1
        className="animate-gradient bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle font-semibold text-transparent text-5xl mb-5"
        data-aos="fade-up"
      >
        AI-driven tools for product teams
      </h1>
      <p
        className="text-xl text-center leading-8 tracking-[-0.25px] text-[#838AA7] mb-8"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        Our landing page template works on all devices, so you only have to set it up once, <br /> and get beautiful
        results forever.
      </p>

      <div className="flex items-center gap-4 mb-16">
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

      <div
        className="relative w-[1024px] h-[576px] rounded-2xl overflow-hidden"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <Image
          src={VideoThumb}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="absolute w-full h-full opacity-55 object-center object-cover"
          priority
        />
        <div className="absolute w-full h-full bg-linear-to-tr from-0% from-[#111827] via-55% via-[#6366F1]/[16%] to-100% to-[#111827]" />

        <button
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <div className="bg-[#080F24] rounded-4xl px-3 py-2 flex items-center gap-3">
            <Subtract className="w-5 h-5" />

            <p className="font-medium text-sm text-[#D1D5DB]">
              Watch Demo <span className="text-[#4B5563]">-</span> 3:47
            </p>
          </div>
        </button>
      </div>

      {/* Modal */}
      <Dialog initialFocus={videoRef} open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogBackdrop
          transition
          className="fixed inset-0 z-99999 bg-black/70 transition-opacity duration-300 ease-out data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-99999 flex px-4 py-6 sm:px-6">
          <div className="mx-auto flex h-full max-w-6xl items-center">
            <DialogPanel
              transition
              className="aspect-video max-h-full w-full overflow-hidden rounded-2xl bg-black shadow-2xl duration-300 ease-out data-closed:scale-95 data-closed:opacity-0"
            >
              <video ref={videoRef} width={1920} height={1080} loop controls>
                <source src={"videos//video.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
