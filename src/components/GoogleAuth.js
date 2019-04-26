import React from 'react';
import {setLogin, setLogout} from '../actions/auth';
import {connect} from 'react-redux';
import {firebase, googleAuthProvider} from '../firebase/firebase'

class GoogleAuth extends React.Component{

    onLogin=()=>{
        firebase.auth().signInWithPopup(googleAuthProvider);
    }

    onLogout=()=>{
        firebase.auth().signOut();
    }

    onAuthChange=(user)=>{
        if(user){
            this.props.setLogin(user.uid);
        }else{
            this.props.setLogout();
        }
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(this.onAuthChange);
    }

    render(){
        const authButton = this.props.uid ? 
            <button onClick={this.onLogout}>Logout</button> : 
            <button onClick={this.onLogin}>Login</button>

        return(
            <div>
                {authButton}
            </div>
        )
        
    }
}

const mapStateToProps = state=>{
    return{
        uid: state.auth.uid
    }
}
export default connect(mapStateToProps,{setLogin, setLogout})(GoogleAuth);