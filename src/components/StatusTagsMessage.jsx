import React from 'react';
import { Box, Typography, LinearProgress, Tooltip, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const StatusTagsMessage = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" padding="10px 0">
      <Typography variant="body1" color="green">
        Dobrze
      </Typography>
      <Box width="100%" my={1}>
        <LinearProgress variant="determinate" value={60} color="success" />
      </Box>
      <Box display="flex" alignItems="center">
        <Tooltip title="Zbyt mało tagów. Dodaj jeszcze 1 aby poprawić widoczność artykułu">
          <IconButton>
            <InfoIcon color="action" />
          </IconButton>
        </Tooltip>
        <Typography variant="body2" color="textSecondary">
          Zbyt mało tagów. Dodaj jeszcze 1 aby poprawić widoczność artykułu
        </Typography>
      </Box>
    </Box>
  );
};

export default StatusTagsMessage;
