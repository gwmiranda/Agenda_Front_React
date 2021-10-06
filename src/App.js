import React, {Component} from "react";
import './App.css';
import FormularioCadastro from "./components/Formulario/FormularioCadastro";
import Tabela from "./components/Tabela/Tabela";
import Cabecalho from "./components/Cabecalho/Cabecalho";

import {validarNome, validarSobrenome, validarNascimento} from "./models/cadastro";

class App extends Component{
    render() {

        return (
        <>
            <Cabecalho/>
            <div className={"div"}>
                <Tabela/>
                <FormularioCadastro aoEnviar={aoEnviarForm} validacoes={{
                    nome: validarNome,
                    sobrenome: validarSobrenome,
                    nascimento: validarNascimento
                }} />
            </div>
        </>
     );
   };
};

function aoEnviarForm(dados) {
    console.log(dados);
}



export default App;