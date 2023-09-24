import InformationCard from "../Information/InformationCard";
import PropTypes from 'prop-types';
import { Grid } from "@mui/material";

export default function Characters({ characters }) {
    const onUpload = () => {
        console.log("upload");
    }
    return (
        <Grid container spacing={2}>
            {characters.map((character) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
                    <InformationCard
                        image={character.attributes.image}
                        title={character.attributes.name}
                        attributes={character.attributes}
                        type="character"
                        onUpload={onUpload}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

Characters.propTypes = {
    characters: PropTypes.array.isRequired
};

