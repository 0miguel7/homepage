import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface CardProps {
    name: string;
    link: string;
    color: string;
    remove(id: number): any;
    id: number;
}

const Card2 = (props: CardProps) => {
    const typographyStyle = { display: "flex", justifyContent: "center", alignItems: "center" };
    const handleClick = () => {
        window.open(props.link, "_blank");
    };

    return (
        <Card sx={{ maxWidth: 345, margin: "10px", borderRadius: "10px" }} className="tarjeta">
            <CardActionArea onClick={handleClick} sx={{ height: 202, backgroundColor: props.color }}>
                <div>
                    <DeleteIcon
                        onClick={(e) => {
                            e.stopPropagation();
                            props.remove(props.id);
                        }}
                        sx={{ position: "absolute", top: "4px", right: "4px" }}
                    />
                </div>
                <CardContent sx={{ padding: "3px" }}>
                    <Typography variant="h5" component="div" align="center" sx={typographyStyle}>
                        {props.name}
                    </Typography>
                </CardContent>
            </CardActionArea>{" "}
        </Card>
    );
};

export default Card2;
