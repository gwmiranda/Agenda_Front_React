import React, {Component} from "react";
import './App.css';
import FormularioCadastro from "./components/Formulario/FormularioCadastro";
import Tabela from "./components/Tabela/Tabela";
import Cabecalho from "./components/Cabecalho/Cabecalho";


class App extends Component{
   render() {
        return (
        <>
        <Cabecalho/>
        <div className={"div"}>
            <Tabela/>
            <FormularioCadastro aoEnviar={aoEnviarForm} validarNome={validarNome} />
        </div>
        </>
     );
   };
};

function aoEnviarForm(dados) {
    console.log(dados);
}

function validarNome (nome){
    if(nome.length < 3 || nome.length > 40) {
        return {valido:false, texto: "O Nome teve entre 3 e 40 letras"};
    }else{
        return {valido:true, texto: ""};
    }
}

export default App;