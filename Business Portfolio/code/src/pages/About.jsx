import React from "react";
import NavBar_about from "../components/NavBar_about";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import TeamMemberCards from "../components/TeamMemberCards";
import WhyChooseUs from "../components/WhyChooseUs.JSX";
import TestimonialCarousel from "../components/TestimonialCarousel";
const About = () => {
  return (
    <div>
      <NavBar_about />
      <div className="text-center p-4  sm:text-wrap">
        <Title text1="Welcome" />
        <p className="mx-11 font-bold px-24">
          background or why we start a company ...Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Illo consequatur minus atque voluptatum
          laboriosam error animi delectus. Atque assumenda, soluta sint,
          consequuntur cupiditate ducimus minus suscipit dignissimos, expedita
          eum quaerat.
        </p>
      </div>
      <div className="text-center p-4  sm:text-wrap">
        <Title text1="Our Team" />
        <TeamMemberCards/>
      </div>

      <div className="sm:grid sm:grid-cols-2 sm:grid-rows-2 grid grid-cols-1 grid-rows-4   m-20 shadow-sm shadow-slate-300 p-4">
        <div>
          <img  className="w-screen h-72 shadow-sm shadow-black" src={assets.Rectangle_11} alt="image1" />
        </div>
        <div>
          <Title text1={"Our Mission"} />
          <p className="text-sm p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quas
            magnam, esse iste consequuntur nemo dolores quam quis laudantium sit
            accusamus est nesciunt earum veritatis dicta veniam velit eum
            debitis. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur repellat corporis, aut maxime molestias veritatis sit
            neque. Repellendus voluptates quibusdam consequuntur vitae
            voluptatem, culpa mollitia aperiam doloremque nobis non architecto.
          </p>
        </div>
        <div>
          <Title text1={"Our Goals"} />
          <p className="text-sm p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            laborum ad, alias ipsam, nesciunt veritatis rerum aspernatur odit
            reprehenderit molestiae molestias? Quo voluptas delectus blanditiis
            repudiandae impedit nam commodi sequi? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Officia veritatis aspernatur eligendi
            incidunt modi! Quaerat nisi inventore dicta itaque dolore beatae
            dolores, rem a accusantium facilis at aliquam nobis fugit.
          </p>
        </div>
        <div >
          <img className="w-screen  shadow-sm shadow-black" src={assets.Rectangle_10} alt="" />
        </div>
      </div>
    
      <WhyChooseUs  />
      <Title text1={"Testimonial's"}/>
      <TestimonialCarousel/>
    </div>
  );
};

export default About;
