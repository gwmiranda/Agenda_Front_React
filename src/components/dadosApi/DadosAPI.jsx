import React, {Component} from "react";
import api from "../../Api";


class dadosAPI extends Component {
    state = {
        pessoas: [],
    }

    async componentDidMount() {
        const response = await api.get('/pessoa');
        this.setState({pessoas: response.data});
    }



    render() {
        const {pessoas} = this.state;
        console.log(pessoas);

        return(
            <div>
                <h1>Pessoas</h1>
                {pessoas.map(pessoa => (

                    <li key={pessoa.id}>
                        <h2>Nome: {pessoa.nome}</h2>
                    </li>
                ))}
            </div>
        )
    }
}

export default dadosAPI;