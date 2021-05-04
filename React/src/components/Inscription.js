import React, {Component} from "react";
import {Modal} from "react-bootstrap";

const info_init = {
    email: "",
    password: "",
    confirmPassword: "",
    errorText: ""
};

class Inscription extends Component{
    constructor(props) {
        super(props);
        this.state = info_init;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState({ [name]: value, errorText:"" });
    };

    handleSubmit(e){
        //REQUETE VERS API (FLASK) POUR SE CONNECTER
        e.preventDefault();
        if(this.checkInput()) {
            let info = {};
            info["email"] = "";
            info["password"] = "";
            info["confirmPassword"] = "";
            this.setState({info: info});
        }
    }

    checkInput(){
        let info = this.state.info_init;
        let errorText = {};
        let valid = true;

         // Check if it's a valid email
         if (typeof info["email"] !== "undefined") {
             let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
             if (!pattern.test(info["email"])) {
                 valid = false;
             }
         }
         // Check the password's strength
         if (typeof info["password"] !== "undefined") {
             let lengthCheck, letterMajCheck, letterMinCheck, numberCheck, specialCharacterCheck = (true, true, true, true, true);
             if (info["password"].length < 8){
                 lengthCheck = false;
                 errorText["password"] = "Le mot de passe doit contenir au minimum 8 caractères";
             }
             if (!info["password"].value.match(/^[0-9]+$/)){
                 numberCheck = false;
             }
             if (!info["password"].value.match(/^[a-z]+$/)){
                 letterMinCheck = false;
             }
             if (!info["password"].value.match(/^[A-Z]+$/)){
                 letterMajCheck = false;
             }
             if (!info["password"].value.match(/^[!@#$%^&*]+$/)){
                 specialCharacterCheck = false;
             }
             if (lengthCheck && numberCheck && letterMajCheck && letterMinCheck && specialCharacterCheck){
                 valid = true;
             }
         }

         // Check if the same password is typed to confirm the registration
         if (typeof info["password"] !== "undefined" && typeof info["confirmPassword"] !== "undefined") {
            if (info["password"] !== info["confirmPassword"]) {
                valid = false;
            }

         }
         this.setState({
             errorText: errorText
         });
        return valid;
    };

    render() {
        return (
            <>
                <Modal
                    show={true}
                    onHide={this.props.closeMe}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Inscription</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form id={"signInForm"} onSubmit={this.handleSubmit.bind(this)}>
                            <label className={"FormField_Label"} htmlFor={"email"}>
                                Email address
                            </label>
                            <input
                                required
                                type="email"
                                className={"FormField_Input"}
                                name={"email"}
                                autoComplete={"username"}
                                placeholder={"Entrez votre adresse mail"}
                                value={this.state.email}
                                onChange={this.handleChange.bind(this)}
                            />

                            <label className={"FormField_Label"} htmlFor={"password"}>
                                Mot de passe
                            </label>
                            <label>
                                (Votre mot de passe doit contenir au moins 8 caractères, une lettre majuscule,
                                une lettre minuscule, un chiffre et un caractère spécial)
                            </label>
                            <input
                                required
                                type="password"
                                className={"FormField_Input"}
                                name={"password"}
                                autoComplete={"current-password"}
                                placeholder={"Entrez votre mot de passe"}
                                value={this.state.password}
                                onChange={this.handleChange.bind(this)}
                            />
                            <label className={"FormField_Label"} htmlFor={"confirmPassword"}>
                                Confirmez votre mot de passe
                            </label>

                            <input
                                required
                                type="password"
                                className={"confirmPassword"}
                                name={"confirmPassword"}
                                autoComplete={"current-password"}
                                placeholder={"Confirmez votre mot de passe"}
                                value={this.state.confirmPassword}
                                onChange={this.handleChange.bind(this)}
                            />

                            <div className="error" id="connexionError" disabled="disabled">{this.state.errorText}</div>

                            <div className={"FormBtns"}>
                                <input
                                    className={"FormCancelBtn"}
                                    type={"button"}
                                    value={"Annuler"}
                                    onClick={this.props.closeMe}
                                />
                                <input
                                    className="FormSubmitBtn"
                                    type="submit"
                                    value="Valider"
                                />
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </>
        );
    }

}


export default Inscription;