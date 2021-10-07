import * as React from 'react';
import {DataGrid} from "@mui/x-data-grid";
import "./Tabela.css";
import {Component} from "react";
import api from "../../services/Api";

const columns = [
    {
        field: 'id',
        headerName: "ID",
        width: 50,
        align: "center",
        headerAlign: "center",
    },
    {
        field: 'nome',
        headerName: "Nome",
        width: 230,
        align: "center",
        headerAlign: "center",
    },
    {
        field: 'sobrenome',
        headerName: "Sobrenome",
        width: 230,
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
]

export default class Tabela extends Component{

    _handleMudancaPessoaSelecionada(dados){
        this._alteraPessoa(dados);
    }

    _alteraPessoa(pessoa){
        this.props.alteraPessoa(pessoa);
    }

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
                    columns={columns}
                    rows={listaPessoa}
                    onRowClick={(rowData) => this._handleMudancaPessoaSelecionada(rowData.row)}

                />
            </div>
        );
    }
}