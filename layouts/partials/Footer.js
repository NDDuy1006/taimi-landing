import config from "@config/config.json";
import menu from "@config/menu.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { footer_content } = config.params;
  const { footer1, footer2 } = menu;
  return (
    <footer className="section bg-white pb-0">
      <div className="container">
        {/* footer menu */}
        <div className="flex flex-col lg:flex-row justify-between">
          {/* social icons */}
          <div className="w-[50%] lg:w-[20%]">
            <Link href="/" aria-label="Taimi">
              <Image
                src={config.site.logo}
                width={config.site.logo_width}
                height={config.site.logo_height}
                alt=""
              />
            </Link>
            {markdownify(footer_content, "p", "mt-3 mb-6 text-[#4B555D]")}
          </div>
          {/* seccond column */}
          <div className="w-[35%] flex flex-row justify-between">
            {footer1.map((col, index) => {
              return (
                <div className={`text-primary mb-12 ${index === 1 && "self-end"}`} key={col.name}>
                  {markdownify(col.name, "h2", "h4")}
                  <ul className="mt-6">
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
          <div className="w-[35%] flex flex-row justify-around">
            {footer2.map((col, index) => {
              return (
                <div className={`text-primary mb-12 ${index === 1 && "self-end"}`} key={col.name}>
                  {markdownify(col.name, "h2", "h4")}
                  <ul className="mt-6">
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
    </footer>
  );
};

export default Footer;
