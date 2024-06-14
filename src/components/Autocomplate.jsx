import React, { useState, useRef } from "react";
import {
  TextField,
  Checkbox,
  Button,
  Autocomplete,
  FormControlLabel,
  Popper,
  Paper,
  ListSubheader,
  Typography,
} from "@mui/material";
import options from "../data/data.json";
import { styled } from "@mui/system";

const StyledPopper = styled(Popper)({
  zIndex: 1300,
});

const StyledAutocomplete = styled(Autocomplete)({
  "& .MuiOutlinedInput-root": {
    maxHeight: 150,
    overflowY: "auto",
  },
  "& .MuiAutocomplete-option .MuiAutocomplete-option": {
    justifyContent: "space-between",
  },
});

const AutocompleteComponent = ({
  isOpen,
  handleClose,
  onInputFocus,
  handleAdd,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const autocompleteRef = useRef(null);

  const handleChange = (event, value) => {
    setSelectedOptions(value);
  };

  const handleSave = () => {
    handleAdd(selectedOptions);
    handleClose();
    handleClear();
  };

  const handleClear = () => {
    setSelectedOptions([]);
    autocompleteRef.current.value = "";
  };

  const sortOptions = (options, selectedOptions) => {
    return options.sort((a, b) => {
      const aSelected = selectedOptions.includes(a);
      const bSelected = selectedOptions.includes(b);
      if (aSelected && !bSelected) return -1;
      if (!aSelected && bSelected) return 1;
      return 0;
    });
  };

  return (
    <div>
      <StyledAutocomplete
        ref={autocompleteRef}
        sx={{
          "& .MuiAutocomplete-listbox": { maxHeight: "200px" },
          "& $.MuiOutlinedInput-root": { paddingRight: "0px" },
        }}
        multiple
        options={sortOptions(options, selectedOptions)}
        disableCloseOnSelect
        renderTags={() => null}
        getOptionLabel={(option) => option.tag}
        value={selectedOptions}
        onChange={handleChange}
        onInputChange={onInputFocus}
        open={isOpen}
        PopperComponent={(props) => (
          <StyledPopper {...props} placement="bottom-start" />
        )}
        renderOption={(props, option, { selected }) => (
          <li
            {...props}
            style={{
              display: "flex",
              justifyContent: "space-between",
              border: selected ? "1px solid #1a73e8" : "0px",
              borderRadius: "5px",
              margin: "10px",
              padding: "0 5px",
              '& .MuiAutocomplete-listbox .MuiAutocomplete-option[aria-selected="true"]':
                {
                  backgroundColor: "white !important",
                },
            }}
          >
            <FormControlLabel
              control={<Checkbox checked={selected} />}
              label={option.tag}
              sx={{ "& .MuiTypography-root": { fontSize: "12px" } }}
            />
            <Typography sx={{ fontSize: "12px" }} color="text.secondary">
              +{option.articles}
            </Typography>
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            inputRef={autocompleteRef}
            variant="standard"
            autoFocus={false}
            placeholder="Wyszukaj grupę lub tag"
            sx={{
              "& .MuiAutocomplete-input": {
                width: "100% !important",
              },
              width: "100%",
              "& .MuiInputBase-root": {
                maxHeight: "150px",
                overflowY: "auto",
                overflowX: "hidden",
                outline: 0,
                paddingRight: "0px",
              },
            }}
          />
        )}
        PaperComponent={({ children }) => (
          <Paper>
            {children}
            <ListSubheader>
              <Button
                disabled={selectedOptions.length === 0}
                variant="contained"
                onClick={handleSave}
                fullWidth
              >
                Zapisz
              </Button>
            </ListSubheader>
          </Paper>
        )}
      />
    </div>
  );
};

export default AutocompleteComponent;
