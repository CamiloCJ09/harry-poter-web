import React, { useEffect, useState } from "react";
import Tabs from "../components/utils/Tabs";
import { useUserContext } from "../context/UserProvider";
import { useGetSessionActiveContext } from "../context/UserProvider";

const Home = () => {
  const getUserContext = useGetSessionActiveContext();
  let user = useUserContext();

  const [tab, setTab] = useState(0);
  useEffect(() => {  }, [tab]);

  useEffect(() => {
    const fetchUser = async () => {
      if (user === null) {
        console.log("Test2");
        user = await getUserContext();
        console.log(user);
        if (user !== null) {
          console.log(user.firstName);
        }
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <div>Hola</div>
      <p>{user?.firstName}</p>
      <div>
      <Tabs tabsNames={["Personajes", "Peliculas", "Pociones"]} onChangeTab={(value) => {setTab(value)}} />
    </div>
    </>
  );
};

export default Home;
