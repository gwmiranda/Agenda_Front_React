import React, {Component} from "react";
import './App.css';
import FormularioCadastro from "./components/Formulario/FormularioCadastro";
import Tabela from "./components/Tabela/Tabela";


class App extends Component{
   render() {
     return (
        <div className={"div"}>
            <Tabela/>
            <FormularioCadastro/>
        </div>
     );
   };
};

export default App;
