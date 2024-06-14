import React from "react";
import Chip from "@mui/material/Chip";

const Tag = ({ name, handleDelete, id, props }) => {
  return (
    <>
      <Chip
        label={name}
        onDelete={() => handleDelete(id)}
        variant="outlined"
        {...props}
      />
    </>
  );
};

export default Tag;
