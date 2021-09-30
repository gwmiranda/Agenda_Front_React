import * as React from 'react';
import {DataGrid} from "@mui/x-data-grid";
import "./Tabela.css";


export default function Tabela() {
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
                        headerAlign: "center"
                    },
                    {
                        field: 'parentesco',
                        headerName: "Parentesco",
                        width: 200,
                        align: "center",
                        headerAlign: "center"
                    }
                ]}
                rows={[
                    {
                        id: 1,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 2,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 3,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 4,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 5,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 6,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 7,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 8,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 9,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 10,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 11,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 12,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 13,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 14,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 15,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 16,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 17,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 18,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 19,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 20,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 21,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 22,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 23,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 24,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 25,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                    {
                        id: 26,
                        nome: 'Guilherme',
                        sobrenome: 'Miranda',
                        nascimento: "2021-3-11",
                        parentesco: 'primo',
                    },
                ]}
            />
        </div>
    );
}

// const rows = [
//
//     {
//         id: 1,
//         nome: 'Guilherme',
//         sobrenome: 'Miranda',
//         nascimento: "2021-3-11",
//         parentesco: 'primo',
//     },
//
// ];
//
// // eslint-disable-next-line react-hooks/rules-of-hooks
// const columns = React.useMemo(() => [
//         {field: 'nome', type:'string'},
//         {field: 'sobrenome', type:'string'},
//         {field: 'nascimento', type:'string'},
//         {field: 'parentesco', type:'string'},
//     ],
// );