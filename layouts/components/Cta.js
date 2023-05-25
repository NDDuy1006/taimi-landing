import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

function Cta({ cta }) {
  const { content, title } = cta;

  return (
    <section className="section">
      <div className="py-8 container rounded-xl shadow bg-primary">
        <div className="row mx-auto items-center justify-center">
          <div className="text-center max-w-[640px]">
            <h2 className="text-4xl text-white">{title}</h2>
            {content && <p className="mt-1 text-white">{markdownify(content)}</p>}
            {cta.button.enable && (
              <Link
                className="btn btn-primary z-0 py-[14px] mt-4 text-button_2 font-button_2"
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
