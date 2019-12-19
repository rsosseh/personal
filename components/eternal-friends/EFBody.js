import React from 'react';
import EFMemberPage from './EFMemberPage';
import firebase from 'firebase';
import './EFBody.css';

class EFBody extends React.Component{
    state = {
        you: false
    }
    addUser = () => {
        const { users } = this.props;
        firebase.database().ref(`users/user${Object.keys(users).length + 1}`).set(false);
    }

    renderIntro = () => {
        const { users } = this.props;
        const user_options = Object.keys(users).sort((a, b) => parseInt(a.split('r')[1]) - parseInt(b.split('r')[1])).map((user) => {
            return(
                <div className="efbody__user-option" 
                    onClick={() => {this.setState({you: user})}}
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
                        onClick={this.addUser}
                    >
                        None
                    </div>
                </div>
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