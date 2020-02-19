import React, { Component } from 'react';
import PubSub from 'pubsub-js'
import './TabelaSeries.css'

const ListaSeries = (props) => {
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
              <img src='/logo192.png' className='card-img' />
            </div>
            <div className='card-footer'>
              {series.temporadas}
              {series.temporadas > 1 ? ' temporadas' : ' temporada'}<br />
              <a href='#'>Sinopse</a><br />
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

  render() {

    const { series, deleta } = this.props

    return (
      <div className='card'>
        <div className='card-header'>
          <h5 className='text-center'>Lista de Séries</h5>
        </div>
        <ListaSeries series={series} deleta={deleta} />
      </div>
    )
  }
}

export default TabelaSeries