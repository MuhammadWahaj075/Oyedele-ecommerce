import Image from "next/image";
import LogoTwitter from "../../../../public/assets/LogoTwitter.svg";
import LogoFacebook from "../../../../public/assets/LogoFacebook.svg";
import LogoGit from "../../../../public/assets/LogoGit.svg";
import LogoInsta from "../../../../public/assets/LogoInsta.svg";
export default function Footer() {
  return (
    <div className="bg-[#170F28] text-white   sm:py-[29px] px-[24px] sm:px-[24px] md:px-[45px] xl:px-[120px] ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-[30px] font-semibold text-[#F5F1FF] tracking-[.50em]">
            OYEDELE
          </h2>
          <p className="text-sm font-[400] text-[#D2BCFF] mt-2 ">
            Oyedele is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </p>
        </div>
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-[18px] text-[#F5F1FF] font-[500] mb-2">
            Quick Links
          </h3>
          <ul className="text-sm text-gray-400 space-y-2 ">
            <li>
              <a href="#" className="hover:text-gray-300 text-[#D2BCFF]">
                Web Chat
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 text-[#D2BCFF]">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 text-[#D2BCFF]">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 text-[#D2BCFF]">
                GDPR Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 text-[#D2BCFF]">
                Cookies Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
        <p className="text-[12px] text-[400] text-[#9064E8] tracking-widest">
          © COPYRIGHT 2023, ALL RIGHTS RESERVED BY OYEDELE
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <div className="bg-[#704EB5] rounded-full p-[10px]">
            <Image src={LogoTwitter} className="w-[15px] h-[15px]" />
          </div>
          <div className="bg-[#704EB5] rounded-full p-[10px]">
            <Image src={LogoFacebook} className="w-[15px] h-[15px]" />
          </div>
          <div className="bg-[#704EB5] rounded-full p-[10px]">
            <Image src={LogoInsta} className="w-[15px] h-[15px]" />
          </div>
          <div className="bg-[#704EB5] rounded-full p-[10px]">
            <Image src={LogoGit} className="w-[15px] h-[15px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
