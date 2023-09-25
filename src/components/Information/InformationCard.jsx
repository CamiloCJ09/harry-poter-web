import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const InformationCard = ({ type, image, title, attributes, onUpload }) => {
  const dataKeys = Object.keys(attributes);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image === null ? "src/assets/NoPicture.png" : image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {dataKeys.map((key) => (
          <div key={key}>
            <Typography variant="h6">{key}</Typography>
            <Typography>{attributes[key]}</Typography>
          </div>
        ))}
      </CardContent>
      {type === "character" ? (
        <CardActions>
          <Button size="small" onClick={onUpload}>
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
};

export default InformationCard;

// );
