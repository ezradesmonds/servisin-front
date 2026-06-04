import React, { FormEvent, useId, useState } from "react";
// Assumes you will provide the following assets in the same folder or update imports
import google from "./google.png";
import icon from "./icon.svg";
import icon2 from "./icon-2.svg";
import icon3 from "./icon-3.svg";
import image from "./image.svg";
import logoServisin from "./icon/logo_servisin.png";

export const LoginServisin = (): React.JSX.Element => {
  const emailId = useId();
  const passwordId = useId();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const socialProviders = [
    {
      id: "google",
      name: "Google",
      icon: google,
      alt: "Google",
    },
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="flex flex-col min-h-[823px] items-start relative overflow-hidden bg-[#f9f9ff]">
      <div className="flex items-center justify-center pt-20 pb-32 px-6 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col max-w-md items-start gap-8 relative flex-1 grow">
          <header className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-start justify-center p-4 relative flex-[0_0_auto] bg-white rounded-3xl border border-solid border-[#f2f3fc]">
              <div
                aria-hidden="true"
                className="absolute w-full h-full top-0 left-0 bg-[#ffffff01] rounded-3xl shadow-[0px_2px_8px_-2px_#003f870a,0px_4px_20px_-2px_#003f8714]"
              />
              <img src={logoServisin} alt="Logo" className="relative max-w-[342px] w-20 h-20 rounded-2xl object-cover" />
            </div>
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                <h1 className="relative flex items-center justify-center w-[225.94px] h-9 mt-[-1.00px] [font-family:'Manrope-ExtraBold',Helvetica] font-extrabold text-[#003f87] text-3xl text-center tracking-[-0.75px] leading-9 whitespace-nowrap">
                  Selamat Datang
                </h1>
              </div>
              <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative flex items-center justify-center w-[276.02px] h-6 mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#003f87] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                  Masuk untuk melanjutkan ke Servisin
                </p>
              </div>
            </div>
          </header>
          <section
            aria-labelledby="login-form-title"
            className="flex flex-col items-start gap-8 pt-[31px] pb-8 px-8 relative self-stretch flex-[0_0_auto] bg-white border border-solid border-[#f2f3fc] w-full rounded-[40px]"
          >
            <div
              aria-hidden="true"
              className="absolute h-full top-0 left-0 bg-[#ffffff01] shadow-[0px_20px_40px_-8px_#003f871f] w-full rounded-[40px]"
            />
            <h2 id="login-form-title" className="sr-only">
              Form masuk Servisin
            </h2>
            <form
              className="flex flex-col items-start gap-[23px] relative self-stretch w-full flex-[0_0_auto]"
              onSubmit={handleSubmit}
            >
              <div className="flex-col items-end gap-2 flex relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <label
                    className="relative flex items-center w-[185.13px] h-5 mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-[#003f87] text-[13px] tracking-[0] leading-[19.5px] whitespace-nowrap"
                    htmlFor={emailId}
                  >
                    EMAIL
                  </label>
                </div>
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-start justify-center pl-12 pr-4 py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-2xl overflow-hidden border border-solid border-[#c2c6d480]">
                    <input
                      aria-label="Email"
                      autoComplete="email"
                      className="relative grow border-[none] [background:none] self-stretch mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#424752] placeholder:text-[#72778499] text-base tracking-[0] leading-[normal] p-0"
                      id={emailId}
                      name="email"
                      placeholder="user@email.com"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <img
                    aria-hidden="true"
                    className="absolute h-[62.64%] top-[37.36%] left-5 w-[15px]"
                    alt=""
                    src={icon}
                  />
                </div>
              </div>
              <div className="flex-col items-end gap-2 flex relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <label
                    className="relative flex items-center w-[120px] h-5 mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-[#003f87] text-[13px] tracking-[0] leading-[19.5px] whitespace-nowrap"
                    htmlFor={passwordId}
                  >
                    KATA SANDI
                  </label>
                </div>
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="items-start justify-center px-12 py-[18px] bg-white rounded-2xl overflow-hidden border border-solid border-[#c2c6d480] flex relative self-stretch w-full flex-[0_0_auto]">
                    <input
                      aria-label="Kata sandi"
                      autoComplete="current-password"
                      className="relative grow border-[none] [background:none] self-stretch mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#424752] placeholder:text-[#72778499] text-base tracking-[0] leading-[normal] p-0"
                      id={passwordId}
                      name="password"
                      placeholder="••••••••"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                  <img
                    aria-hidden="true"
                    className="absolute h-[67.39%] top-[32.61%] left-5 w-[15px]"
                    alt=""
                    src={image}
                  />
                  <button
                    aria-label={
                      showPassword
                        ? "Sembunyikan kata sandi"
                        : "Tampilkan kata sandi"
                    }
                    className="absolute top-[38.51%] right-0 flex h-[61.49%] w-[18px] items-center justify-center"
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                  >
                    <img
                      aria-hidden="true"
                      className="h-full w-[18px]"
                      alt=""
                      src={icon2}
                    />
                  </button>
                </div>
                <div className="flex items-start justify-end pl-0 pr-1 py-0 relative self-stretch w-full flex-[0_0_auto]">
                  <a
                    className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto]"
                    href="#"
                  >
                    <span className="relative w-[117.11px] h-5 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#003f87cc] text-sm tracking-[0] leading-5 whitespace-nowrap flex items-center">
                      Lupa Kata Sandi?
                    </span>
                  </a>
                </div>
              </div>
              <button
                className="flex h-[45px] items-center justify-center gap-[11.99px] pt-px pb-0 px-0 relative self-stretch bg-[linear-gradient(174deg,rgba(0,63,135,1)_0%,rgba(0,86,179,1)_100%)] w-full rounded-2xl"
                type="submit"
              >
                <div
                  aria-hidden="true"
                  className="absolute h-[calc(100%_-_1px)] top-px left-0 bg-[#ffffff01] shadow-[0px_4px_6px_-4px_#003f8733,0px_10px_15px_-3px_#003f8733] w-full rounded-2xl"
                />
                <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                  <div className="relative justify-center w-[50.19px] h-6 mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap flex items-center">
                    Masuk
                  </div>
                </div>
                <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                  <img
                    aria-hidden="true"
                    className="relative w-[13.33px] h-[13.33px]"
                    alt=""
                    src={icon3}
                  />
                </div>
              </button>
            </form>
            <div className="flex flex-col items-start px-0 py-2 relative self-stretch w-full flex-[0_0_auto]">
              <div
                aria-hidden="true"
                className="absolute w-full h-[calc(100%_-_32px)] top-4 left-0 border-t [border-top-style:solid] border-[#c2c6d466]"
              />
              <div className="flex items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch w-[167.11px] bg-white">
                  <div className="absolute -top-px left-4 w-[135px] h-[17px] [font-family:'Manrope-Bold',Helvetica] font-bold text-[#727784] text-[11px] tracking-[1.10px] leading-[16.5px] whitespace-nowrap flex items-center">
                    ATAU MASUK DENGAN
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 grid-rows-[52px] h-fit gap-4 w-full">
              {socialProviders.map((provider) => (
                <button
                  key={provider.id}
                  className="all-[unset] box-border relative row-[1_/_2] col-[1_/_2] justify-self-center w-full h-fit flex items-center justify-center gap-3 pl-[23.73px] pr-[23.74px] py-[15px] bg-white rounded-2xl border border-solid border-[#c2c6d499]"
                  type="button"
                >
                  <div
                    aria-hidden="true"
                    className="absolute w-full h-full top-0 left-0 bg-[#ffffff01] rounded-2xl shadow-[0px_2px_8px_-2px_#003f870a,0px_4px_20px_-2px_#003f8714]"
                  />
                  <img
                    className="relative w-[19px] h-[19px] object-cover"
                    alt={provider.alt}
                    src={provider.icon}
                  />
                  <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                    <div className="relative justify-center w-[48.53px] h-5 mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-[#191c21] text-sm text-center tracking-[0] leading-5 whitespace-nowrap flex items-center">
                      {provider.name}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>
          <footer className="flex items-start justify-center gap-1 px-0 py-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative justify-center w-[151.89px] h-6 mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#424752] text-base text-center tracking-[0] leading-6 whitespace-nowrap flex items-center">
              Belum punya akun?
            </div>
            <a
              className="relative flex items-center justify-center w-[123.41px] h-6 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#003f87] text-base text-center tracking-[0] leading-6 whitespace-nowrap"
              href="#"
            >
              Daftar sekarang
            </a>
          </footer>
        </div>
      </div>
      <div className="absolute -top-24 left-[3px] w-96 h-96 bg-[#003f870d] rounded-full blur-[50px]" />
      <div className="absolute right-[3px] bottom-[100px] w-96 h-96 bg-[#8653000d] rounded-full blur-[50px]" />
      
      <div className="flex justify-center w-full pb-8 z-10 relative">
        <a href="#" className="text-[#003f87] font-semibold text-sm hover:underline">
          Open Technician App
        </a>
      </div>
    </main>
  );
};

export default LoginServisin;
