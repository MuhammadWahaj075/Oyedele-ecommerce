import Image from "next/image";
import LogoTwitter from "../../../../public/assets/LogoTwitter.svg";
import LogoFacebook from "../../../../public/assets/LogoFacebook.svg";
import LogoGit from "../../../../public/assets/LogoGit.svg";
import LogoInsta from "../../../../public/assets/LogoInsta.svg";
export default function Footer() {
  return (
    <div className=" bg-[#170F28] text-white sm:py-[29px] px-[24px] sm:px-[24px] md:px-[45px] xl:px-[120px] ">
      <div className=" mx-auto flex flex-col gap-5 md:flex-row justify-between items-start">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-[30px] font-semibold text-[#F5F1FF] tracking-[.50em]">
            OYEDELE
          </h2>
          <p className="text-sm font-[400] text-[#D2BCFF] mt-2 ">
            Oyedele is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </p>
        </div>
        {/* <div className=" mb-6 md:mb-0 ">
          <h3 className="text-[18px] text-[#F5F1FF] font-[500] mb-2">
            Quick Links
          </h3>
          <ul className="text-sm text-gray-400 flex flex-wrap gap-[58.75] items-center ">
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
        </div> */}

        <div className="md:w-1/2">
          <h3 className="text-lg font-medium mb-4 text-white">
            Quick Links
          </h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <a href="#" className="text-[#D2BCFF] hover:text-white text-sm">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-[#D2BCFF] hover:text-white text-sm">
                Web Chat
              </a>
            </li>
            <li>
              <a href="#" className="text-[#D2BCFF] hover:text-white text-sm">
                Terms of use
              </a>
            </li>
            <li>
              <a href="#" className="text-[#D2BCFF] hover:text-white text-sm">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="text-[#D2BCFF] hover:text-white text-sm">
                GDPR Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-[#D2BCFF] hover:text-white text-sm">
                Cookies Settings
              </a>
            </li>
            <li>
              <a href="#" className="text-[#D2BCFF] hover:text-white text-sm">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-12 mb-6 relative mt-[50px]">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <span className="text-[120px] md:text-[180px] font-bold tracking-[100px]">
            OYEDELE
          </span>
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
