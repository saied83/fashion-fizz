import { useState } from "react";
import toast from "react-hot-toast";

const NewsLetterBox = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    toast.success("Email submitted successfully");
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        cumque fuga obcaecati laborum enim.
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-10/12 sm:w-2/3 flex items-center gap-3 mx-auto my-4 sm:my-12 border"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none bg-[#F4F4FB] px-4"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
