import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, Typography, Box } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Tooltip from '@mui/material/Tooltip';

import TagsSection from './sections/TagsSection';

const sections = {
  tags: <TagsSection />,
  star: <Typography variant="h6">Sekcja gwiazdy</Typography>,
  settings: <Typography variant="h6">Sekcja ustawienia</Typography>,
  article: <Typography variant="h6">Sekcja artykuł</Typography>,
};

const App = () => {
  const [selectedSection, setSelectedSection] = useState('');

  const handleListItemClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', '& .MuiDrawer-docked': {width: '60px'}}}>
      <Drawer variant="permanent" sx={{ width: 240, height: 'auto', '& .MuiDrawer-paper': {
            top: 10,
            left: 10,
            height: 'auto',
            border: '1px solid rgba(0, 0, 0, 0.12)',
            borderRadius: 3
          }, }}>
        <List sx={{paddingTop: 2, paddingBottom: 2}}>
          <ListItem button onClick={() => handleListItemClick('search')}>
            <Tooltip title="Informacje" placement="right" arrow>
              <ListItemIcon sx={{ minWidth: 'auto' }}><InfoOutlinedIcon /></ListItemIcon>
            </Tooltip>
          </ListItem>
          <ListItem button onClick={() => handleListItemClick('star')}>
            <Tooltip title="Komentarze" placement="right" arrow>
              <ListItemIcon sx={{ minWidth: 'auto' }}><ChatBubbleOutlineOutlinedIcon /></ListItemIcon>
            </Tooltip>
          </ListItem>
          <ListItem button onClick={() => handleListItemClick('settings')}>
            <Tooltip title="Ustawienia" placement="right" arrow>
              <ListItemIcon sx={{ minWidth: 'auto' }}><SettingsOutlinedIcon /></ListItemIcon>
            </Tooltip>
          </ListItem>
          <ListItem button onClick={() => handleListItemClick('tags')}>
            <Tooltip title="Tagi" placement="right" arrow>
              <ListItemIcon sx={{ minWidth: 'auto' }}><LocalOfferOutlinedIcon /></ListItemIcon>
            </Tooltip>
          </ListItem>
          <ListItem button onClick={() => handleListItemClick('article')}>
            <Tooltip title="Użytkownik" placement="right" arrow>
              <ListItemIcon sx={{ minWidth: 'auto' }}><PersonAddAltOutlinedIcon /></ListItemIcon>
            </Tooltip>
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
