import React, { Component } from 'react';

const TabelaHead = () => {
    return(
        <thead>
            <tr>
                <th>Nome</th>
                <th>lançamento</th>
                <th>Temporadas</th>
                <th>Sinopse</th>
            </tr>
        </thead>
    )
}

const TabelaBody = (props) =>{
    return(
        <tbody>
            {props.series.map(series => {
                return(
                <tr key={series.id}>
                    <td>{series.nome}</td>
                    <td>{series.ano_lancamento}</td>
                    <td>{series.temporadas}</td>
                    <td>{series.sinopse}</td>
                </tr>
                )
            })}
        </tbody>
    )
}

class TabelaSeries extends Component {

    render(){

        const {series} = this.props
        
        return(
            <div className='list'>
            <table>
              <TabelaHead/>
              <TabelaBody series={series}/>
            </table>
          </div>
        )
    }
}

export default TabelaSeries