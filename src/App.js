import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Box } from '@mui/material';
import { Search, Star, Settings, Article } from '@mui/icons-material';

const sections = {
  search: <Typography variant="h6">Sekcja wyszukiwania</Typography>,
  star: <Typography variant="h6">Sekcja gwiazdy</Typography>,
  settings: <Typography variant="h6">Sekcja ustawienia</Typography>,
  article: <Typography variant="h6">Sekcja artykuł</Typography>,
};

const App = () => {
  const [selectedSection, setSelectedSection] = useState('search');

  const handleListItemClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" sx={{ width: 240 }}>
        <List>
          <ListItem button onClick={() => handleListItemClick('search')}>
            <ListItemIcon><Search /></ListItemIcon>
            <ListItemText primary="Wyszukaj" />
          </ListItem>
          <ListItem button onClick={() => handleListItemClick('star')}>
            <ListItemIcon><Star /></ListItemIcon>
            <ListItemText primary="Gwiazda" />
          </ListItem>
          <ListItem button onClick={() => handleListItemClick('settings')}>
            <ListItemIcon><Settings /></ListItemIcon>
            <ListItemText primary="Ustawienia" />
          </ListItem>
          <ListItem button onClick={() => handleListItemClick('article')}>
            <ListItemIcon><Article /></ListItemIcon>
            <ListItemText primary="Artykuł" />
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {sections[selectedSection]}
      </Box>
    </Box>
  );
};

export default App;
