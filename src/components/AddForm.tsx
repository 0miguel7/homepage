import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddCard from "./AddCard";
import { useState } from "react";
import { TextChange } from "typescript";

interface AddformProps {
    setCard: Function;
}

const AddForm = (props: AddformProps) => {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState<String>("");
    const [url, setUrl] = useState<String>("https://");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAdd = (event: React.FormEvent) => {
        event.preventDefault();
        const data = {
            name: name,
            link: url,
            color: chooseColor(),
        };

        //Copy local storage datacard, add the new datacard and save it in localstorage
        const localdata = window.localStorage.getItem("datacard");
        const parsedData = localdata ? JSON.parse(localdata) : {};
        const newdata = [...parsedData, data];
        props.setCard(newdata);
        window.localStorage.setItem("datacard", JSON.stringify(newdata));
        setName("");
        setUrl("https://");
        setOpen(false);
    };

    return (
        <div>
            <div onClick={handleClickOpen}>
                <AddCard />
            </div>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add a Website</DialogTitle>
                <DialogContent>
                    <DialogContentText>Enter the name and the url of the website.</DialogContentText>
                    <Box component="form" onSubmit={handleAdd}>
                        <TextField
                            required
                            margin="dense"
                            id="name"
                            label="Website Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="url"
                            label="Website url"
                            type="url"
                            fullWidth
                            variant="standard"
                            value={url}
                            onChange={(e) => {
                                setUrl(e.target.value);
                            }}
                        />
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit" variant="contained" disableElevation>
                                Add
                            </Button>
                        </DialogActions>
                    </Box>
                </DialogContent>
            </Dialog>
        </div>
    );
};

const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const chooseColor = () => {
    const colors = [
        "DarkSlateGrey",
        "SlateGrey",
        "Linen",
        "Beige",
        "AliceBlue",
        "Peru",
        "Cornsilk",
        "RoyalBlue",
        "Moccasin",
        "SkyBlue",
        "Gold",
        "Coral",
        "Pink",
        "PaleGreen",
        "Crimson",
        "Cyan",
        "ForestGreen",
    ];

    return colors[randomNumber(0, colors.length - 1)];
};

export default AddForm;
