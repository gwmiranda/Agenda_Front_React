import React from "react";
import {IconButton, TextField} from "@material-ui/core";
import {ReactComponent as DeleteIcon} from "../../images/remove.svg";

const CampoNumero = () => {
  return(
      <div>
          <TextField
              id="numero"
              label="Número"
              type={"number"}
              margin="normal"
              required

          />
          <IconButton><DeleteIcon/></IconButton>
      </div>
  )
}

export default CampoNumero;