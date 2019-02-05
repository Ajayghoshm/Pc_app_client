import {ADD_POST} from '../actions/PostRegister'

function RegisterReducer(state=[],action){
{
switch(action.type){
    case ADD_POST:
    return [...state,action.payload._sucess]
    default:
    return state
}
}
} 
export default RegisterReducer