import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();
  const { authUser, setAuthUser } = useAuthContext();
  const logout = async () => {
    try {
      if (authUser) {
        localStorage.removeItem("user-info");
        setAuthUser(null);
        toast.success("Logout Successfully!");
      } else {
        navigate("/auth");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return logout;
};

export default useLogout;
