import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleLogin = () => {
    // proses/logic login
    navigate("/");
    navigate(-1);
    navigate("/dashboard", { replace: true });
  };
};

export default LoginPage;
