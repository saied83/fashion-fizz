import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const Auth = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  // const [name, setName] = useState("Test User");
  // const [email, setEmail] = useState("test@user.com");
  // const [password, setPassword] = useState("password");
  const name = "Test User";
  const email = "test@user.com";
  const password = "password";
  const { authUser, setAuthUser } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!authUser) {
      const userData = {
        _id: "user",
        name,
        email,
      };
      localStorage.setItem("user-info", JSON.stringify(userData));
      setAuthUser(userData);
    }
  };
  return (
    <div className="min-h-[45vh]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
      >
        <div className="inline-flex items-center gap-3 mb-2 mt-10 ">
          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        {currentState === "Sign Up" ? (
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Name"
            required
            value={name}
            onChange={() => {
              toast("Input Field Is Disabled on Demo", {
                icon: "⚠️",
                duration: 500,
              });
            }}
          />
        ) : (
          ""
        )}
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Email"
          required
          value={email}
          onChange={() => {
            toast("Input Field Is Disabled on Demo", {
              icon: "⚠️",
              duration: 500,
            });
          }}
        />
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Password"
          required
          value={password}
          onChange={() => {
            toast("Input Field Is Disabled on Demo", {
              icon: "⚠️",
              duration: 500,
            });
          }}
        />
        <div className="w-full flex justify-between text-sm  mt-[-8px]">
          <p
            className="cursor-pointer"
            onClick={() =>
              toast("Forgot Password Is Disabled on Demo", {
                icon: "⚠️",
              })
            }
          >
            forgot your password?
          </p>
          {currentState === "Sign Up" ? (
            <p
              className="cursor-pointer"
              onClick={() => setCurrentState("Login")}
            >
              Login here
            </p>
          ) : (
            <p
              className="cursor-pointer"
              onClick={() => setCurrentState("Sign Up")}
            >
              Create account
            </p>
          )}
        </div>
        <button className="bg-black text-white font-light px-8 py-2 mt-4">
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Auth;
