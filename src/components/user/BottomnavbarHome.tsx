import React from "react";
import { useRouter } from "expo-router";
import homeIcon from "./icon/home.svg";
import calendarIcon from "./icon/calendar.svg";
import personIcon from "./icon/person.svg";
import magnifierIcon from "./icon/magnifier.svg";
import chatBubbleIcon from "./icon/chat_bubble.svg";

const navItems = [
  {
    label: "HOME",
    href: "/home",
    iconSrc: homeIcon,
    iconAlt: "Home",
    containerClassName:
      "flex flex-col w-[54px] h-[34px] items-center justify-center px-5 py-2.5 absolute top-[calc(50.00%_-_17px)] left-[15px]",
    iconWrapperClassName:
      "inline-flex flex-col items-start relative flex-[0_0_auto] mt-[-11.50px] ml-[-4.00px] mr-[-4.00px]",
    iconClassName: "relative w-[22px] h-[18px]",
    labelWrapperClassName:
      "mb-[-11.50px] ml-[-10.14px] mr-[-10.14px] inline-flex flex-col items-start pt-1 pb-0 px-0 relative flex-[0_0_auto]",
    labelClassName:
      "relative flex items-center w-[34.28px] h-[15px] mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-slate-400 text-[10px] tracking-[1.00px] leading-[15px] whitespace-nowrap",
  },
  {
    label: "DISCOVER",
    href: "/discover",
    iconSrc: magnifierIcon,
    iconAlt: "Discover",
    containerClassName:
      "flex flex-col w-[71px] h-9 items-center justify-center px-5 py-2.5 absolute top-[calc(50.00%_-_18px)] left-20",
    iconWrapperClassName: "",
    iconClassName: "relative w-[18px] h-[18px] mt-[-10.50px]",
    labelWrapperClassName:
      "mb-[-10.50px] ml-[-29.54px] mr-[-29.54px] inline-flex flex-col items-start pt-1 pb-0 px-0 relative flex-[0_0_auto]",
    labelClassName:
      "relative flex items-center justify-center w-[90.08px] h-[15px] mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-slate-400 text-[10px] text-center tracking-[1.00px] leading-[15px] whitespace-nowrap",
  },
  {
    label: "CHAT",
    href: "/chat",
    iconSrc: chatBubbleIcon,
    iconAlt: "Chat",
    containerClassName:
      "flex flex-col w-[52px] h-9 items-center justify-center px-5 py-2.5 absolute top-[calc(50.00%_-_19px)] left-[169px]",
    iconWrapperClassName:
      "inline-flex flex-col items-start relative flex-[0_0_auto] mt-[-11.50px] ml-[-4.00px] mr-[-4.00px]",
    iconClassName: "relative w-5 h-5",
    labelWrapperClassName:
      "mb-[-11.50px] ml-[-9.77px] mr-[-9.77px] inline-flex flex-col items-start pt-1 pb-0 px-0 relative flex-[0_0_auto]",
    labelClassName:
      "w-[31.55px] relative flex items-center h-[15px] mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-slate-400 text-[10px] tracking-[1.00px] leading-[15px] whitespace-nowrap",
  },
  {
    label: "BOOKINGS",
    href: "/bookings",
    iconSrc: calendarIcon,
    iconAlt: "Bookings",
    containerClassName:
      "flex flex-col w-[75px] h-9 items-center justify-center px-5 py-2.5 absolute top-[calc(50.00%_-_20px)] left-[235px]",
    iconWrapperClassName:
      "inline-flex flex-col items-start relative flex-[0_0_auto] mt-[-11.50px]",
    iconClassName: "relative w-[18px] h-5",
    labelWrapperClassName:
      "mb-[-11.50px] ml-[-13.00px] mr-[-13.00px] inline-flex flex-col items-start pt-1 pb-0 px-0 relative flex-[0_0_auto]",
    labelClassName:
      "w-[61px] relative flex items-center h-[15px] mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-slate-400 text-[10px] tracking-[1.00px] leading-[15px] whitespace-nowrap",
  },
  {
    label: "PROFILE",
    href: "/profile",
    iconSrc: personIcon,
    iconAlt: "Profile",
    containerClassName:
      "flex flex-col w-[65px] h-[34px] items-center justify-center px-5 py-2.5 absolute top-[calc(50.00%_-_19px)] left-[315px] bg-[#ffffff08]",
    iconWrapperClassName:
      "inline-flex flex-col items-start relative flex-[0_0_auto] mt-[-10.50px]",
    iconClassName: "relative w-4 h-4",
    labelWrapperClassName:
      "mb-[-10.50px] ml-[-11.44px] mr-[-11.44px] inline-flex flex-col items-start pt-1 pb-0 px-0 relative flex-[0_0_auto]",
    labelClassName:
      "w-[47.88px] relative flex items-center h-[15px] mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-slate-400 text-[10px] tracking-[1.00px] leading-[15px] whitespace-nowrap",
  },
];

export const BottomnavbarHome = (): React.JSX.Element => {
  const router = useRouter();
  return (
    <nav
      aria-label="Bottom navigation"
      className="flex flex-col w-[390px] items-center justify-center gap-2.5 relative"
    >
      <div className="relative self-stretch w-full h-[100px] bg-[#f8fafce6] rounded-[24px_24px_0px_0px] border-t [border-top-style:solid] border-[#e2e8f033] shadow-[0px_-4px_20px_#0000000d] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]">
        {navItems.map((item) => (
          <button
            key={item.label}
            type="button"
            aria-label={item.label}
            className={item.containerClassName}
            onClick={() => router.push(item.href as any)}
          >
            {item.iconWrapperClassName ? (
              <div className={item.iconWrapperClassName}>
                <img
                  className={item.iconClassName}
                  alt={item.iconAlt}
                  src={item.iconSrc}
                />
              </div>
            ) : (
              <img
                className={item.iconClassName}
                alt={item.iconAlt}
                src={item.iconSrc}
              />
            )}
            <div className={item.labelWrapperClassName}>
              <div className={item.labelClassName}>{item.label}</div>
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
};
