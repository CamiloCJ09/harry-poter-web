import { useState, useEffect } from "react";
import InformationCard from "../Information/InformationCard";
import PotionsService from "../../service/PotionsService";
import Skeleton from '@mui/material/Skeleton';
import { Grid } from "@mui/material";
const Potions = () => {
const [potions, setPotions] = useState([]);

  useEffect(() => {
    if(localStorage.getItem("potions") === null){
      PotionsService.getPotions().then((data) => {
        setPotions(data.data);
        localStorage.setItem("potions", JSON.stringify(data.data));
      });
    }else{
      setPotions(JSON.parse(localStorage.getItem("potions")));
    }
  }, []);
  let tempArray = [1,2,3,4];
  return (
    <div style={{ marginTop: "190px" }}>
     <h2>Pociones de harry potter</h2>
      <Grid container spacing={4} >
        {potions.length !== 0 ? (
          potions.map((potion) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={potion.id}>
                <InformationCard
                  key={potion.id}
                  type={potion.type}
                  image={potion.attributes.image}
                  title={potion.attributes.name}
                  attributes={potion.attributes}
                />
              </Grid>
            );
          })) : (
            tempArray.map((item) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item}>
                     <Skeleton variant="rectangular" width={410} height={518} />
                </Grid>
              );
            })
            )}
      </Grid>
    </div>
  );
};

export default Potions;
