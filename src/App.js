import React, { Component } from 'react';
import './App.css';

class App extends Component{

  constructor(){
    super()
    this.state = {
      lista: []
    }
  }

  async componentDidMount(){
    let resposta = await fetch('http://localhost:3000/series')    
    const series = await resposta.json()
    this.setState({lista: series})
    console.log(series)
  }

  render(){
    return (
      <div className="App">
        Cadastro de Série
        <form method="post">
          <div className="form">
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome"></input>
            <label htmlFor="lancamento">Ano de lançamento</label>
            <input type="text" id="lancamento" name="lancamento"></input>
            <label htmlFor="temporadas">Temporadas</label>
            <input type="text" id="Temporadas" name="Temporadas"></input>
            <label htmlFor="sinopse">Sinopse</label>
            <textarea type="text" id="sinopse" name="sinopse"></textarea>
            <button type="submit">Salvar</button>
          </div>
        </form>
          <div className='list'>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>lançamento</th>
                  <th>Temporadas</th>
                  <th>Sinopse</th>
                </tr>
              </thead>
              <tbody>
                {this.state.lista.map(series => {
                  return(
                    <tr key={series.id}>
                      <td>{series.nome}</td>
                      <td>{series.lancamento}</td>
                      <td>{series.temporadas}</td>
                      <td>{series.sinopse}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
      </div>
    );
  }
}

export default App;
