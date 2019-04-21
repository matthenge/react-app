import React, { Component } from "react";
import Input from "../presentational/Input.jsx";
import "../../../css/bootstrap.css"
import "../../../css/style.css"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state ={};
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleChange(event){
        this.setState({ [event.target.id]: event.target.value });
    }
    handleLogin(event){
        event.preventDefault();
        let logData = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log(logData);
        const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(logData)
        }
        fetch("https://questioners-two-staging.herokuapp.com/api/auth/login/", config)
          .then(res => res.json())
          .then(data => {
              snackBar(data.Message)
              console.log(data)
            })
      }
    render() {
        const { email } = this.state;
        const { password } =this.state;
        document.getElementById('root').style.marginTop = '5%';
        return (
            <form className="container row justify-content-center" onSubmit={this.handleLogin}>
                <div className="col-md-4 offset-md-1 mt-5 border border-primary shadow-lg mb-5 rounded-lg bg-light">
                <h1 className="font-weight-bold">Login</h1>
                <Input
                        text="Email"
                        label="Email"
                        type="email"
                        id="email"
                        placeholder="Email"
                        handleChange={this.handleChange}
                    />
                <Input
                        text="Password"
                        label="Password"
                        type="password"
                        id="password"
                        placeholder="Password"
                        handleChange={this.handleChange}
                    />
                <button type="submit" className="btn btn-primary mb-4">Sign In</button>
                </div>
            </form>
            
        );
    }
}
var snack = document.getElementById("snackbar");

function snackBar(content) {
  snack.innerText = content;
  snack.className = "show";
  setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
}

export default Login;