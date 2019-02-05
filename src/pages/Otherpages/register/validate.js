import React from 'react'


const validate=values=>{

  const errors={}
  if(!values.Firstname){
    errors.Firstname="Required"
  }
  if(!values.Lastname){
    errors.Lastname="Required"
  }
  if(!values.Email){
    errors.Email="Required"
  }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)){
      errors.Email="Enter a Valid email address"
  }
  if(!values.Email2){
    errors.Email2="Required"
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email2)){
    errors.Email2="Enter a Valid email address"
}
  if(!values.Phone){
    errors.Phone="Required"
  }
  else if(values.Phone.length<10){
    errors.Phone="Enter a valid Phone number"
  }
  if(!values.Phone2){
    errors.Phone2="Required"
  }
  else if(values.Phone2.length<10){
    errors.Phone2="Enter a valid Phone number"
  }
  if(!values.Dob){
    errors.Dob="Required"
  }
  if(!values.Ktu){
    errors.Ktu="Required"
  }
  if(!values.Adno){
    errors.Adno="Required"
  }
  if(!values.Roll){
    errors.Roll="Required"
  }

  return errors
}

export default validate
