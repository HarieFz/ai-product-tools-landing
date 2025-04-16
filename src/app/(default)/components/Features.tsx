import React from "react";
import FeaturesImage from "../../../../public/images/features.png";
import Features01 from "../../../../public/images/features-01.svg";
import Features02 from "../../../../public/images/features-02.svg";
import Features03 from "../../../../public/images/features-03.svg";
import Features04 from "../../../../public/images/features-04.svg";
import Features05 from "../../../../public/images/features-05.svg";
import Features06 from "../../../../public/images/features-06.svg";
import BlurredShape from "../../../../public/images/blurred-shape.svg";
import Image from "next/image";

export default function Features() {
  const features = [
    {
      Icon: Features01,
      name: "Project Milestones",
    },
    {
      Icon: Features02,
      name: "Team Views",
    },
    {
      Icon: Features03,
      name: "Advanced Search",
    },
    {
      Icon: Features04,
      name: "Strategic Initiatives",
    },
    {
      Icon: Features05,
      name: "Flexible Workflows",
    },
    {
      Icon: Features06,
      name: "Unified Timeline",
    },
  ];

  return (
    <div className="relative mb-20">
      <div className="absolute -bottom-60 -left-[400px]">
        <BlurredShape />
      </div>
      <div className="mb-3">
        <div className="flex items-center justify-center gap-[10px]">
          <div className="w-8 h-[1px] bg-linear-to-r from-0% from-[#C7D2FE]/[0%] to-100% to-[#C7D2FE]/[48%]"></div>
          <div>
            <p className="bg-linear-to-r from-0% from-[#6366F1] to-100% to-[#C7D2FE] bg-clip-text text-transparent">
              Advanced Controls
            </p>
          </div>
          <div className="w-8 h-[1px] bg-linear-to-l from-0% from-[#C7D2FE]/[0%] to-100% to-[#C7D2FE]/[48%]"></div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mb-20">
        <h2 className="animate-gradient bg-[linear-gradient(to_right,_#F9FAFB,_#E5E7EB,_#C7D2FE,_#E5E7EB,_#F9FAFB)] bg-[length:200%_auto] bg-clip-text font-nacelle font-semibold text-transparent text-[40px] mb-4">
          Built for modern product teams
        </h2>
        <p className="text-lg leading-7 text-center tracking-[-0.25px] text-[#838AA7]">
          Simple and elegant interface to start collaborating with your team in minutes. It seamlessly <br /> integrates
          with your code and your favorite programming languages.
        </p>
      </div>

      <div className="mb-20">
        <Image
          src={FeaturesImage}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full"
          data-aos="fade-up"
        />
      </div>

      <div className="grid grid-cols-3 gap-14 mb-20">
        {features.map((item, index) => (
          <div key={index}>
            <div className="mb-3">
              <item.Icon className="w-6 h-6" />
            </div>
            <div>
              <p className="font-nacelle font-semibold tracking-[-0.25px] text-[#E5E7EB] mb-1">{item.name}</p>
              <p className="text-sm tracking-[-0.25px] text-[#838AA7]">
                Track progress across custom flows for your team. Find the right balance for the user, privacy and
                security.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-[1px] bg-linear-to-r from-0% from-[#9CA3AF]/[0%] via-50% via-[#9CA3AF]/[24%] to-100% to-[#9CA3AF]/[0%] shadow-[0_0_24px_0_rgba(99,102,241,0.32)]" />
    </div>
  );
}
