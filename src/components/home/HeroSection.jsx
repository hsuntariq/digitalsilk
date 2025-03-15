import React from "react";
import Button from "../utils/Button";

const HeroSection = () => {
  return (
    <>
      <div className="container mx-auto p-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex  flex-col gap-4">
            <h2 className="text-2xl">Premium Web Design Agency</h2>
            <h2 className="text-8xl">We Grow Brands Online</h2>
            <h2 className="text-2xl">
              Custom Websites, Branding & Digital Marketing
            </h2>
            <Button content={"request a quote"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
