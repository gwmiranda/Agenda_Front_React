import React, {useState} from "react";
import {Button, IconButton, Stack, TextField} from "@material-ui/core";
import {ReactComponent as DeleteIcon} from '../../images/remove.svg';
import "./FormularioCadastro.css";

function FormularioCadastro({aoEnviar, validarNome, validarSobrenome}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [parentesco, setParentesco] = useState("");
    const [erros, setErros] = useState({nome:{valido: true, texto: ""}});

    return (
        <div className={"container"}>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    aoEnviar({nome,sobrenome, nascimento, parentesco});
                }}
            >

                <TextField
                    value={nome}
                    onChange={(event) => {setNome(event.target.value)}}
                    onBlur={(event) => {
                        const ehValidoNome = validarNome(nome);
                        setErros({nome:ehValidoNome})
                    }}
                    error={!erros.nome.valido}
                    helperText={erros.nome.texto}
                    id="nome"
                    label="Nome"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth />

                <TextField
                    value={sobrenome}
                    onChange={event => {setSobrenome(event.target.value)}}

                    id="sobrenome"
                    label="Sobrenome"
                    variant="outlined"
                    margin="normal"
                    // required
                    fullWidth />

                <TextField
                    value={nascimento}
                    onChange={event => {setNascimento(event.target.value)}}
                    id="nascimento"
                    label="Data de Nascimento"
                    type={"date"}
                    margin="normal"
                    // required
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    />

                <TextField
                    value={parentesco}
                    onChange={event => {setParentesco(event.target.value)}}
                    id="parentesco"
                    label="Parentesco"
                    margin="normal"
                    // required
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
                        // required

                    />
                    <IconButton><DeleteIcon/></IconButton>
                </div>
                <Stack spacing={1} direction="row">
                    <Button type={"submit"} variant="contained" onClick={onsubmit} >Salvar</Button>
                    <Button className={"buttons"} variant="outlined" color="error" >Deletar</Button>
                    <Button className={"buttons"} variant="outlined">Cancelar</Button>
                </Stack>
            </form>
        </div>
    )
}

export default FormularioCadastro;