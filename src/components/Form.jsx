import React from "react";
import { StyledForm, StyledButtonBox } from "./FormStyles";
import { MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

const Form = ({ handleCloseModal, handleOpenAlert }) => {
  return (
    <StyledForm component="form" noValidate autoComplete="off">
      <TextField label="Title" variant="outlined" />
      <TextField label="Description" variant="outlined" multiline rows={4} />
      <TextField variant="outlined" select label="Visibility" value="Public">
        <MenuItem value="Public">Public</MenuItem>
        <MenuItem value="Private">Private</MenuItem>
        <MenuItem value="Unlisted">Unlisted</MenuItem>
      </TextField>
      <FormControl>
        <FormLabel>Who can comment?</FormLabel>
        <RadioGroup defaultValue="female">
          <FormControlLabel value="Everybody" control={<Radio />} label="Everybody" />
          <FormControlLabel value="My friends" control={<Radio />} label="My friends" />
          <FormControlLabel value="Nobody" control={<Radio />} label="Nobody" />
          <FormControlLabel value="Custom" disabled control={<Radio />} label="Custom (Premium)" />
        </RadioGroup>
      </FormControl>
      <StyledButtonBox>
        <Button color="primary" variant="contained" onClick={handleOpenAlert}>
          Create
        </Button>
        <Button color="secondary" variant="contained" onClick={handleCloseModal}>
          Cancel
        </Button>
      </StyledButtonBox>
    </StyledForm>
  );
};

export default Form;
