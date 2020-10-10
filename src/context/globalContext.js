import React, { createContext, useReducer, useContext } from 'react';

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

const handlers = {
    [`TOGGLE_THEME`]: (state, {payload}) => ({...state, currentTheme: payload}),
    DEFAULT: state => state
};

const GlobalReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
};

const initialState = {
    currentTheme: window.localStorage.getItem('theme') === null ? 'light' : window.localStorage.getItem('theme'),
};

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    return (
        <GlobalDispatchContext.Provider value={dispatch}>
            <GlobalStateContext.Provider value={state}>
                {children}
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    );
}

export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);

// paste into component with toggle theme

// const { currentTheme } = useGlobalStateContext();
//     const dispatch = useGlobalDispatchContext();

//     const toggleTheme = () => {
//         if (currentTheme === 'dark') {
//             dispatch({type: 'TOGGLE_THEME', payload: 'light'})
//         } else {
//             dispatch({type: 'TOGGLE_THEME', payload: 'dark'})
//         }
//     }

//     useEffect(() => {
//         window.localStorage.setItem('theme', currentTheme);
//     },[currentTheme])
