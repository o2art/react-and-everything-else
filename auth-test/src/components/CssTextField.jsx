import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export const CssTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "#357a38",
    borderWidth: 2,
  },
  "& input:invalid + fieldset": {
    borderColor: "#ab003c",
    borderWidth: 2,
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 6,
    padding: "4px !important", // override inline-style
  },
});
