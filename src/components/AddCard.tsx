import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

const AddCard = () => {
    const typographyStyle = { display: "flex", justifyContent: "center", alignItems: "center" };

    return (
        <Card sx={{ maxWidth: 345, margin: "10px" }} className="tarjeta">
            <CardActionArea>
                <CardMedia component="img" height="160" image="./plus.svg" alt="Add item" />
                <CardContent sx={{ padding: "5px" }}>
                    <Typography variant="h6" component="div" align="center" sx={typographyStyle}>
                        {"New Page"}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default AddCard;
