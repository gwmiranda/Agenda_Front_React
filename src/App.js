import React, {useState} from "react";
import './App.css';
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Login from "./components/Login/Login";
import FormularioCadastro from "./components/Formulario/FormularioCadastro";
import Tabela from "./components/Tabela/Tabela";
import {validarContato, validarNascimento, validarNome, validarParentesco, validarSobrenome} from "./models/cadastro";

function App() {

    const [pessoaSelecionada, setPessoaSelecionada] = useState("");
    const [atualizarTabela, setAtualizarTabela] = useState(0);
    const [token, setToken] = useState(null);    

    function alteraPessoa(pessoa) {
        setPessoaSelecionada(pessoa)
    }

    function isAtualizaTabela(){
        setAtualizarTabela(atualizarTabela + 1)
    }

    function alteraToken(tokenLogin){
        setToken(tokenLogin)
    }


    return( 
    <div className="app">
        {!token ? (
                <Login
                    tokenFinal={(e) => {alteraToken(e)}}
                />)
             :(<>
                    <Cabecalho/>
                    <div className={"div"}>
                        <Tabela
                            alteraPessoa={(e) => {alteraPessoa(e)}}
                            atualizarTabela={(e) => {isAtualizaTabela(e)}}
                            token={token}
                        />
                        <FormularioCadastro
                            validacoes={{
                                nome: validarNome,
                                sobrenome: validarSobrenome,
                                nascimento: validarNascimento,
                                parentesco: validarParentesco,
                                contato: validarContato
                            }}
                            pessoaTabela= {pessoaSelecionada}
                            limparPessoa= {(e) => {alteraPessoa(e)}}
                            renderizarTabela={(e) => {isAtualizaTabela(e)}}
                            token={token}
                        />
                    </div>
                </>)  
        }
    </div>
    );
}

export default App;