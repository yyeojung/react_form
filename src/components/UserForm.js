import React, { useState } from 'react'
import UserList from './UserList';
import Alert from './Alert'
import BackLayer from './BackLayer';
import FormInput from './FormInput';

function UserForm() {
    const initialInput = {
        userName: "",
        userAge: ""
        //상태 초기값을 ""로 설정 중복되서 따로 뻄
    }
    const [inputs, setInputs] = useState(initialInput); //input 
    const [addList, setAddList] = useState([]); //리스트 추가
    const [appear, setAppear] = useState(false); //리스트 초기에 안보임
    const [alert, setAlert] = useState(false); //빈칸 경고창 띄우기
    const [ageAlert, setAgeAlert] = useState(false); //나이 경고창 띄우기
    const [backLayer, setBackLayer] = useState(false); //팝업 배경

    const { userName, userAge } = inputs;
    // userName, userAge를 input에 할당

    const displayText = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
        //각 input의 value값을 받음
    }
    const addUser = () => {
        if(userName.trim().length === 0 || userAge === ""){
            setAlert(true) //경고창 출력
            setBackLayer(true)
        }else if(userAge < 0) {
            setAgeAlert(true)
            setBackLayer(true)
        } else {
            const newUser = {
                userName,
                userAge
            }
            setAddList([...addList, newUser]); //list 추가
            setAppear(true) //list 버튼 클릭하면 보이게
            setInputs(initialInput); //reset
        }   
    }
    const alertClose = () => {
        setAlert(false)
        setAgeAlert(false)
        setBackLayer(false)
    }
    return (
        <div className="form_wrap">
            {backLayer && <BackLayer onClick={alertClose}/>}
            <FormInput
                name={"이름"}
                age={"나이"}
                userName={userName}
                userAge={userAge}
                onChange={displayText}
                onClick={addUser}
            />
            {appear && <UserList
                userList={addList}
            />}
            {alert && <Alert 
                onClick={alertClose} 
                text={"칸이 비어있거나 유효하지 않은 문자가 들어있는지 확인해주세요."}
            />}
            {ageAlert && <Alert
                onClick={alertClose}
                text={"0보다 큰 숫자를 입력해주세요."}
            />}
        </div>
    )
}

export default UserForm