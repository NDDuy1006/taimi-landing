import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

function Cta({ cta }) {
  const { content, title } = cta;

  return (
    <section className="section">
      <div className="section shadow bg-theme-light">
        <div className="row mx-auto items-center justify-center">
          <div className="text-center max-w-xl">
            <h2 className="text-4xl text-white">{title}</h2>
            {content && <p className="mt-4 text-white">{markdownify(content)}</p>}
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
