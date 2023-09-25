import React, { useState, useEffect } from "react";
import InformationCard from "../Information/InformationCard";
import PotionsService from "../../service/PotionsService";

const Potions = () => {
  const [potions, setPotions] = useState([]);

  useEffect(() => {
    PotionsService.getPotions().then((data) => {
      setPotions(data.data);
    });
  }, []);
  return (
    <div>
      Pociones de Harry Potter
      <div>
        {potions.length !== 0 &&
          potions.map((potion) => {
            return (
              <InformationCard
                key={potion.id}
                type={potion.type}
                image={potion.attributes.image}
                title={potion.attributes.name}
                attributes={potion.attributes}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Potions;
