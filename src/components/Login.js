import React, { Component } from 'react'
import './Login.css'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      senha: ''
    }
  }

  inputHandler = (e) => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

  singIn = async (e) => {
    e.preventDefault()
    const { email, senha } = this.state
    const params = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        senha: senha
      })
    }
    try{
      const retorno = await fetch('http://localhost:3000/auth/autenticar', params)

      console.log(retorno)
      const usuario = await retorno.json()

      console.log(usuario)
    }catch(e){
      console.log(e)
    }
  }

  render() {
    return (
      <div>
        <form class="form-signin" onSubmit={this.singIn}>
          <img class="mb-4" src="/logo192.png" alt="" width="72" height="72" />
          <h1 class="h3 mb-3 font-weight-normal">Por favor, inscreva-se</h1>
          <label for="inputEmail" class="sr-only">E-mail</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="E-mail" required autofocus onChange={this.inputHandler} />
          <label for="inputPassword" class="sr-only">Senha</label>
          <input type="password" id="inputPassword" class="form-control" placeholder="Senha" required onChange={this.inputHandler} />
          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
      </div>
    )
  }
}