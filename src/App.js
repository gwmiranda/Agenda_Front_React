import React, {Component} from "react";
import './App.css';
import FormularioCadastro from "./components/Formulario/FormularioCadastro";
import Tabela from "./components/Tabela/Tabela";
import Cabecalho from "./components/Cabecalho/Cabecalho";

import {validarContato, validarNascimento, validarNome, validarParentesco, validarSobrenome} from "./models/cadastro";

class App extends Component {

    constructor() {
        super();
        this.state = {
            pessoaSelecionada: "",
        }
    }

    alteraPessoa(pessoa) {
        this.setState({pessoaSelecionada: pessoa.data})
    }

    render() {
        return (
            <>
                <Cabecalho/>
                <div className={"div"}>
                    <Tabela alteraPessoa={this.alteraPessoa.bind(this)}/>
                    <FormularioCadastro
                        validacoes={{
                            nome: validarNome,
                            sobrenome: validarSobrenome,
                            nascimento: validarNascimento,
                            parentesco: validarParentesco,
                            contato: validarContato
                        }}
                        pessoaTabela={this.state.pessoaSelecionada}
                    />
                </div>
            </>
        );
    };
};

export default App;