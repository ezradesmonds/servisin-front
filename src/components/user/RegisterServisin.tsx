import React, { FormEvent, useId, useState } from "react";
// Assumes you will provide the following assets in the same folder or update imports
import google from "./google.png";
import icon from "./icon.svg";
import icon2 from "./icon-2.svg";
import icon3 from "./icon-3.svg";
import icon4 from "./icon-4.svg";
import icon5 from "./icon-5.svg";
import icon6 from "./icon-6.svg";
import icon7 from "./icon-7.svg";
import image from "./image.svg";
import logoServisin from "./icon/logo_servisin.png";

type FormState = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agree: boolean;
};

const initialFormState: FormState = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  agree: false,
};

export const RegisterServisin = (): React.JSX.Element => {
  const fullNameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const confirmPasswordId = useId();
  const termsId = useId();

  const [form, setForm] = useState<FormState>(initialFormState);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="flex flex-col h-[1404px] items-center relative bg-[#f9f9ff] overflow-x-hidden">
      <div className="absolute -left-20 bottom-[104px] w-64 h-64 bg-[#003f870d] rounded-full blur-[32px]" />
      <div className="absolute top-40 -right-20 w-80 h-80 bg-[#8653000d] rounded-full blur-[32px]" />
      <div className="flex flex-col max-w-md h-[1404px] items-center pt-28 pb-12 px-8 relative w-full">
        <header className="items-start pt-0 pb-12 px-0 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
          <div className="items-center gap-[10.8px] flex flex-col relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-start justify-center p-4 relative flex-[0_0_auto] bg-white rounded-3xl border border-solid border-[#f2f3fc]">
              <div className="absolute w-full h-full top-0 left-0 bg-[#ffffff01] rounded-3xl shadow-[0px_2px_8px_-2px_#003f870a,0px_4px_20px_-2px_#003f8714]" />
              <img src={logoServisin} alt="Logo" className="relative max-w-[342px] w-20 h-20 rounded-2xl object-cover" />
            </div>
            <div className="flex flex-col items-center pt-[21.2px] pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
              <h1 className="relative flex items-center justify-center w-[213.77px] h-9 mt-[-1.00px] [font-family:'Manrope-ExtraBold',Helvetica] font-extrabold text-[#003f87] text-3xl text-center tracking-[-0.75px] leading-9 whitespace-nowrap">
                Buat Akun Baru
              </h1>
            </div>
            <div className="flex flex-col max-w-60 w-60 items-center relative flex-[0_0_auto]">
              <p className="relative flex items-center justify-center w-[200px] h-[27px] mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#424752] text-sm text-center tracking-[0] leading-[22.8px] whitespace-nowrap">
                Selamat datang!
              </p>
            </div>
          </div>
        </header>
        <section
          aria-label="Formulir pendaftaran"
          className="flex flex-col items-start gap-8 pt-[31px] pb-8 px-8 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[40px] border border-solid border-[#f2f3fc]"
        >
          <form
            className="pt-0 pb-4 px-0 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]"
            onSubmit={handleSubmit}
          >
            <div className="gap-6 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch w-full h-[78.5px]">
                <label
                  className="absolute -top-px left-1 w-[97px] h-[17px] flex items-center [font-family:'Manrope-Bold',Helvetica] font-bold text-[#003f87] text-[11px] tracking-[1.10px] leading-[16.5px] whitespace-nowrap"
                  htmlFor={fullNameId}
                >
                  NAMA LENGKAP
                </label>
                <div className="flex flex-col w-full items-start absolute top-6 left-0">
                  <div className="flex items-start justify-center pl-12 pr-4 pt-[17px] pb-[18px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-2xl overflow-hidden border border-solid border-[#7277841a]">
                    <input
                      id={fullNameId}
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="Nama Lengkap"
                      value={form.fullName}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          fullName: e.target.value,
                        }))
                      }
                      className="relative grow border-[none] [background:none] self-stretch mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#424752] placeholder:text-[#c2c6d499] text-sm tracking-[0] leading-[normal] p-0"
                    />
                  </div>
                  <img
                    className="absolute h-[calc(100%_-_20px)] top-5 left-[19px] w-[13px] pointer-events-none"
                    alt=""
                    aria-hidden="true"
                    src={icon}
                  />
                </div>
              </div>
              <div className="relative self-stretch w-full h-[78.5px]">
                <label
                  className="absolute -top-px left-1 w-[156px] h-[17px] flex items-center [font-family:'Manrope-Bold',Helvetica] font-bold text-[#003f87] text-[11px] tracking-[1.10px] leading-[16.5px] whitespace-nowrap"
                  htmlFor={emailId}
                >
                  EMAIL
                </label>
                <div className="flex flex-col w-full items-start absolute top-6 left-0">
                  <div className="flex items-start justify-center pl-12 pr-4 pt-[17px] pb-[18px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-2xl overflow-hidden border border-solid border-[#7277841a]">
                    <input
                      className="relative grow border-[none] [background:none] self-stretch mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#424752] placeholder:text-[#c2c6d499] text-sm tracking-[0] leading-[normal] p-0"
                      id={emailId}
                      name="email"
                      placeholder="email@contoh.com"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, email: e.target.value }))
                      }
                    />
                  </div>
                  <img
                    className="absolute h-[calc(100%_-_20px)] top-5 left-4 w-5 pointer-events-none"
                    alt=""
                    aria-hidden="true"
                    src={image}
                  />
                </div>
              </div>
              <div className="relative self-stretch w-full h-[78.5px]">
                <label
                  className="absolute -top-px left-1 w-[74px] h-[17px] flex items-center [font-family:'Manrope-Bold',Helvetica] font-bold text-[#003f87] text-[11px] tracking-[1.10px] leading-[16.5px] whitespace-nowrap"
                  htmlFor={passwordId}
                >
                  KATA SANDI
                </label>
                <div className="flex flex-col w-full items-start absolute top-6 left-0">
                  <div className="flex items-start justify-center pt-[17px] pb-[18px] pl-12 pr-12 self-stretch w-full flex-[0_0_auto] rounded-2xl overflow-hidden border-[#7277841a] relative bg-white border border-solid">
                    <input
                      id={passwordId}
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="Min. 8 karakter"
                      value={form.password}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                      className="relative grow border-[none] [background:none] self-stretch mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#424752] placeholder:text-[#c2c6d499] text-sm tracking-[0] leading-[normal] p-0"
                    />
                  </div>
                  <img
                    className="absolute h-[calc(100%_-_18px)] top-[18px] left-[19px] w-[13px] pointer-events-none"
                    alt=""
                    aria-hidden="true"
                    src={icon2}
                  />
                  <button
                    type="button"
                    aria-label={
                      showPassword
                        ? "Sembunyikan kata sandi"
                        : "Tampilkan kata sandi"
                    }
                    aria-pressed={showPassword}
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute top-[19px] right-0 inline-flex items-center justify-center w-[18px] h-[calc(100%_-_19px)]"
                  >
                    <img
                      className="w-[18px] h-[calc(100%_-_0px)]"
                      alt=""
                      aria-hidden="true"
                      src={icon3}
                    />
                  </button>
                </div>
              </div>
              <div className="relative self-stretch w-full h-[78.5px]">
                <label
                  className="absolute -top-px left-1 w-[129px] h-[17px] flex items-center [font-family:'Manrope-Bold',Helvetica] font-bold text-[#003f87] text-[11px] tracking-[1.10px] leading-[16.5px] whitespace-nowrap"
                  htmlFor={confirmPasswordId}
                >
                  ULANGI KATA SANDI
                </label>
                <div className="flex flex-col w-full items-start absolute top-6 left-0">
                  <div className="flex items-start justify-center pt-[17px] pb-[18px] pl-12 pr-12 self-stretch w-full flex-[0_0_auto] rounded-2xl overflow-hidden border-[#7277841a] relative bg-white border border-solid">
                    <input
                      id={confirmPasswordId}
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="Min. 8 karakter"
                      value={form.confirmPassword}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          confirmPassword: e.target.value,
                        }))
                      }
                      className="relative grow border-[none] [background:none] self-stretch mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#424752] placeholder:text-[#c2c6d499] text-sm tracking-[0] leading-[normal] p-0"
                    />
                  </div>
                  <img
                    className="absolute h-[calc(100%_-_18px)] top-[18px] left-[19px] w-[13px] pointer-events-none"
                    alt=""
                    aria-hidden="true"
                    src={icon6}
                  />
                  <button
                    type="button"
                    aria-label={
                      showConfirmPassword
                        ? "Sembunyikan ulangi kata sandi"
                        : "Tampilkan ulangi kata sandi"
                    }
                    aria-pressed={showConfirmPassword}
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute top-[19px] right-0 inline-flex items-center justify-center w-[18px] h-[calc(100%_-_19px)]"
                  >
                    <img
                      className="w-[18px] h-[calc(100%_-_0px)]"
                      alt=""
                      aria-hidden="true"
                      src={icon7}
                    />
                  </button>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-1 pb-5 px-1 relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex flex-col h-[22px] items-start pt-0.5 pb-0 px-0 relative flex-[0_0_auto]">
                  <div className="inline-flex h-5 items-center relative">
                    <input
                      id={termsId}
                      name="agree"
                      type="checkbox"
                      checked={form.agree}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          agree: e.target.checked,
                        }))
                      }
                      className="w-5 h-5 rounded-md border-[#c2c6d4] relative bg-white border border-solid checked:bg-[#003f87] checked:border-[#003f87]"
                    />
                  </div>
                </div>
                <label
                  htmlFor={termsId}
                  className="relative w-[286px] h-[39px] mr-[-66.00px] cursor-pointer"
                >
                  <span className="absolute top-0 left-0 w-24 h-5 [font-family:'Inter-Regular',Helvetica] font-normal text-[#424752] text-xs tracking-[0] leading-[19.5px] flex items-center whitespace-nowrap">
                    Saya menyetujui
                  </span>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center absolute top-0 left-24"
                  >
                    <span className="relative justify-center w-[110.88px] h-5 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#003f87] text-xs text-center tracking-[0] leading-[19.5px] flex items-center whitespace-nowrap">
                      Syarat &amp; Ketentuan
                    </span>
                  </a>
                  <span className="absolute top-0 left-[207px] w-8 h-5 [font-family:'Inter-Regular',Helvetica] font-normal text-[#424752] text-xs tracking-[0] leading-[19.5px] flex items-center whitespace-nowrap">
                    {" "}
                    serta
                  </span>
                  <a
                    href="#"
                    className="inline-flex absolute top-[19px] left-0 items-center justify-center"
                  >
                    <span className="relative justify-center w-[99.09px] h-5 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#003f87] text-xs text-center tracking-[0] leading-[19.5px] flex items-center whitespace-nowrap">
                      Kebijakan Privasi
                    </span>
                  </a>
                  <span className="absolute top-[19px] left-[99px] w-[52px] h-5 [font-family:'Inter-Regular',Helvetica] font-normal text-[#424752] text-xs tracking-[0] leading-[19.5px] flex items-center whitespace-nowrap">
                    {" "}
                    Servisin.
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-[11.99px] px-0 py-4 relative self-stretch w-full flex-[0_0_auto] bg-[#003f87] rounded-2xl"
              >
                <div className="absolute w-full h-full top-0 left-0 bg-[#ffffff01] rounded-2xl shadow-[0px_8px_10px_-6px_#003f8733,0px_20px_25px_-5px_#003f8733]" />
                <span className="relative justify-center w-[141.13px] h-7 mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-white text-lg text-center tracking-[0] leading-7 flex items-center whitespace-nowrap">
                  Daftar Sekarang
                </span>
                <span className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                  <img
                    className="relative w-[13.33px] h-[13.33px]"
                    alt=""
                    aria-hidden="true"
                    src={icon4}
                  />
                </span>
              </button>
            </div>
          </form>
          <div className="flex flex-col items-start px-0 py-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="absolute w-[calc(100%_-_235px)] h-[calc(100%_-_32px)] top-4 left-0 border-t [border-top-style:solid] border-[#c2c6d466]" />
            <div className="absolute w-[calc(100%_-_235px)] h-[calc(100%_-_32px)] top-4 left-[235px] border-t [border-top-style:solid] border-[#c2c6d466]" />
            <div className="flex items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex items-center w-[135.11px] h-[17px] mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-[#727784] text-[10px] tracking-[1.10px] leading-[16.5px] whitespace-nowrap">
                ATAU DAFTAR DENGAN
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-[52px] h-fit gap-4 self-stretch">
            <button
              type="button"
              className="all-[unset] box-border relative row-[1_/_2] col-[1_/_2] justify-self-center w-full h-fit flex gap-3 pl-[23.73px] pr-[23.74px] py-[15px] bg-white rounded-2xl border border-solid border-[#c2c6d499] items-center justify-center cursor-pointer"
            >
              <div className="absolute w-full h-full top-0 left-0 bg-[#ffffff01] rounded-2xl shadow-[0px_2px_8px_-2px_#003f870a,0px_4px_20px_-2px_#003f8714]" />
              <img
                className="relative w-[19px] h-[19px] object-cover"
                alt="Google"
                src={google}
              />
              <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                <div className="relative justify-center w-[48.53px] h-5 mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-[#191c21] text-sm text-center tracking-[0] leading-5 flex items-center whitespace-nowrap">
                  Google
                </div>
              </div>
            </button>
          </div>
        </section>
        <footer className="contents">
          <div className="flex-col pt-12 pb-0 px-0 inline-flex items-start relative flex-[0_0_auto]">
            <div className="justify-center gap-1 inline-flex items-start relative flex-[0_0_auto]">
              <p className="relative justify-center w-[133.63px] h-5 mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#424752] text-sm text-center tracking-[0] leading-5 flex items-center whitespace-nowrap">
                Sudah punya akun?
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center relative flex-[0_0_auto]"
              >
                <span className="relative justify-center w-[45.19px] h-5 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#003f87] text-sm text-center tracking-[0] leading-5 flex items-center whitespace-nowrap">
                  Masuk
                </span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-[55px] w-[147px] h-fit gap-8 pt-16 pb-0 px-0">
            <div className="relative row-[1_/_2] col-[1_/_2] w-[147px] h-fit flex flex-col items-center justify-center gap-2 bg-white bg-blend-saturation opacity-50">
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <img
                  className="relative w-4 h-5"
                  alt=""
                  aria-hidden="true"
                  src={icon5}
                />
              </div>
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="relative w-[109.63px] h-[15px] mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#191c21] text-[10px] tracking-[1.00px] leading-[15px] flex items-center whitespace-nowrap">
                  DATA TERENKRIPSI
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="flex justify-center w-full mt-8 pb-8 z-10 relative">
          <a href="#" className="text-[#003f87] font-semibold text-sm hover:underline">
            Open Technician App
          </a>
        </div>
      </div>
    </main>
  );
};

export default RegisterServisin;
