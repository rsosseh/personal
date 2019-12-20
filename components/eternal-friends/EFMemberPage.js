import React from 'react';
import './EFMemberPage.css';
import firebase from 'firebase';

class EFMemberPage extends React.Component{
    state = {
        modal_open: false
    }
    removeFriend = (friend) => {
        const { you } = this.props;
        firebase.database().ref(`users/${you}/${friend}`).set(false);
        firebase.database().ref(`users/${friend}/${you}`).set(false);
    }
    handlePending = (friend, accept) => {
        const { you } = this.props;
        if(accept){
            firebase.database().ref(`users/${you}/${friend}`).set(true)
            firebase.database().ref(`users/${friend}/${you}`).set(true)
        }
        else {
            firebase.database().ref(`users/${you}/${friend}`).set(false)
            firebase.database().ref(`users/${friend}/${you}`).set(false)
        }
    }
    addFriend = () => {
        const { you, users } = this.props;
        const new_friend = document.getElementById('ef-member__new-friend').value
        if(users[new_friend] && !users[you][new_friend]){
            firebase.database().ref(`users/${new_friend}/${you}`).set("pending");
            firebase.database().ref(`users/${you}/${new_friend}`).set("sent");
            document.getElementById('ef-member__new-friend').value = "";
            document.querySelector('.efbody__error-space').innerHTML = ""
            this.setState({modal_open: false});
        } else {
            document.querySelector('.efbody__error-space').innerHTML = "user doesnt exist or you're already friends"
        }
    }
    renderModal = () => {
        return(
            <div className="ef-member__modal">
                <input id="ef-member__new-friend" 
                    className="efbody__input" 
                    placeholder="but who?"/>
                <div className="ef-member__send-invite"
                    onClick={this.addFriend}>Send Invite</div>
                <div className="efbody__error-space"></div>
            </div>
        )
    }
    renderFriendList = () => {
        const { you, users } = this.props;
        const friends = Object.keys(users[you]).map((friend) => {
            if(users[you][friend] === true){
                return(
                    <div className="ef-member__friend"
                        key={`fl${friend}`}>
                        <div className="ef-member__friend-container">
                            <div className="ef-member__friend-name">{friend}</div>
                            <div className="ef-member__friend-remove"
                                onClick={() => this.removeFriend(friend)}>Remove</div>
                        </div>
                    </div>
                )
            }
        })
        let pending_list = [];
        let sent_list = [];
        pending_list = Object.keys(users[you]).map((friend) => {
            if(users[you][friend] === "pending"){
                return friend
            } else if(users[you][friend] === "sent"){
                sent_list.push(friend)
            }
        })
        pending_list = pending_list.filter(i => {return i != undefined});
        const pending = pending_list.map((friend) => {
            return(
                <div className="ef-member__pending-container">
                    <div className="ef-member__pending-friend">{friend}</div>
                    <div className="ef-member__pending-option">
                        <div className="ef-member__pending-yes"
                            onClick={() => this.handlePending(friend, true)}
                        >
                            Yes
                        </div>
                        <div className="ef-member__pending-no"
                            onClick={() => this.handlePending(friend, false)}
                        >
                            No
                        </div>
                    </div>
                </div>
            )
        })
        const sent = sent_list.map((friend) => {
            return(
                <div className="ef-member__sent-container">{friend}</div>
            )
        })

        return(
            <div className="ef-member-_friend-list-container">
                <div className="ef-member__friend-list">
                    <div className="ef-member__friend-list-title">Friends:</div>
                    <div className="ef-member__friends">
                        {friends}
                    </div>
                </div>
                {
                    pending_list.length > 0 && (
                    <div className="ef-member__pending-list">
                        <div className="ef-member__friend-list-title">Pending:</div>
                        <div className="ef-member__pendings">
                            {pending}
                        </div>
                    </div>
                    )
                }
                {
                    sent_list.length > 0 && (
                    <div className="ef-member__sent-list">
                        <div className="ef-member__sent-list-title">Sent:</div>
                        <div className="ef-member__sents">
                            {sent}
                        </div>
                    </div>
                    )
                }
            </div>
        )
    }
    render(){
        const { modal_open } = this.state;

        return(
            <div className="ef-member">
                {this.renderFriendList()}
                <div className="ef-member__add-friend-button"
                    onClick={() => this.setState(
                    prevState => ({modal_open: !prevState.modal_open}))} 
                >
                    Add Friends?
                </div>
                {modal_open && this.renderModal()}
            </div>
        )
    }
}

export default EFMemberPage;