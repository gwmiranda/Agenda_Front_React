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
            <FormularioCadastro/>
        </div>
        </>
     );
   };
};

export default App;
