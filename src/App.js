import React, { Component } from 'react';
import './stilo.css'

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            textoFrase: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = ['O importante não é vencer todos os dias, mas lutar sempre.', 
        'Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!',
        'É melhor conquistar a si mesmo do que vencer mil batalhas.',
        'Quem ousou conquistar e saiu pra lutar, chega mais longe!',
        'Enquanto houver vontade de lutar haverá esperança de vencer.',
        'Difícil é ganhar um amigo em uma hora; fácil é ofendê-lo em um minuto.'];
    }
    
    quebraBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
        this.setState(state);
    }

   render(){
        return(
            <div className="conteiner">
                <img src={require('./assets/biscoito.png')} className="img" />
                <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>
        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                    <button onClick={this.props.acaoBtn} className="btn" >{this.props.nome}</button>
            </div>
        );
    }
}

export default App;