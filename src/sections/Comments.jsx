import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
const Comments = () => {
  return (
    <Card sx={{ maxWidth: "300px", minHeight: '400px' }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }} gutterBottom variant="h6">
            Komentarze
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Comments;
