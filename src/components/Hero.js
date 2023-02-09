import React from "react";
import { Link } from "react-router-dom";
import WomanImg from '../img/woman_hero.png'
const Hero = () => {
  return (
    <section className="bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-gray-500 mr-3"></div>Nove trendy!
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">Jesenne zlavy prave teraz! <br/>
              <span className="font-semibold">ZENY</span>
          </h1>
          <Link to={'/'} className="w-40 self-auto uppercase font-semibold border-b-2 border-primary">
            Objav viac!
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={WomanImg} alt=''/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
