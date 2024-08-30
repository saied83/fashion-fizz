import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="bg-[#f4fcfc] rounded-lg p-10">
        <div className="text-center text-2xl  ">
          <Title text1={"CONTACT"} text2={"US"}></Title>
        </div>
        <div className="my-8 flex flex-col justify-center lg:flex-row gap-10">
          <img src="/contact.png" alt="" className="w-full lg:max-w-[450px]" />
          <div className="flex flex-col justify-center items-start gap-6">
            <p className="font-semibold text-xl text-gray-600">Our Store</p>
            <p className="text-gray-500">
              54709 Willms Station <br />
              Suite 350, Washington, USA
            </p>
            <p className="text-gray-500">
              Tel: (415) 555-0132 <br />
              Email: admin@fashion-fizz.com
            </p>
            <p className="font-semibold text-xl text-gray-600">
              Careers at Fashion fizz
            </p>
            <p className="text-gray-500">
              Learn more about our teams and job openings.
            </p>
            <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
      <div className={"bg-[#F4F4FB] p-8 mt-10 rounded-md"}>
        <NewsLetterBox />
      </div>
    </div>
  );
};

export default Contact;
