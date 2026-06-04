import React from "react";
import icon from "./icon/notification.svg";
import logoServisin from "./logo-servisin.svg";
import profil2 from "./profil-2.svg";

export const HeaderTop = (): React.JSX.Element => {
  return (
    <header className="flex flex-col w-[390px] items-start relative bg-[#f8fafccc]">
      <div className="flex max-w-screen-xl items-center justify-between px-6 py-4 relative w-full flex-[0_0_auto]">
        <div className="flex w-[246px] items-center gap-3 relative">
          <img
            className="relative w-[42px] h-[42px] aspect-[1] object-cover"
            alt="Servisin logo"
            src={logoServisin}
          />
          <div className="flex flex-col w-[170px] items-start relative">
            <div className="relative flex items-center w-[76.69px] h-7 mt-[-1.00px] [font-family:'Manrope-ExtraBold',Helvetica] font-extrabold text-blue-900 text-[19px] tracking-[-0.50px] leading-7 whitespace-nowrap">
              Servisin
            </div>
          </div>
        </div>
        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <button
            type="button"
            aria-label="Notifications"
            className="inline-flex flex-col items-center justify-center p-2 relative flex-[0_0_auto] rounded-full"
          >
            <span className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <img
                className="relative w-4 h-5"
                alt=""
                src={icon}
                aria-hidden="true"
              />
            </span>
          </button>
          <button
            type="button"
            aria-label="Open profile"
            className="flex w-10 h-10 items-center justify-center relative bg-[#d7e2ff] rounded-full overflow-hidden border-2 border-solid border-white rotate-180"
          >
            <img
              className="relative w-10 h-10 -rotate-180 aspect-[1] object-cover"
              alt="Profile"
              src={profil2}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
