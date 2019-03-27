import {Actions} from '../action_types'
import axios from 'axios'

const url='http://locahost:4000'

export const createpost =(registerstorevalues)=>{
    return(dispatch)=>{
        return axios.post(`${url}/register/add`,registerstorevalues)
        .then(response=>{
            dispatch(createpostSuccess(response.data))
        })
        .catch(error=>{
            throw(error)
        })
    }
}

export const createPostSuccess =  (data) => {
    return {
      type: Actions.ADD_POST,
      payload: {
        _id:data._id,
        _sucess:true
      }
    }
  };