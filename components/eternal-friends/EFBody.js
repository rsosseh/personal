import React from 'react';
import EFMemberPage from './EFMemberPage';
import firebase from 'firebase';
import './EFBody.css';

class EFBody extends React.Component{
    state = {
        you: false,
        existing_user: undefined
    }
    componentDidUpdate(){
        const { existing_user } = this.state;
        if(existing_user){
            document.getElementById('efbody__name-input').value = existing_user;
        }
    }
    handleUser = () => {
        const { users } = this.props;
        const { existing_user } = this.state;
        const user = document.getElementById('efbody__name-input').value;
        const pass = document.getElementById('efbody__password-input').value
        if(user !== "" && pass !== ""){
            if(!existing_user){
                firebase.database().ref(`users/${user}/password`).set(pass);
                this.setState({you: user})
            } else {
                if(users[user]){
                    if(users[user].password == pass){
                        this.setState({you: user})
                    } else{
                        document.querySelector('.efbody__error-space').innerHTML = "wrong password";
                    }
                } else {
                    document.querySelector('.efbody__error-space').innerHTML = "wrong user";
                }
            }
        } else {
            console.log('wrong user/pass')
        }
    }

    renderNameInput = () => {
        const { existing_user } = this.state;
        return(
            <div className="efbody__user-input-container">
                <input id="efbody__name-input" className="efbody__input"
                    placeholder="what's your name?" />
                <input id="efbody__password-input" className="efbody__input"
                    placeholder="a word only you'd know" />
                <div className="efbody__submit"
                    onClick={this.handleUser}>Enter</div>
            </div>
        )
    }
    renderIntro = () => {
        const { users } = this.props;
        const { you, existing_user } = this.state;
        const user_options = Object.keys(users).map((user) => {
            return(
                <div className="efbody__user-option" 
                    onClick={() => {this.setState({existing_user: user})}}
                    key={user}
                >
                    {user}
                </div>
            )
        })

        return(
            <div className="efbody__intro">
                <div className="efbody__intro-text">Who are you ?</div>
                <div className="efbody__user-cont">
                    {user_options}
                    <div className="efbody__none efbody__user-option"
                        onClick={() => {this.setState({existing_user: false})}}
                    >
                        None
                    </div>
                </div>
                {(!you && existing_user !== undefined) && this.renderNameInput()}
                <div className="efbody__error-space"></div>
            </div>
        )
    }
    render(){
        const { you } = this.state;
        const { users } = this.props;

        return(
            <div className="efbody">
                {!you && this.renderIntro()}
                {you &&  <EFMemberPage you={you} users={users}/>}
            </div>
        )
    }
}

export default EFBody;