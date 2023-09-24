import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PropTypes from 'prop-types';

export default function InformationCard({image, character, description}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image == '' ? ' ../../assests/Nopicture.png' : image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {character}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

InformationCard.propTypes = {
    image: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
