import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
const TagsButtonList = () => {
  return (
    <List>
      <ListItem sx={{padding: 0}}>
        <Button
          startIcon={<AutoAwesomeOutlinedIcon />}
          color="primary"
          disabled
          fullWidth
          sx={{ display: "flex", justifyContent: "flex-start", textTransform: 'none' }}
        >
          CMS AI
        </Button>
      </ListItem>
      <ListItem sx={{padding: 0}}>
        <Button
          startIcon={<AutoAwesomeIcon color="secondary"/>}
          color="primary"
          fullWidth
          sx={{ display: "flex", justifyContent: "flex-start", textTransform: 'none', color: 'black' }}
        >
          Analizuj tekst
        </Button>
      </ListItem>
      <ListItem sx={{padding: 0}}>
        <Button
          startIcon={<LocalOfferIcon color="secondary"/>}
          fullWidth
          sx={{ display: "flex", justifyContent: "flex-start", textTransform: 'none', color: 'black' }}
        >
          Najbardziej popularne tagi
        </Button>
      </ListItem>
    </List>
  );
};

export default TagsButtonList;
