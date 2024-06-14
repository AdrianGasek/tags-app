import React, { useState } from "react";
import {
  IconButton,
  CardActions,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Autocomplate from "../components/Autocomplate.jsx";
import CloseIcon from "@mui/icons-material/Close";
import Tag from "../components/Tag.jsx";

const TagsSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tagsList, setTagsList] = useState([]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleAdd = (items) => {
    setTagsList((prevTagsList) => {
      const uniqueTagsSet = new Set([...prevTagsList, ...items]);
      return Array.from(uniqueTagsSet);
    });
  };

  const handleDelete = (id) => {
    setTagsList((prevTagsList) => prevTagsList.filter((tag) => tag.id !== id));
  };

  return (
    <Card sx={{ maxWidth: "300px" }}>
      <CardContent>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Typography sx={{ fontWeight: "bold" }} gutterBottom variant="h6">
            Tagi
          </Typography>
          <IconButton
            onClick={handleClose}
            sx={{
              color: "balck",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04);",
              },
              borderRadius: "50%",
              width: 30,
              height: 30,
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Autocomplate isOpen={isOpen} handleClose={handleClose} onInputFocus={handleInputFocus} handleAdd={handleAdd} />
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '5px',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '10px 0px',
          width: '100%',
        }}>
          {tagsList.map((item) => (
          <Tag 
            key={item.id} 
            name={item.tag} 
            handleDelete={handleDelete} 
            id={item.id} 
          />
        ))}
        </Box>
        <Box sx={{
          marginTop: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
        }}>
          Lista
        </Box>
      </CardContent>
    </Card>
  );
};

export default TagsSection;
