import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import "swiper/swiper.min.css";
import { getListPage } from "../lib/contentParser";
import YoutubePlayer from "@layouts/components/YoutubePlayer";

const Home = ({ frontmatter }) => {
  const { banner, feature, solution, workflow, call_to_action } = frontmatter;
  const { title } = config.site;

  return (
    <Base title={title}>
      {/* Banner */}
      <section className="section pb-[50px]">
        <div className="container">
          <div className="row text-center mb-8">
            <div className="flex flex-col lg:flex-row">
              <div className="text-left lg:w-3/5">
                <h1 className="font-primary">{banner.title}</h1>
                <div className="md:w-3/4">
                  <p className="mt-4 text-lg">{markdownify(banner.content)}</p>
                  <p className="mt-4 text-xl">{markdownify(banner.content2)}</p>
                  <br />
                  {banner.button.enable && (
                    <Link
                      className="btn btn-primary z-0 py-[14px]"
                      href={banner.button.link}
                      rel={banner.button.rel}
                    >
                      {banner.button.label}
                    </Link>
                  )}
                </div>
              </div>
              <Image
                className="mx-auto mt-12 lg:w-2/5"
                src={banner.image}
                width={750}
                height={390}
                alt="banner image"
                priority
              />
            </div>
          </div>
          <YoutubePlayer id="RAmIaHGoaYU" title="Starlink Mission" />
        </div>
      </section>

      {/* Features */}
      <section className="section py-0">
        <div className="container">
          <div className="text-center relative w-fit mx-auto">
            <h2 className="text-4xl">{markdownify(feature.title)}</h2>
            <p className="mt-3 text-primary absolute">{feature.subTitle}</p>
          </div>
          <div className="mt-24 grid gap-x-8 gap-y-6 sm:grid-cols-1 lg:grid-cols-3">
            {feature.features.map((item, i) => (
              <div
                className="feature-card rounded-xl bg-white p-4 pt-0 border-solid border-2"
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
                  {markdownify(item.name, "h3", "h5")}
                  <p className="mt-3">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* dark card */}
      <div className="container py-8">
        <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {feature.darkCards.map((item, i) => (
            <div
              className="feature-card rounded-xl bg-[#6A7481] p-4 pt-0 border-solid border-2"
              key={`card-${i}`}
            >
              <div className="mt-4 text-left text-[white]">
                <div className="text-3xl">{item.title}</div>
                <div className="my-4">{item.subTitle}</div>
                <Link
                  className="btn btn-seccondary z-0 px-2 py-3"
                  href={item.href}
                >
                  <div className="flex flex-row relative pr-6">
                    {item.buttonText}
                    <Image
                      className="absolute top-[-2px] right-0"
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

      {/* Solutions */}
      <section className="section py-8">
      <div className="container">
        <div className="row text-center">
          <div className="flex flex-col lg:flex-row">
            <Image
              className="mx-auto mt-12 lg:w-3/5"
              src={banner.image}
              width={750}
              height={390}
              alt="banner image"
              priority
            />
            <div className="lg:w-2/5 bg-theme-light text-center h-36 pt-14">
              (We are discussing about this)
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
