import NewsLetterBox from "./NewsLetterBox";

const OurPolicy = () => {
  return (
    <div className="border rounded-lg  bg-[#F4F4FB]">
      <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-10 text-xs sm:text-sm md:text-base text-gray-700 ">
        <div>
          <img src="/exchange.svg" alt="" className="w-12 m-auto mb-5" />
          <p className="font-semibold ">Easy Exchange Policy</p>
          <p className="text-gray-500">we offer hassle free exchange policy</p>
        </div>
        <div>
          <img src="/quality.svg" alt="" className="w-12 m-auto mb-5" />
          <p className="font-semibold ">7 Days Return Policy</p>
          <p className="text-gray-500">we provide 7 days free return policy</p>
        </div>
        <div>
          <img src="/support.svg" alt="" className="w-12 m-auto mb-5" />
          <p className="font-semibold ">Best customer support</p>
          <p className="text-gray-500">we provide24/7 customer support</p>
        </div>
      </div>
      <hr className="h-[2px] w-3/4 bg-gray-400 mx-auto mb-8" />
      <NewsLetterBox />
    </div>
  );
};

export default OurPolicy;
