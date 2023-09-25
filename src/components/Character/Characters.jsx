import InformationCard from "../Information/InformationCard";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import Swal from "sweetalert2";
import firebase from "../../firebase/firebase";

export default function Characters({ characters }) {
  console.log("Los caracters en el componente", characters);
  const onUpload = async () => {
    let firebaseUrl = "";
    const { value: file } = await Swal.fire({
      title: "Selecciona una imagen",
      input: "file",
      inputAttributes: {
        accept: "image/*",
        "aria-label": "Upload your profile picture",
      },
    });

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const storageRef = firebase.storage().ref();
        const imageRef = storageRef.child(e.target.result.name);
        imageRef.put(e.target.result).then((snapshot) => {
          snapshot.ref.getDownloadURL().then((url) => {
            firebaseUrl = url;
          });
        });
      };
    }

    return firebaseUrl;
  };
  return (
    <Grid container spacing={2}>
      {console.log(typeof characters)}
      {characters.map((character) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
          <div>
            <InformationCard
              image={character.attributes.image}
              title={character.attributes.name}
              attributes={character.attributes}
              type="character"
              onUpload={onUpload}
            />
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

Characters.propTypes = {
  characters: PropTypes.array.isRequired,
};
