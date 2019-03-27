import {Actions} from '../action_types'

function RegisterReducer(state=[],action){
{
switch(action.type){
    case Actions.ADD_POST:
    return [...state,action.payload._sucess]
    default:
    return state
}
}
} 
export default RegisterReducer