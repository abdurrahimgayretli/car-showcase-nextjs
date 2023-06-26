"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Fing, book or ren a car -- quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless boking
          process.
        </p>
        <CustomButton
          btnType="button"
          title="Explore Case"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image-overlay" />
        <div className="hero__image">
          <Image src={"/hero.png"} alt="hero" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
