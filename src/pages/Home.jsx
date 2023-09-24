import { useState, useEffect } from 'react';
import Tabs from "../components/utils/Tabs";

const Home = () => {

  const [tab, setTab] = useState(0);
  useEffect(() => {  }, [tab]);

  return (
    <div>
      <Tabs tabsNames={["Personajes", "Peliculas", "Pociones"]} onChangeTab={(value) => {setTab(value)}} />
    </div>
  );

};

export default Home;
