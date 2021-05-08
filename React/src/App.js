import React, { Component } from "react";
import './App.css';
import Header from "./components/Header";
import Routes from "./Routes.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchApi } from "./utilitaires/api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged_in : false,
      user_id: 0,
      user_firstname:  "",
      user_lastname: "",
      user_email: "",
      show_popUp: null,
    };
  }

  popUp() {
    let Dial = this.state.show_popUp;
    if(Dial === null)
      return null;

    return (
        <Dial
          handle_deconnexion={this.handle_deconnexion}
          handle_connexion={this.on_login}
          closeMe={() => this.setState({show_popUp:null})}
          user_id={this.state.user_id}
        />);
  };

  on_login = (u_id, u_token, user_email) => {
    localStorage.setItem('token', u_token);
    localStorage.setItem('user_id', u_id);


    fetchApi(`/users/${u_id}/`)
        .then((ans) => {
          localStorage.setItem('first_name', ans.first_name);
          localStorage.setItem('last_name', ans.last_name);

          this.setState({
            user_name: ans.first_name,
            user_family_name: ans.last_name,
            user_email: user_email,
            user_id: u_id,
            logged_in: true,
          });

        })
        .catch((err) => {
          console.log('failed to fetch profile');
          localStorage.setItem('token', null);
        });
  }

  handle_deconnexion = () => {
    localStorage.clear();

    window.location.href = '/';
  };

  render() {
    return (
      <div className="App">
        <div className="bg">
          <Header 
              afficheNom={this.state.user_firstname + ' ' + this.state.user_lastname}
              display_popUp={(type) => this.setState({ show_popUp: type })}
              logged_in={this.state.logged_in}
          />
          <div className="Body" style={{textAlign: "center"}}>
            <Routes
                user_id={this.state.user_id}
                user_firstname={this.state.user_firstname}
                user_email={this.state.user_email}
                user_lastname={this.state.user_lastname}
                display_popUp={(type) => this.setState({ show_popUp: type })}
            />
            <div id="bodyContent">
              {this.popUp()} {/*every popup will be displayed here*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
