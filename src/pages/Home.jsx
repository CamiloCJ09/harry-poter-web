import { useEffect, useState } from "react";
import Tabs from "../components/utils/Tabs";
import Characters from "../components/Character/Characters";
import Movies from "../components/Movies/Movies";
import Potions from "../components/Potions/Potions";
import ApplicationBar from "../components/utils/ApplicationBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useUserContext } from "../context/UserProvider";
import { useGetSessionActiveContext } from "../context/UserProvider";

const Home = () => {
  const [component, setComponent] = useState(<></>);
  const getUserContext = useGetSessionActiveContext();
  let user = useUserContext();
  const [tab, setTab] = useState(0);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    localStorage.removeItem("movies");
    localStorage.removeItem("characters");
    localStorage.removeItem("potions");
    window.location.href = "/login";
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (user === null) {
        user = await getUserContext();
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    switch (tab) {
      case "0":
        setComponent(<Characters />);
        break;
      case "1":
        setComponent(<Movies />);
        break;
      case "2":
        setComponent(<Potions />);
        break;
      default:
        setComponent(<h1>Selecciona una pestaña</h1>);
        break;
    }
  }, [tab]);

  return (
    <>
      <div className="main-app-bar">
        <div className="app-bar-content">
          <ApplicationBar>
            <Typography variant="h2" gutterBottom position={"static"}>
                  Bienvenido {user?.firstName} 
            </Typography>
            <Tabs
              tabsNames={["Personajes", "Peliculas", "Pociones"]}
              onChangeTab={(value) => {
                setTab(value);
              }}
            />
            <Button
            variant="contained"
            color="primary"
            startIcon={<ExitToAppIcon />}
            onClick={handleLogout}
          >
            Cerrar Sesión
          </Button>
          </ApplicationBar>
          
        </div>
      </div>
      <div className="container" style={{ marginTop: "140px" }}>
        {component}
      </div>
    </>
  );
};

export default Home;
