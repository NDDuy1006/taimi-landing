import config from "@config/config.json";
import menu from "@config/menu.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import DownloadButton from '../../layouts/shortcodes/DownloadButton';

const Footer = ({ className }) => {
  const { footer0, footer1, footer2 } = menu;
  return (
    <footer className={`section bg-[#F2F4F6] pb-0 ${className}`}>
      <div className="container">
        {/* footer menu */}
        <div className="flex flex-col lg:flex-row justify-between mb-8 pt-6">
          <div>
            <Link href="/" aria-label="Taimi">
              <Image
                src={config.site.logo}
                width={139}
                height={44}
                alt="footer logo"
              />
            </Link>
            <div className="my-2 text-h3-sm md:text-h3 text-secondary font-h3 leading-h3-sm md:leading-h3">Tracking time on the go. Try Taimi now!</div>
            <div className="text-light font-body leading-6">The ideal solution for time tracking and productivity insights. </div>
          </div>
          <div className="flex flex-row mb-0 lg:mt-auto mt-6">
            <div className="mr-8">
              <DownloadButton
                image={"/images/LogoWindow.svg"}
                href={"#"}
                text={"Taimi for Windows"}
                alt="button icon"
              />
            </div>
            <DownloadButton
              image={"/images/LogoLinux.svg"}
              href={"#"}
              text={"Taimi for Linux"}
              alt="button icon"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          {/* first column */}
          <div className="lg:w-[20%] flex flex-row">
            {footer0.map((col, index) => {
              return (
                <div className={`text-dark mb-12 col-6 ${index === 1 && "self-end"}`} key={col.name}>
                  {markdownify(col.name, "h3", "text-dark text-h3-sm md:text-h3 font-h3 leading-h3-sm md:leading-h3")}
                  <ul className="mt-4">
                    {col?.menu.map((item) => (
                      <li className="mb-1 text-[#4B555D]" key={item.text}>
                        <Link href={item.url} rel="">
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* seccond column */}
          <div className="lg:w-[45%] flex flex-row justify-between">
            {footer1.map((col, index) => {
              return (
                <div className={`text-dark mb-12 col-6 ${index === 1 && "self-end"}`} key={col.name}>
                  {markdownify(col.name, "h3", "text-dark text-h3-sm md:text-h3 font-h3 leading-h3-sm md:leading-h3")}
                  <ul className="mt-4">
                    {col?.menu.map((item) => (
                      <li className="mb-1 text-[#4B555D]" key={item.text}>
                        <Link href={item.url} rel="">
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          {/* third column */}
          <div className="lg:w-[35%] flex flex-row justify-between">
            {footer2.map((col) => {
              return (
                <div className={`text-dark mb-12 col-6`} key={col.name}>
                  {markdownify(col.name, "h3", "text-dark text-h3-sm md:text-h3 font-h3 leading-h3-sm md:leading-h3")}
                  <ul className="mt-4">
                    {col?.menu.map((item) => (
                      <li className="mb-1 text-[#4B555D]" key={item.text}>
                        <Link href={item.url} rel="">
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="h-8 flex items-center justify-center bg-primary text-white text-[14px] leading-body">© 2023 DISION Tech. All rights reserved</div>
    </footer>
  );
};

export default Footer;
