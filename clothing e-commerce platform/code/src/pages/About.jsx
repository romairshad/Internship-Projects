import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Their About Us page is divided into three sections: Our Story, Our
            Athletes, and Our Collaborations. Their brand story page goes
            through a timeline of events, from their founding in 1966 through
            different product releases, accolades, and endorsements. This
            section of the About page helps establish their authority,
            reliability, and long history in the trade.
          </p>
          <p>
            Leesa keeps it simple at the top of the page, subtly demonstrating
            the portability of their mattress in a box product. Their mattresses
            aren’t only easily shipped to your door, but as they say, they’re
            “meticulously designed, exceptionally comfortable.” Leesa’s About
            page highlights the quality of their materials and process, bringing
            readers along on a visual journey. Scrolling down, readers encounter
            a section where they can flip through the different steps Leesa
            takes in creating a mattress.
          </p>
        </div>
      </div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"Our"} text2={"Mission"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.b_2}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Their About Us page is divided into three sections: Our Story, Our
            Athletes, and Our Collaborations. Their brand story page goes
            through a timeline of events, from their founding in 1966 through
            different product releases, accolades, and endorsements. This
            section of the About page helps establish their authority,
            reliability, and long history in the trade.
          </p>
        </div>
      </div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"Our"} text2={"Team"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-3">
        <img
          className="w-1/4 md:max-w-[450px]"
          src={assets.e_1}
          alt=""
        />
        <img
          className="w-1/4 md:max-w-[450px]"
          src={assets.e_2}
          alt=""
        />
        <img
          className="w-1/4 md:max-w-[450px]"
          src={assets.e_1}
          alt=""
        />
        <img
          className="w-1/4 md:max-w-[450px]"
          src={assets.e_2}
          alt=""
        />
        </div>
      
    <br />
      <NewsletterBox/>
    </div>
  );
};

export default About;
