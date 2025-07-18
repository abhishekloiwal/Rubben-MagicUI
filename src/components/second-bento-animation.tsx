import { Icons } from "@/components/icons";
import { OrbitingCircles } from "@/components/ui/orbiting-circle";
import { 
  RiNotionFill
} from "react-icons/ri";
import {
  SiGmail,
  SiSalesforce,
  SiHubspot
} from "react-icons/si";
import { 
  PiMicrosoftTeamsLogoFill 
} from "react-icons/pi";
import { 
  FcGoogle 
} from "react-icons/fc";
import { 
  BsSlack 
} from "react-icons/bs";

export function SecondBentoAnimation() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20"></div>
      <div className="pointer-events-none absolute top-0 left-0 h-20 w-full bg-gradient-to-b from-background to-transparent z-20"></div>

      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 size-16 bg-secondary p-2 rounded-full z-30 md:bottom-0 md:top-auto">
        <Icons.logo className="fill-white size-10" />
      </div>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <div className="relative flex h-full w-full items-center justify-center translate-y-0 md:translate-y-32">
          <OrbitingCircles
            index={0}
            iconSize={60}
            radius={100}
            reverse
            speed={1}
          >
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-white shadow-lg">
              <RiNotionFill className="w-7 h-7 text-black" />
            </div>
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-white shadow-lg">
              <BsSlack className="w-7 h-7 text-[#4A154B]" />
            </div>
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-white shadow-lg">
              <SiGmail className="w-7 h-7 text-[#EA4335]" />
            </div>
          </OrbitingCircles>

          <OrbitingCircles index={1} iconSize={60} speed={0.5}>
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-[#00A1E0] shadow-lg">
              <SiSalesforce className="w-7 h-7 text-white" />
            </div>
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-white shadow-lg">
              <PiMicrosoftTeamsLogoFill className="w-7 h-7 text-[#6264A7]" />
            </div>
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-white shadow-lg">
              <FcGoogle className="w-7 h-7" />
            </div>
          </OrbitingCircles>

          <OrbitingCircles
            index={2}
            iconSize={60}
            radius={230}
            reverse
            speed={0.5}
          >
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-white shadow-lg">
              <SiHubspot className="w-7 h-7 text-[#FF7A59]" />
            </div>
          </OrbitingCircles>
        </div>
      </div>
    </div>
  );
}
