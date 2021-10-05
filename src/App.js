import React, {Component} from "react";
import './App.css';
import FormularioCadastro from "./components/Formulario/FormularioCadastro";
import Tabela from "./components/Tabela/Tabela";
import Cabecalho from "./components/Cabecalho/Cabecalho";

import {validarNome, validarSobrenome, validarParentesco, validarNascimento} from "./models/cadastro";
import DadosAPI from "./components/dados/DadosAPI";

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
                    parentesco: validarParentesco,
                    nascimento: validarNascimento
                }} />
            </div>
            <DadosAPI/>
        </>
     );
   };
};

function aoEnviarForm(dados) {
    console.log(dados);
}



export default App;