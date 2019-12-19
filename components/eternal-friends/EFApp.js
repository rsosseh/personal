import React from 'react';
import * as firebase from 'firebase';
import EFBody from './EFBody';

class EFApp extends React.Component{
    state = {
        users: []
    }
    componentDidMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyAU1m7XDbZd_tOOubepJ2zGYrO_A6oSsIQ",
            authDomain: "eternal-friends.firebaseapp.com",
            databaseURL: "https://eternal-friends.firebaseio.com",
            projectId: "eternal-friends",
            storageBucket: "eternal-friends.appspot.com",
            messagingSenderId: "158962993199",
            appId: "1:158962993199:web:a9383fe33c2658d5cd1eda",
            measurementId: "G-2FDXZ4KJBM"
        };
        firebase.initializeApp(firebaseConfig);
        firebase.database().ref().on('value', (snap) => {
            this.setState({users: snap.val().users})
        })
    }
    render(){
        return(
            <EFBody users={this.state.users} />
        )
    }
}

export default EFApp;