import Cta from "@layouts/components/Cta";
import Image from "next/image";
import { markdownify } from "@lib/utils/textConverter";
import YoutubePlayer from "./components/YoutubePlayer";
import DownloadButton from "./shortcodes/DownloadButton";

function Features({ data }) {
  const { call_to_action, feedback } = data.frontmatter;

  return (
    <>
      <section className="section text-center bg-primary/10 pt-9 py-8 mb-16">
        <h1 className="text-h1 font-h1 leading-h1 text-dark">Time tracking <span className="text-secondary">cloud-based solution</span> <br/> available anywhere - everything</h1>
      </section>

      <section className="section container text-center">
        <h2 className="text-h2 font-h2 leading-h2 text-secondary mb-2">
          Meet Taimi in 60 seconds
        </h2>
        <p className="font-subtit_1 text-subtit_2 leading-subtit_2 mb-4">Easy started with simple steps</p>
        <div className="flex flex-row justify-center mb-14">
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
        <YoutubePlayer id="jDiUfKtlmW4" title="What is Clockify?" />
      </section>

      {/* Feedback */}
      <section className="section bg-[#F4F4F6] pb-0 pt-10 mb-24">
        <div className="container">
          <div className="text-center relative w-fit mx-auto">
            <h2 className="text-h2 font-h2 leading-h2 text-secondary">{markdownify(feedback.title)}</h2>
            <p className="mt-3 text-[#4B555D] mx-auto">{feedback.description}</p>
          </div>
          <div className="row text-center">
            <div className="flex flex-row flex-wrap mt-10 justify-between">
              {feedback.feedbacks.map((feedback, index) =>
                <div className="flex flex-col w-[218px] mb-4" key={index}>
                  <div className="flex flex-row">
                    <Image alt="customer avatar" src={feedback.avatar} width={44} height={44} />
                    <div className="text-left ml-2">
                      <h3 className="font-h3 text-h3 leading-h3 text-dark">{feedback.name}</h3>
                      <p className="text-body_sm text-body leading-body text-dark">{feedback.title}</p>
                    </div>
                  </div>
                  <div className="tracking-normal font-subtit_1 text-body leading-subtit_2 text-dark bg-white text-left p-[10px] mt-4 rounded">{`"${feedback.comment}"`}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Cta */}
      <Cta cta={call_to_action} />
    </>
  );
}

export default Features;