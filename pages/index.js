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
      <section className="section pb-[50px]">
        <div className="container">
          <div className="max-w-[855px] mx-auto bg-[url('/images/bg-image.png')] bg-cover">
            <div className="flex flex-col">
              <h1 className="text-h1 font-h1 leading-h1 text-dark text-center">
                <span className="text-secondary">{banner.highlight} </span>
                {banner.title}
              </h1>
              <p className="tracking-wide mt-4 text-subtit_1 font-subtit_1 leading-subtit_1 text-light text-center">{markdownify(banner.content)}</p>
              <br />
              {banner.button.enable && (
                <Link
                  className="btn btn-seccondary z-0 my-8 mx-auto py-[20px] w-[180px]"
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
            <h2 className="text-h2 font-h2 leading-h2 text-secondary">{markdownify(feature.title)}</h2>
            <p className="mt-3 text-base font-body leading-base text-light lg:w-[70%] mx-auto">{feature.subTitle}</p>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-1 lg:grid-cols-3">
            {feature.features.map((item, i) => (
              <div
                className="feature-card pt-0"
                key={`feature-${i}`}
              >
                {item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    width={30}
                    height={30}
                    alt=""
                  />
                )}
                <div className="mt-4 text-left">
                  {markdownify(item.name, "h3", "text-h3 font-h3 leading-h3 text-dark")}
                  <p className="mt-3 text-base font-body leading-base text-light">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* dark card */}
        <div className="mt-8">
          <div className="container rounded-xl py-8 bg-primary/10">
            <div className="px-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {feature.darkCards.map((item, i) => (
                <div
                  className="feature-card rounded-xl bg-white p-4 pt-0"
                  key={`card-${i}`}
                >
                  <div className="mt-4 text-left text-[black]">
                    <div className="text-3xl">{item.title}</div>
                    <div className="my-4">{item.subTitle}</div>
                    <Link
                      className="btn btn-sub-primary z-0 px-2 py-3"
                      href={item.href}
                    >
                      <div className="flex flex-row relative pr-4">
                        {item.buttonText}
                        <Image
                          className="w-2 absolute top-[-2px] right-0 fill-black"
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
            <h2 className="text-4xl text-primary">{markdownify(solution.title)}</h2>
            <p className="mt-3 text-primary mx-auto">{solution.subTitle}</p>
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
