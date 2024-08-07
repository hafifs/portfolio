import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="container flex flex-col items-center justify-center gap-6 px-4 py-32 mx-auto sm:px-6 lg:px-8">
      <div className="text-center">
        <TypingAnimation/>
        <p className="mt-3 text-lg text-muted-foreground sm:mt-5 sm:text-xl lg:text-2xl">
          Full-Stack Developer
        </p>
        <p className="max-w-2xl mt-6 text-muted-foreground sm:mt-8">
          I'm a passionate full-stack developer with a strong background in
          modern web technologies. I love building scalable and user-friendly
          applications that solve real-world problems.
        </p>
      </div>
    </section>
  );
};
const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={["Hi! my name is Faiz", 1000, "I'm a Web Developer", 1000]}
      wrapper="h1"
      speed={250}
      className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
      repeat={0}
    />
  );
};

export default Hero;
