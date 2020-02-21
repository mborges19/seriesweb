import React, { Component } from 'react';
import PubSub from 'pubsub-js'
import './TabelaSeries.css'

const ListaSeries = (props) => {

  if (props.series.erro) {
    return <h1>{props.series.erro}</h1>
  }

  return (
    <div className='card-body card-body-flex'>
      {props.series.map(series => {
        return (
          <div className='card card-serie' key={series.id}>
            <div className='card-header'>
              <h5 className='card=title'>{series.nome}</h5>
              <h6 className='card-title text-muted mb-0'>{series.ano_lancamento}</h6>
            </div>
            <div className='card-body'>
              <img src='/logo192.png' alt="" className='card-img' />
            </div>
            <div className='card-footer'>
              {series.temporadas}
              {series.temporadas > 1 ? ' temporadas' : ' temporada'}<br />
              <a href='#' data-toggle="modal" data-target="#exampleModalCenter" onClick={() => {PubSub.publish('detail', series)}}>Ver mais...</a><br />
              <div className='text-center mt-1'>
                <button className='btn btn btn-outline-danger btn-sm mr-2' onClick={() => {
                  if (window.confirm('Confirma a execução?'))
                    props.deleta(series.id)
                }}>Delete</button>
                <button className='btn btn btn-outline-warning btn-sm' onClick={() => {
                  PubSub.publish('editing', series)
                }}>Editar</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

class TabelaSeries extends Component {

  constructor(){
    super()
    this.state = {
      serieDetalhe: ''
    }
    PubSub.subscribe('detail', (msg, series) => {
      this.setState({serieDetalhe: series})
    })
  }

  render() {

    const { series, deleta } = this.props

    return (
      <div className='card'>
        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">{this.state.serieDetalhe.nome}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img src='/logo192.png' alt=''className='card-img'/>
                {this.state.serieDetalhe.temporadas}
                {this.state.serieDetalhe.temporadas > 1 ? 'Temporadas' : 'Temporada'}<br/>
                {this.state.serieDetalhe.ano_lancamento}<br/>
                {this.state.serieDetalhe.sinopse}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <div className='card-header'>
          <h5 className='text-center'>Lista de Séries</h5>
        </div>
        <ListaSeries series={series} deleta={deleta} />
      </div>
    )
  }
}

export default TabelaSeries