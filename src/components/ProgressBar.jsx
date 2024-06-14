import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const ProgressBarContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const ProgressSegment = styled(Box)(({ theme, color }) => ({
  width: "20px",
  height: "5px",
  margin: "0 2px",
  backgroundColor: color,
}));

const ProgressBar = ({ level }) => {
  const segments = 5;
  const colors = ["#ff0000", "#ff9900", "#00cc00", "#00000042"];

  return (
    <ProgressBarContainer>
      <Typography
        variant="body1"
        sx={{
          marginRight: 1,
          color:
            level === 2
              ? colors[0]
              : level === 3
              ? colors[1]
              : level === 5
              ? colors[2]
              : colors[3],
        }}
      >
        {level === 2
          ? "Słabo"
          : level === 3
          ? "Średnio"
          : level === 5
          ? "Dobrze"
          : ""}
      </Typography>
      {[...Array(segments)].map((_, index) => (
        <ProgressSegment
          key={index}
          color={
            level === 2
              ? colors[0]
              : level === 3
              ? colors[1]
              : level === 5
              ? colors[2]
              : colors[3]
          }
        />
      ))}
    </ProgressBarContainer>
  );
};

export default ProgressBar;
