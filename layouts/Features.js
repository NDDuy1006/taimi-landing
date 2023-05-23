import Cta from "@layouts/components/Cta";
import Image from "next/image";
import { markdownify } from "@lib/utils/textConverter";

function Features({ data }) {
  const { call_to_action, features, title } = data.frontmatter;

  return (
    <>
      {markdownify(title, "h1", "h2 mt-8 text-center")}
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
                  <h2 className="font-bold mb-4 text-3xl">{feature?.title}</h2>
                  {
                    feature.contents.map((content, index) => <div key={index} className="flex flex-row my-4">
                      <Image
                        src={content.icon}
                        width={48}
                        height={48}
                        alt="icon"
                      />
                      <div className="ml-4 text-primary self-center text-xl">{content.description}</div>
                    </div>)
                  }
                </div>

                {/* Feature Image */}
                <div className={`md:w-3/5 ${!isOdd ? "md:order-2" : "md:order-1"}`}>
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
