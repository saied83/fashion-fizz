import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
  const { setAuthUser } = useAuthContext();
  const logout = async () => {
    try {
      localStorage.removeItem("user-info");
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return logout;
};

export default useLogout;
