import React, {useState} from "react";
import {Button, IconButton, Stack, TextField} from "@material-ui/core";
import {ReactComponent as DeleteIcon} from '../../images/remove.svg';
import "./FormularioCadastro.css";
import api from "../../services/Api";

function FormularioCadastro({aoEnviar, validacoes}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [parentesco, setParentesco] = useState("");
    const [telefones, setTelefones] = useState([]);
    const [erros, setErros] = useState({ nome:{valido: true, texto: ""}, sobrenome:{valido: true, texto: ""}, nascimento:{valido: true, texto: ""}});

    function validarCampos(event){
        const {name, value} = event.target;
        const novoEstado = {...erros};
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

    function possoEnviar(){
        for ( let campo in erros){
            if ( !erros[campo].valido){
                return false;
            };
        };
        return true;
    };

    const adicionarCampoNumero = (e) => {
        e.preventDefault();
        setTelefones([...telefones, ""]);
    };

    const handleChangeTelefone = (e, index) => {
        telefones[index] = e.target.value;
        setTelefones([...telefones]);
    };

    const handleRemoverCampoBotao = (posicao) => {
        setTelefones([...telefones.filter((_, index) => index !== posicao)])
    }

    async function salvarPessoa() {
        await api.post("/pessoa", {
            nome: nome,
            sobrenome: sobrenome,
            parentesco: parentesco,
            nascimento: nascimento,
            contato: telefones
        });
        limparCampos();
    }

    function limparCampos(){
        setNome("");
        setSobrenome("");
        setNascimento("");
        setParentesco("");
        setTelefones([]);
    }

    return (
        <div className={"container"}>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    if (possoEnviar()) {
                        aoEnviar({nome, sobrenome, nascimento, parentesco, telefones});
                        salvarPessoa()
                    }
                }}
            >
                <TextField
                    value={nome}
                    onChange={(event) => {setNome(event.target.value)}}
                    onBlur={validarCampos}
                    error={!erros.nome.valido}
                    helperText={erros.nome.texto}
                    id="nome"
                    label="Nome"
                    name={"nome"}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth />

                <TextField
                    value={sobrenome}
                    onChange={event => {setSobrenome(event.target.value)}}
                    onBlur={validarCampos}
                    error={!erros.sobrenome.valido}
                    helperText={erros.sobrenome.texto}
                    id="sobrenome"
                    label="Sobrenome"
                    name={"sobrenome"}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth />

                <TextField
                    value={nascimento}
                    onChange={event => {setNascimento(event.target.value)}}
                    onBlur={validarCampos}
                    error={!erros.nascimento.valido}
                    helperText={erros.nascimento.texto}
                    id="nascimento"
                    label="Data de Nascimento"
                    name="nascimento"
                    type={"date"}
                    margin="normal"
                    required
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    />

                <TextField
                    value={parentesco}
                    onChange={event => {setParentesco(event.target.value)}}
                    id="parentesco"
                    label="Parentesco"
                    name={"parentesco"}
                    margin="normal"
                    fullWidth
                />

                <Button
                    variant="outlined"
                    color={"success"}
                    onClick={adicionarCampoNumero}
                    fullWidth
                >Adicionar Número</Button>

                <div >
                    {
                        telefones.map((telefone, index )=> (
                            <div key={index} className={"campoNumero"}>
                                <TextField
                                    id={`telefone-${index + 1}`}
                                    label={`Telefone ${index + 1}`}
                                    onChange={event => handleChangeTelefone(event, index)}
                                    type={"number"}
                                    margin="normal"
                                    value={telefone}
                                    required
                                />
                                <IconButton
                                    onClick={() => {handleRemoverCampoBotao(index)}}
                                ><DeleteIcon/></IconButton>
                            </div>

                        ))
                    }



                </div>

                <Stack className={"containerButtons"} spacing={1} direction="row" >
                    <Button type={"submit"} variant="contained" onClick={onsubmit} >Salvar</Button>
                    <Button className={"buttons"} variant="outlined" color="error" >Deletar</Button>
                    <Button className={"buttons"} variant="outlined" onClick={limparCampos}>Cancelar</Button>
                </Stack>
            </form>
        </div>
    )
}

export default FormularioCadastro;