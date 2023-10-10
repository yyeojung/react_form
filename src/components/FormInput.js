import React from 'react'
import Button from './Button';

function FormInput(props) {
    
    const submitHandler = (e) => {
        e.preventDefault();
    }
  return (
    <div className="user_form">
        <form onSubmit={submitHandler}>
            <div className="input_wrap">
                <label htmlFor="username">{props.name}</label>
                <input 
                    type="text" 
                    id='username'
                    placeholder={props.name}
                    value={props.userName}
                    name='userName'
                    onChange={props.onChange}
                />
            </div>
            <div className="input_wrap martop_10">
                <label htmlFor="age">{props.age}</label>
                <input 
                    type="number" 
                    id='age'
                    placeholder={props.age}
                    value={props.userAge}
                    name='userAge'
                    onChange={props.onChange}
                    />
            </div>
            <Button
                btnColor='blue'
                margin='martop_10'
                onClick={props.onClick}
            >확인</Button>
        </form>
    </div>
  )
}

export default FormInput