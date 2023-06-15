import { forwardRef } from "react";
import { TextField } from "@mui/material";

interface InputType { 
  name: string,
  placeholder: string,
  type?: string
}

const TextInput = forwardRef((props:InputType, ref) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      inputRef={ref}
      fullWidth={true}
      {...props}
    ></TextField>
  )
})

export default TextInput;