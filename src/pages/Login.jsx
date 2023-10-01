import LoginForm from "../components/Login/LoginForm";
import Footer from "../components/utils/Footer";
import Typography from "@mui/material/Typography";

const Login = () => {
  return (
    <>
      <Typography variant="h2" gutterBottom position={"static"}>
              Bienvenido a Harry Potter DB
      </Typography>
      <LoginForm />
      <Footer />
    </>
  );
};

export default Login;
