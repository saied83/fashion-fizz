const Hero = () => {
  return (
    <div className="flex rounded-lg  box-border my-10 flex-col sm:flex-row border  bg-[#f4f4fc]">
      {/* Hero left side*/}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed prata-regular">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* Hero Right side  */}
      <img
        src="/hero_img.jpg"
        className="w-full rounded-tr-lg rounded-br-lg sm:w-1/2"
        alt=""
      />
    </div>
  );
};

export default Hero;
