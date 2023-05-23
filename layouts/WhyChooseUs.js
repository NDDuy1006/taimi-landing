import Cta from "@layouts/components/Cta";
import Image from "next/image";
import { markdownify } from "@lib/utils/textConverter";
import YoutubePlayer from "./components/YoutubePlayer";

function Features({ data }) {
  const { call_to_action, feedback } = data.frontmatter;

  return (
    <>
      <section className="section max-w-[1024px] container text-center">
        <h1>Time tracking <span className="text-theme-light">cloud-based solution</span> available anywhere - everything</h1>
        <Image className="mx-auto mt-8" src={'/images/Platform.png'} width={852} height={72} alt="Platform" />
      </section>

      {/* Feedback */}
      <section className="section bg-[#F4F4F6]">
        <div className="container">
          <div className="text-center relative w-fit mx-auto">
            <h2 className="text-4xl">{markdownify(feedback.title)}</h2>
            <p className="mt-3 text-[#4B555D] mx-auto">{feedback.description}</p>
          </div>
          <div className="row text-center">
            <div className="flex flex-row flex-wrap mt-10 justify-center">
              {feedback.feedbacks.map((feedback, index) =>
                <div className="flex flex-col w-[220px] mb-4" key={index}>
                  <div className="flex flex-row">
                    <Image alt="happy-client" src={feedback.avatar} width={44} height={44} />
                    <div className="text-left ml-2">
                      <h3 className="text-xl">{feedback.name}</h3>
                      <p className="text-xs text-[#4B555D]">{feedback.title}</p>
                    </div>
                  </div>
                  <div className="text-base text-primary bg-white text-left p-2 mr-8 mt-4 rounded">{feedback.comment}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center relative w-fit mx-auto mb-4">
            <h2 className="text-4xl">Meet Taimi in 60 seconds</h2>
            <p className="mt-3 text-[#4B555D] mx-auto">Easy started with simple steps</p>
          </div>
          <YoutubePlayer id="RAmIaHGoaYU" title="Starlink Mission" />
        </div>
      </section>

      {/* Cta */}
      <Cta cta={call_to_action} />
    </>
  );
}

export default Features;
