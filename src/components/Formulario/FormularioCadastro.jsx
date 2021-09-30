import React from "react";
import {Button, Container, IconButton, Stack, TextField, Typography} from "@material-ui/core";
import {ReactComponent as DeleteIcon} from '../../images/remove.svg';
import "./FormularioCadastro.css";

function FormularioCadastro() {

    return(
        // <Container component={"article"} maxWidth={"sm"} className={"container"}>
        <div className={"container"}>
            <form >
                    <TextField
                        id="nome"
                        label="Nome"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth />

                    <TextField
                        id="sobrenome"
                        label="Sobrenome"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth />

                    <TextField
                        id="dataNascimento"
                        label="Data de Nascimento"
                        type={"date"}
                        margin="normal"
                        required
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        />

                    <TextField
                        id="parentesco"
                        label="Parentesco"
                        margin="normal"
                        required
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        fullWidth
                    >Adicionar Número</Button>
                    <div className={"campoNumero"}>
                        <TextField
                            id="numero"
                            label="Número"
                            type={"number"}
                            margin="normal"
                            required

                        />
                        <IconButton><DeleteIcon/></IconButton>
                    </div>
                    <Stack spacing={1} direction="row">
                        <Button variant="contained">Salvar</Button>
                        <Button className={"buttons"} variant="outlined" color="error" >Deletar</Button>
                        <Button className={"buttons"} variant="outlined">Cancelar</Button>
                    </Stack>
                </form>
            </div>
    )

}

export default FormularioCadastro;