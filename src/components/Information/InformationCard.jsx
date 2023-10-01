import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import { getDownloadURL, ref, getMetadata } from "@firebase/storage";
import firebase from "../../firebase/firebase";

const InformationCard = ({ type, image, title, attributes, onUpload, id }) => {
  const dataKeys = Object.keys(attributes);

  const [imgActual, setImgActual] = useState(image);
  const handleUpload = async () => {
    const newImg = await onUpload();
    const fileURL = URL.createObjectURL(newImg);
    setImgActual(fileURL);
  };

  const getImgofCharacter = async () => {
    try {
      const storage = firebase.storage;
      const storageRef = ref(storage, id + ".png");
      const metadata = await getMetadata(storageRef);
      if (metadata) {
        const url = await getDownloadURL(storageRef);
        if (url !== null) setImgActual(url);
      }
    } catch (error) {
      setImgActual("src/assets/noimg.png");
    }
  };

  useEffect(() => {
    if (type === "character" && image === "") {
      getImgofCharacter();
    }
  });

  return (
    <Card className="card">
      <CardMedia component="img" height="350" width="350" image={imgActual} />
      <CardContent className="card-content">
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        {dataKeys.map(
          (key) =>
            attributes[key] !== null &&
            key !== "image" && (
              <Accordion key={key}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{key}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{attributes[key]}</Typography>
                </AccordionDetails>
              </Accordion>
            )
        )}
      </CardContent>
      {type === "character" ? (
        <CardActions>
          <Button size="small" onClick={handleUpload}>
            Cargar imagen
          </Button>
        </CardActions>
      ) : (
        <></>
      )}
    </Card>
  );
};

InformationCard.propTypes = {
  type: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  attributes: PropTypes.object.isRequired,
  onUpload: PropTypes.func,
  id: PropTypes.string,
};

export default InformationCard;

// );
