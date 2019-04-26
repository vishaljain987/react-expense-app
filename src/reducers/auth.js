const authReducer = (state={}, action)=>{
    switch(action.type){
        case 'LOGIN':
            return {...state, uid: action.uid};
        case 'LOGOUT':
            return {...state, uid:null};
        default:
            return state;
    }
}
export default authReducer;