import {getCurrentDate} from '../utils/Utils'

function validarNome (nome){
    if(nome.length < 3 || nome.length > 40) {
        return {valido:false, texto: "O Nome teve entre 3 e 40 letras"};
    }else{
        return {valido:true, texto: ""};
    }
}

function validarSobrenome (sobrenome){
    if(sobrenome.length < 3 || sobrenome.length > 50) {
        return {valido:false, texto: "O Sobrenome teve entre 3 e 50 letras"};
    }else{
        return {valido:true, texto: ""};
    }
}

function validarParentesco (parentesco){
    if(parentesco.length < 2 || parentesco.length > 20) {
        return {valido:false, texto: "O Parentesco teve entre 2 e 20 letras"};
    }else{
        return {valido:true, texto: ""};
    }
}

function validarNascimento (nascimento){
    if(nascimento > getCurrentDate("-")) {
        return {valido:false, texto: "A Data de Nascimento têm que ser inferior a hoje"};
    }else{
        return {valido:true, texto: ""};
    }
}


export {validarNome, validarSobrenome, validarParentesco, validarNascimento}