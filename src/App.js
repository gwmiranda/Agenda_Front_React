import React, {Component} from "react";
import './App.css';
import FormularioCadastro from "./components/Formulario/FormularioCadastro";
import Tabela from "./components/Tabela/Tabela";
import Cabecalho from "./components/Cabecalho/Cabecalho";

import {validarContato, validarNascimento, validarNome, validarParentesco, validarSobrenome} from "./models/cadastro";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pessoaSelecionada: "",
            atualizarTabela: 0,
        }
    }

    alteraPessoa(pessoa) {
        this.setState({pessoaSelecionada: pessoa})
    }

    isAtualizaTabela(){
        this.setState(state  => ({atualizarTabela: state.atualizarTabela + 1}))
    }

    render() {
        return (
            <>
                <Cabecalho/>
                <div className={"div"}>
                    <Tabela
                        alteraPessoa={this.alteraPessoa.bind(this)}
                        atualizarTabela={this.state.atualizarTabela}
                    />
                    <FormularioCadastro
                        validacoes={{
                            nome: validarNome,
                            sobrenome: validarSobrenome,
                            nascimento: validarNascimento,
                            parentesco: validarParentesco,
                            contato: validarContato
                        }}
                        pessoaTabela= {this.state.pessoaSelecionada}
                        limparPessoa= {this.alteraPessoa.bind(this)}
                        renderizarTabela={this.isAtualizaTabela.bind(this)}
                    />
                </div>
            </>
        );
    };
};

export default App;