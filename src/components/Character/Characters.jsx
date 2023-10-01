import { useState, useEffect } from "react";
import InformationCard from "../Information/InformationCard";
import Swal from "sweetalert2";
import firebase from "../../firebase/firebase";
import CharacterService from "../../service/CharacterService";
import { ref, uploadBytes } from "@firebase/storage";
import Skeleton from '@mui/material/Skeleton';
import { Grid } from "@mui/material";
import "./style.css";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("characters") === null) {
      CharacterService.getCharacters().then((data) => {
        setCharacters(data.data);
        localStorage.setItem("characters", JSON.stringify(data.data));
        //console.log(data.data);
      });
    } else {
      setCharacters(JSON.parse(localStorage.getItem("characters")));
    }
  }, []);

  const onUpload = async (id) => {
    const { value: file } = await Swal.fire({
      title: "Selecciona una imagen",
      input: "file",
      inputAttributes: {
        accept: "image/*",
        "aria-label": "Sube la foto de perfil",
      },
    });

    if (file) {
      try {
        const reader = new FileReader();
        reader.onload = async (e) => {
          try {
            const storage = firebase.storage;
            const storageRef = ref(storage, id + ".png");

            uploadBytes(storageRef, file).then((snapshot) => {
              console.log("Uploaded a blob or file!");
            });
          } catch (error) {
            console.error(error);
          }
        };
        reader.readAsDataURL(file);
      } catch (error) {
        console.error(error);
      }
    }
    return file;
  };

  let tempArray = [1,2,3,4];
  return (
    <div style={{ marginTop: "190px" }}>
      <h2>Personajes de harry potter</h2>
      <Grid container spacing={2}>
          {characters.length !== 0 ? (
            characters.map((character) => {
              let img = "";
              character.attributes.image === null
                ? (img = "")
                : (img = character.attributes.image);
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
                  <InformationCard
                    key={character.id}
                    type={character.type}
                    image={img}
                    title={character.attributes.name}
                    attributes={character.attributes}
                    id={character.id}
                    onUpload={() => onUpload(character.id)}
                  />
                </Grid>
              );
            })
          ):(
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

export default Characters;
