import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

interface CardProps {
    name: string;
    link: string;
}

const Card1 = (props: CardProps) => {
    const typographyStyle = { display: "flex", justifyContent: "center", alignItems: "center" };
    const handleClick = () => {
        window.open(props.link, "_blank");
    };

    return (
        <Card sx={{ maxWidth: 345, margin: "10px" }} className="tarjeta">
            <CardActionArea onClick={handleClick}>
                <CardMedia component="img" height="160" image="https://source.unsplash.com/random" alt="Card" />
                <CardContent sx={{ padding: "3px" }}>
                    <Typography variant="h6" component="div" align="center" sx={typographyStyle}>
                        {props.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Card1;
