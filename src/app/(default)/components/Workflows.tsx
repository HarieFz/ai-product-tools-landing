import Image from "next/image";
import React from "react";
import SecondIlustration from "../../../../public/images/secondary-illustration.svg";
import Workflow01 from "../../../../public/images/workflow-01.png";
import Workflow02 from "../../../../public/images/workflow-02.png";
import Workflow03 from "../../../../public/images/workflow-03.png";
import ArrowRight from "../../../../public/images/arrow-right-svgrepo-com.svg";
import Spotlight from "@/components/Spotlight";
import Link from "next/link";

export default function Workflows() {
  const workflows = [
    { img: Workflow01, title: "Built-in Tools" },
    { img: Workflow02, title: "Scale Instantly" },
    { img: Workflow03, title: "Tailored Flows" },
  ];

  return (
    <div className="relative mb-20">
      <div className="absolute top-[-620px] -left-28 -z-10">
        <SecondIlustration className="w-full h-full" />
      </div>
      <div className="mb-3">
        <div className="flex items-center justify-center gap-[10px]">
          <div className="w-8 h-[1px] bg-linear-to-r from-0% from-[#C7D2FE]/[0%] to-100% to-[#C7D2FE]/[48%]"></div>
          <div>
            <p className="bg-linear-to-r from-0% from-[#6366F1] to-100% to-[#C7D2FE] bg-clip-text text-transparent">
              Tailored Workflows
            </p>
          </div>
          <div className="w-8 h-[1px] bg-linear-to-l from-0% from-[#C7D2FE]/[0%] to-100% to-[#C7D2FE]/[48%]"></div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mb-20">
        <h2 className="animate-gradient bg-[linear-gradient(to_right,_#F9FAFB,_#E5E7EB,_#C7D2FE,_#E5E7EB,_#F9FAFB)] bg-[length:200%_auto] bg-clip-text font-nacelle font-semibold text-transparent text-[40px] mb-4">
          Map your product journey
        </h2>

        <p className="text-lg leading-7 text-center tracking-[-0.25px] text-[#838AA7]">
          Simple and elegant interface to start collaborating with your team in minutes. It seamlessly <br /> integrates
          with your code and your favorite programming languages.
        </p>
      </div>

      <Spotlight className="group/spotlight grid grid-cols-3 justify-center gap-6 mb-20">
        {workflows.map((item, index) => (
          <Link
            key={index}
            href="#0"
            className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px 
              before:pointer-events-none 
              before:absolute 
              before:-left-40 
              before:-top-40 
              before:z-10 
              before:h-80 
              before:w-80 
              before:translate-x-[var(--mouse-x)] 
              before:translate-y-[var(--mouse-y)] 
              before:rounded-full 
              before:bg-indigo-500/80 
              before:opacity-0 
              before:blur-3xl 
              before:transition-opacity 
              before:duration-500 
              
              after:pointer-events-none 
              after:absolute 
              after:-left-48 
              after:-top-48 
              after:z-30 
              after:h-64 
              after:w-64 
              after:translate-x-[var(--mouse-x)] 
              after:translate-y-[var(--mouse-y)] 
              after:rounded-full 
              after:bg-indigo-500 
              after:opacity-0 
              after:blur-3xl 
              after:transition-opacity 
              after:duration-500 
              hover:after:opacity-20 
              group-hover/spotlight:before:opacity-100"
          >
            <div className="relative z-20 h-full p-6 overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
              <div className="absolute top-6 right-6 opacity-0 transition-opacity group-hover/card:opacity-100">
                <div className="rounded-full border-[0.5px] border-[#374151]/50">
                  <div className="p-[10px] rounded-full bg-[#1F2937] border border-[#374151] text-white">
                    <ArrowRight />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <Image src={item.img} alt="" width={0} height={0} sizes="100vw" className="w-full h-full" />
              </div>
              <div className="w-fit bg-linear-to-t from-0% from-[#1F2937] to-100% to-[#1F2937] rounded-3xl px-[10px] py-0.5 mb-3">
                <p className="text-sm bg-linear-to-r from-0% from-[#6366F1] to-100% to-[#C7D2FE] bg-clip-text text-transparent">
                  {item.title}
                </p>
              </div>
              <div>
                <p className="text-[15px] leading-[23px] tracking-[-0.25px] text-[#838AA7]">
                  Streamline the product development flow with a content platform that’s aligned across specs and
                  insights.
                </p>
              </div>
            </div>
          </Link>
        ))}
      </Spotlight>

      <div className="w-full h-[1px] bg-linear-to-r from-0% from-[#9CA3AF]/[0%] via-50% via-[#9CA3AF]/[24%] to-100% to-[#9CA3AF]/[0%] shadow-[0_0_24px_0_rgba(99,102,241,0.32)]" />
    </div>
  );
}
