import React, { Component } from 'react';

class FormularioSeries extends Component{

    constructor(){
        super()
        this.stateInicial = {
            nome: '',
            lancamento: '',
            temporadas: '',
            sinopse: ''
        }

        this.state = this.stateInicial
    }

    inputHandler = (e) => {
        const { name,  value} = e.target
      
        this.setState({[name]: value})
      }
      
    enviaDados = (e) =>{
        e.preventDefault()
        this.props.enviaDados(this.state)
        this.setState(this.stateInicial)
    }

    render() {
        return(
        <div className='card'>
            <div className='card-header'>
                Cadastro de Séries
            </div>
            <div className='card-body'>
                <div>

                </div>
                <form method="post" onSubmit={this.enviaDados}>
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" className='form-control' name="nome" value={this.state.nome} onChange={this.inputHandler}></input>
                        <label htmlFor="lancamento">Ano de lançamento</label>
                        <input type="number" id="lancamento" className='form-control' name="lancamento" value={this.state.lancamento} onChange={this.inputHandler}></input>
                        <label htmlFor="temporadas">Temporadas</label>
                        <input type="number" id="temporadas" className='form-control' name="temporadas" value={this.state.temporadas} onChange={this.inputHandler}></input>
                        <label htmlFor="sinopse">Sinopse</label>
                        <textarea type="text" id="sinopse" className='form-control' name="sinopse" value={this.state.sinopse} onChange={this.inputHandler}></textarea>
                        <button type="submit" className='btn-success form-control mt-2'>Salvar</button>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}

export default FormularioSeries