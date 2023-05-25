import Cta from "@layouts/components/Cta";
import Image from "next/image";
import { markdownify } from "@lib/utils/textConverter";

function Features({ data }) {
  const { call_to_action, features, title } = data.frontmatter;

  return (
    <>
      <section className="section text-center bg-primary/10 mb-5 pt-9 pb-9">
        <h1 className="text-h1 font-h1 leading-h1 text-dark">Unlock your full potential <br/> Explore the <span className="text-secondary">precious time</span> management</h1>
      </section>
      {features.map((feature, index) => {
        const isOdd = index % 2 > 0;
        return (
          <section
            key={`service-${index}`}
            className={"section"}
            id={index + 1}
          >
            <div className="container">
              <div className="flex flex-col md:flex-row">
                {/* Content */}
                <div
                  className={`flex flex-col justify-center md:w-2/5 service-content mt-5 md:mt-0 ${!isOdd ? "md:order-1" : "md:order-2"} ${!isOdd ? "md:mr-24" : "md:ml-24"}`}
                >
                  <h2 className="mb-4 text-h2 font-h2 leading-h2 text-secondary">
                    {feature?.number} <br/>
                    {feature?.title}
                  </h2>
                  {
                    feature.contents.map((content, index) => <div key={index} className="flex flex-row my-2 md:my-4 lg:my-6">
                      <Image
                        src={content.icon}
                        width={48}
                        height={48}
                        alt="icon"
                      />
                      <div className="ml-4 text-subtit_1 font-subtit_1 leading-subtit_1 self-center">{content.description}</div>
                    </div>)
                  }
                </div>

                {/* Feature Image */}
                <div className={`md:w-3/5 ${!isOdd ? "md:order-2" : "md:order-1"} self-center mt-4 md:mt-0`}>
                  <Image
                    src={feature.images[0]}
                    width={696}
                    height={392}
                    alt="feature image"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}
      {/* Cta */}
      <Cta cta={call_to_action} />
    </>
  );
}

export default Features;