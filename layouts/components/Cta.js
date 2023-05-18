import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

function Cta({ cta }) {
  return (
    <section className="section px-4">
      <div className="section container rounded-xl shadow bg-theme-light">
        <div className="row  mx-auto items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl">{cta?.title}</h2>
            <p className="mt-4 text-dark">{markdownify(cta?.content)}</p>
            {cta.button.enable && (
              <Link
                className="btn btn-primary z-0 py-[14px] mt-4"
                href={cta.button.link}
              >
                {cta.button.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
