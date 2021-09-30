import * as React from 'react';
import {DataGrid} from "@mui/x-data-grid";
import "./Tabela.css";



export default function Tabela() {
    return (
        <div className={"grid"}>
            <DataGrid
                columns={[{ field: 'username' }, { field: 'age'}, { field: 'nascimento'}, { field: 'parentesco'}]}
                rows={[
                    {
                        id: 1,
                        username: '@MaterialUI',
                        age: 20,
                    },
                    {
                        id: 2,
                        username: '@MaterialUI',
                        age: 10,
                    },
                    {
                        id: 4,
                        username: '@MaterialUI',
                        age: 20,
                    },
                    {
                        id: 5,
                        username: '@MaterialUI',
                        age: 10,
                    },
                    {
                        id: 6,
                        username: '@MaterialUI',
                        age: 20,
                    },
                    {
                        id: 7,
                        username: '@MaterialUI',
                        age: 10,
                    },
                    {
                        id: 8,
                        username: '@MaterialUI',
                        age: 20,
                    },
                    {
                        id: 9,
                        username: '@MaterialUI',
                        age: 10,
                    },
                    {
                        id: 10,
                        username: '@MaterialUI',
                        age: 20,
                    },
                    {
                        id: 11,
                        username: '@MaterialUI',
                        age: 10,
                    },
                ]}
            />
        </div>
    );
}
