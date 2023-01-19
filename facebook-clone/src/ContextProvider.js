// import React, {useState, useContext, createContext} from 'react'

// const StateContext = createContext()

// export const ContextProvider = ({children}) => {
//     const [username, setUsername] = useState('')

//     return (
//         <StateContext.Provider
//             value={{
//                 username, setUsername
//             }}
//         >
//             {children}
//         </StateContext.Provider>
//     )
// }

// export const useStateContext = () => useContext(StateContext)



import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    const [username, setUsername] = useState('');
    const [photo, setPhoto] = useState('');

    return (
        <Context.Provider value={{ username, setUsername, photo, setPhoto}}>
            {children}
        </Context.Provider>
    );
};