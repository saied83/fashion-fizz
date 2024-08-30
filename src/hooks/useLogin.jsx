import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async ({ username, password }) => {
    setLoading(true);
    const success = handleInputErrors({
      username,
      password,
    });
    if (!success) return;
    try {
      localStorage.setItem("user-info", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

const handleInputErrors = ({ username, password }) => {
  if (!username || !password) {
    toast.error("Please fill all the fields");
    return false;
  }

  return true;
};
export default useLogin;
