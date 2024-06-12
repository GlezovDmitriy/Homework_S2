import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'
import {keyboard} from "@testing-library/user-event/dist/keyboard";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {log} from "util";
import user from "../hw08/User";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any++
    addUserCallback: (name: string)=> void // need to fix any++
}

export const pureAddUser = (name: string,
                            setError: (error:string)=>void,
                            setName:  (name: string)=>void,
                            addUserCallback: (name: string)=>void) => {

    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут++
    if( name.trim() === ''){setError("Ошибка! Введите имя!")}
    else { addUserCallback(name.trim())
        setName('')
    }
}

export const pureOnBlur = (name: string, setError: (error:string)=>void) => {
    if ( name.trim() === ''){
        setError( "Ошибка! Введите имя!")
    }
    // если имя пустое - показать ошибку++
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: ()=>void) => {
    e.key === 'Enter' && addUser()
    // если нажата кнопка Enter - добавить++
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any++
    const [error, setError] = useState<string>('') // need to fix any++

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any++
        setName(e.currentTarget.value)
        // need to fix++
        error && setError('')


    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    let totalUsers = users.length // need to fix++
    let lastUserName
        if(totalUsers !== 0 ){
            lastUserName = users[totalUsers-1].name // need to fix++
        }


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
