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
    addFriend = (friend) => {
        const { you, users } = this.props;
        if(!users[you][friend]){
            firebase.database().ref(`users/${friend}/${you}`).set("pending");
            firebase.database().ref(`users/${you}/${friend}`).set("sent");
        }
    }
    renderModal = () => {
        const { you, users } = this.props;
        const available_friends_list = Object.keys(users).filter(user => {
            if(users[you][user] == true || users[you][user] == 'sent' ){
                return false;
            }
            if(user === you){
                return false;
            }
            return true;
        })
        const available_friends = available_friends_list.map((friend) => {
            return(
                <div className="ef-member__available-friend"
                    onClick={() => {this.addFriend(friend)}}
                    key={`av-${friend}`}
                >
                    {friend}
                </div>
            )
        })
        return(
            <div className="ef-member__modal">
                <div className="ef-member__available-friends">
                    {available_friends}
                </div>
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
        pending_list = Object.keys(users[you]).map((friend) => {
            if(users[you][friend] === "pending"){
                return friend
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