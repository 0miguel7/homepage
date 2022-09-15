import Card from "./Card2";
import AddCard from "./AddCard";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

import AddForm from "./AddForm";

interface Card {
    name: string;
    link: string;
    color: string;
}

const Cards = () => {
    const [cards, setCards] = useState<Card[]>([]);

    useEffect(() => {
        // fetch("./cards.json")
        //     .then((res) => {
        //         return res.json();
        //     })
        //     .then((data) => {
        //         setCards(data);
        //         window.localStorage.setItem("datacard", JSON.stringify(data));
        //     });

        const localdata = window.localStorage.getItem("datacard");
        const parsedData = localdata ? JSON.parse(localdata) : {};
        setCards(parsedData);
    }, []);

    const removeCard = (id: number) => {
        const newCards = [...cards.slice(0, id), ...cards.slice(id + 1)];
        setCards(newCards);
        window.localStorage.setItem("datacard", JSON.stringify(newCards));
    };

    return (
        <div>
            <Grid container spacing={2} sx={{ alignItems: "center", justifyContent: "center", padding: "50px" }}>
                {cards.map((e, i) => {
                    return (
                        <Grid key={i} item md={2} xs={6}>
                            <Card name={e.name} link={e.link} color={e.color} remove={removeCard} id={i} />
                        </Grid>
                    );
                })}
                <Grid item md={2} xs={6}>
                    <AddForm setCard={setCards} />
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;
