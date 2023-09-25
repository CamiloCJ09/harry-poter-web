import React, { useEffect, useState } from "react";
import Tabs from "../components/utils/Tabs";
import Characters from '../components/Character/Characters';
import functions from '../service/GetApiInfo';
import { useUserContext } from "../context/UserProvider";
import { useGetSessionActiveContext } from "../context/UserProvider";


  const Home = () => {
  const [component, setComponent] = useState(<></>);
  const getUserContext = useGetSessionActiveContext();
  let user = useUserContext();

  const [tab, setTab] = useState(0);
  //const [characters, setCharacters] = useState([]);
  
  /***
   * 
   * NO DESCOMENTAR ESTO PORQUE SE FUETEA LA APPLICACION 
   * useEffect(() => {
    functions.getCharacters().then((data) => {
      setCharacters(data.data);
    });
  }, []);

   * 
   * */
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

  useEffect(() => {
     console.log("useEffect");
    //console.log(tab);
     switch(tab){
      case '0':
        //console.log(characters)
        setComponent(<Characters characters={[]} />)
        break;
      case '1':
          setComponent(<h1>2</h1>); 
          break;
      case '2':
          setComponent(<h1>3</h1>);    
          break;
      default:
        setComponent(<h1>Selecciona una pestaña</h1>);
        break;
     }
    }, [tab]);
  
  return (
    <>
      <div>Hola</div>
      <p>{user?.firstName}</p>
      <div>
      <Tabs tabsNames={["Personajes", "Peliculas", "Pociones"]} onChangeTab={(value) => {setTab(value)}} />
      <div>
        {component}
      </div>
    </div>
    </>
  );
};

export default Home;
