import { useState } from "react";
import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import "swiper/swiper.min.css";
import { getListPage } from "../lib/contentParser";
import YoutubePlayer from "@layouts/components/YoutubePlayer";
import Accordion from "@layouts/components/Accordion/Accordion";

const Home = ({ frontmatter }) => {
  const { banner, feature, solution, call_to_action } = frontmatter;
  const { title } = config.site;
  const [activeAccordion, setActiveAccordion] = useState(1);

  return (
    <Base title={title}>
      {/* Banner */}
      <section className="section pt-8">
        <div className="container">
          <div className="max-w-[855px] mx-auto mb-6 bg-[url('/images/bg-image.png')] bg-contain bg-no-repeat">
            <div className="flex flex-col">
              <h1 className="text-dark text-center mt-8">
                <span className="text-secondary">{banner.highlight} </span>
                {banner.title}
              </h1>
              <p className="mt-4 subtit_1 text-light text-center">{markdownify(banner.content)}</p>
              <br />
              {banner.button.enable && (
                <Link
                  className="btn btn-seccondary z-0 mb-7 mx-auto px-3 flex items-center justify-center button_1"
                  style={{ marginTop: '32px', height: '52px', width: '182px' }}
                  href={banner.button.link}
                  rel={banner.button.rel}
                >
                  {banner.button.label}
                </Link>
              )}
            </div>
          </div>
          <YoutubePlayer id="jDiUfKtlmW4" title="What is Clockify?" />
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="text-center relative w-fit mx-auto">
            <h2 className="text-secondary">{markdownify(feature.title)}</h2>
            <p className="mt-1 body text-light lg:w-[70%] mx-auto">{feature.subTitle}</p>
          </div>
          <div className="my-12 grid gap-x-8 gap-y-8 sm:grid-cols-1 md:grid-cols-3">
            {feature.features.map((item, i) => (
              <div
                className="feature-card pt-0"
                key={`feature-${i}`}
              >
                {item.icon && (
                  <Image
                    src={item.icon}
                    width={48}
                    height={48}
                    alt="card icon"
                  />
                )}
                <div className="mt-4 text-left">
                  <h3 className="text-dark">{item.name}</h3>
                  <p className="mt-4 body text-light tracking-[-0.01em]">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* dark card */}
        <div className="mt-8">
          <div className="container rounded-xl p-4 bg-primary/10">
            <div className="grid gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
              {feature.darkCards.map((item, i) => (
                <div
                  className="feature-card rounded-xl bg-white p-4 pt-0"
                  key={`card-${i}`}
                >
                  <div className="mt-4 text-left text-[black]">
                    <div className="text-h2-sm md:text-h2 font-h2 leading-h2-sm md:leading-h2">{item.title}</div>
                    <div className="text-base font-body leading-base text-light mt-1">{item.subTitle}</div>
                    <Link
                      className="btn btn-sub-primary z-0 p-2 mt-4 h-8"
                      href={item.href}
                    >
                      <div className="flex flex-row mt-[2px] relative pr-4">
                        <div className="font-h3">{item.buttonText}</div>
                        <Image
                          className="w-2 absolute top-0 right-0"
                          src={"/images/btn-icon.png"}
                          width={14}
                          height={16}
                          alt="btn-icon"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section">
        <div className="container">
          <div className="text-center relative w-fit mx-auto">
            <h2 className="text-secondary">{markdownify(solution.title)}</h2>
            <p className="mt-1 body text-light">{solution.subTitle}</p>
          </div>
          <div className="row mt-10 text-center">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-[69%]">
                <Image
                  className="w-10/12 transition-opacity"
                  src={solution.images[activeAccordion - 1]}
                  width={750}
                  height={390}
                  alt="banner image"
                  priority
                />
              </div>
              <div className="lg:w-[31%]">
                {solution.solutions.map((solution, index) => <Accordion
                  activeIndex={activeAccordion}
                  setActiveIndex={setActiveAccordion}
                  title={solution.title}
                  content={solution.content}
                  index={index + 1}
                  key={index}
                />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cta */}
      <Cta cta={call_to_action} />
    </Base>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;
