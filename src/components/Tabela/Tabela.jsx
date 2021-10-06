import * as React from 'react';
import {DataGrid} from "@mui/x-data-grid";
import "./Tabela.css";
import {Component} from "react";
import api from "../../services/Api";

export default class Tabela extends Component{

    state = {
        pessoas: [],
    }

    async componentDidMount() {
        const response = await api.get('/pessoa');
        this.setState({pessoas: response.data});
    }


    render() {

        const {pessoas} = this.state;

        const listaPessoa = pessoas.map(pessoa => (
            {
                id: pessoa.id,
                nome: pessoa.nome,
                sobrenome: pessoa.sobrenome,
                nascimento: pessoa.nascimento,
                parentesco: pessoa.parentesco,
            })
        )

        return (
            <div className={"grid"}>
                <DataGrid
                    columns={[
                        {
                            field: 'nome',
                            headerName: "Nome",
                            width: 250,
                            align: "center",
                            headerAlign: "center",
                        },
                        {
                            field: 'sobrenome',
                            headerName: "Sobrenome",
                            width: 250,
                            align: "center",
                            headerAlign: "center"
                        },
                        {
                            field: 'nascimento' ,
                            headerName: "Data de Nascimento",
                            width: 190,
                            align: "center",
                            headerAlign: "center",
                            type: "date",
                        },
                        {
                            field: 'parentesco',
                            headerName: "Parentesco",
                            width: 200,
                            align: "center",
                            headerAlign: "center"
                        }
                    ]}
                    rows={listaPessoa}
                />
            </div>
        );
    }
}