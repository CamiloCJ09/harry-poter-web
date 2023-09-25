import { useState, useEffect } from 'react';
import Tabs from "../components/utils/Tabs";
import Characters from '../components/Character/Characters';
import functions from '../service/GetApiInfo';

const Home = () => {
  const [component, setComponent] = useState(<></>);
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
      <Tabs tabsNames={["Personajes", "Peliculas", "Pociones"]} onChangeTab={(value) => {setTab(value)}} />
      <div>
           {component}
      </div>
    </>
  );

};

export default Home;
