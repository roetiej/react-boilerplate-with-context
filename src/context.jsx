import React from 'react';

export const defaultState = {

};

const AppStateContext = React.createContext(null);
const AppDispatchContext = React.createContext(null);

export const useAppState = () => {
    const context = React.useContext(AppStateContext);

    if (context === undefined) {
        throw new Error(
            "useAppState must be used within an AppProvider"
        );
    }

    return context;
};

export const useAppDispatch = () => {
    const context = React.useContext(AppDispatchContext);

    if (context === undefined) {
        throw new Error(
            "useAppDispatch must be used within an AppProvider"
        );
    }

    return context;
};

export const useApp = () => {
    return [useAppState(), useAppDispatch()];
};

export const AppReducer = (action, state) => {
    return state;
}

export const AppProvider = ({
    children,
    initialState = defaultState,
}) => {
    const [state, dispatch] = React.useReducer(AppReducer, initialState);

    return (
        <AppStateContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
                {children}
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
    )
}