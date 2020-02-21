import React, { Component } from 'react'
import './Login.css'
import { signIn } from '../services/auth-service'

const MsgErro = (props) => {
  return props.msg ? (
    <div className='alert alert-danger'>
      {props.msg}
    </div>
  ) : ('')
}

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      senha: '',
      msgErro: ''
    }
  }

  inputHandler = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  signIn = async (e) => {
    try {
      e.preventDefault()
      const usuario = this.state
      delete usuario.msgErro
      const retorno = await signIn(usuario)
      if (retorno.status === 400) {
        const erro = await retorno.json()
        return this.setState({ msgErro: erro.erro })
      }
      if (retorno.ok) {
        this.props.history.push('/')
      }
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div className='body'>
        <form class="form-signin" onSubmit={this.signIn}>
          <img class="mb-4" src="/logo192.png" alt="" width="72" height="72" />
          <h1 class="h3 mb-3 font-weight-normal">Por favor, inscreva-se</h1>
          <MsgErro msg={this.state.msgErro} />
          <label for="inputEmail" class="sr-only">E-mail</label>
          <input type="email" id="email" name="email" class="form-control" placeholder="E-mail" required autofocus onChange={this.inputHandler} />
          <label for="inputPassword" class="sr-only">Senha</label>
          <input type="password" id="senha" name="senha" class="form-control" placeholder="Senha" required onChange={this.inputHandler} />
          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
      </div>
    )
  }
}