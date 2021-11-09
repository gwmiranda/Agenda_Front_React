import {Button, TextField} from "@material-ui/core";
import React, {useState} from "react";
import "./Login.css"
import Cabecalho from "../Cabecalho/Cabecalho";
import api from "../../services/Api";

function Login({tokenFinal}) {

    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");
    const [erroValido, setErroValido] = useState(false);
    const [erroTexto, setErroTexto] = useState("");

    let token = '';

    async function verificarLogin() {
        api.post("/login", {
            username: username,
            senha: senha

        }).then((res) => {
            token = res.data;
            tokenFinal(`Bearer ${token}`);

        }).catch((e) => {
             if(e.response){
                 helperTextUsuarioInvalido(true)
             }
        })
    }

    function helperTextUsuarioInvalido(verifica){
        if(verifica === true){
            setErroValido(true);
            setErroTexto("Usuario e/ou Senha estão invalidos")
        }
    }

    return (
        <>
            <Cabecalho/>
            <div className={"form"}>
                <form
                    onSubmit={event => {
                        event.preventDefault();
                        verificarLogin();
                    }}
                >
                    <TextField
                        value={username}
                        onChange={event => {
                            setUsername(event.target.value)
                        }}
                        name="login"
                        label="Login"
                        variant="outlined"
                        margin="normal"
                        error={erroValido}
                        fullWidth
                        required
                    />

                    <TextField
                        value={senha}
                        onChange={event => {
                            setSenha(event.target.value)
                        }}
                        name="senha"
                        label="Senha"
                        variant="outlined"
                        margin="normal"
                        type={"password"}
                        error={erroValido}
                        helperText={erroTexto}
                        fullWidth
                        required
                    />

                    <Button
                        fullWidth
                        type={"submit"}
                        variant="contained"
                        onClick={onsubmit}
                    >Logar</Button>
                </form>
            </div>
        </>
    )
}

export default Login