import React, { useState, useEffect } from "react";
import InformationCard from "../Information/InformationCard";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import firebase from "../../firebase/firebase";
import CharacterService from "../../service/CharacterService";
import { ref, uploadBytes } from "@firebase/storage";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    CharacterService.getCharacters().then((data) => {
      setCharacters(data.data);
      console.log(data.data);
    });
  }, []);

  const onUpload = async () => {
    let firebaseUrl = "";
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
            console.log(file);
            const storage = firebase.storage;
            const storageRef = ref(storage, file.name);

            uploadBytes(storageRef, file).then((snapshot) => {
              console.log("Uploaded a blob or file!");
            });
          } catch (error) {
            console.error(error);
          }
        };

        // Iniciar la lectura del archivo
        reader.readAsDataURL(file);
      } catch (error) {
        console.error(error);
      }
    }

    return firebaseUrl;
  };

  return (
    <div>
      Personajes de Harry Potter
      <div>
        {characters.length !== 0 &&
          characters.map((character) => {
            let img = "";
            character.attributes.image === null
              ? (img = "")
              : (img = character.attributes.image);
            return (
              <InformationCard
                key={character.id}
                type={character.type}
                title={character.attributes.name}
                attributes={character.attributes}
                onUpload={onUpload}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Characters;
