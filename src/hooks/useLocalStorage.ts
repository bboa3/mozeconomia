import React, { useState, useEffect } from 'react';

type returnType<T> = [
    T ,
    React.Dispatch<React.SetStateAction<T>>,
]

const useLocalStorage = <T,>(
    key: string, 
    inicialValue?: T
    ): returnType<T> => {
    const [ state, setState ] = useState<T>(
        () => {
            if(!inicialValue)
            return

            try {
                const value = localStorage.getItem(key);
                return value ? JSON.parse(value) : inicialValue
            } catch (err) {
                return inicialValue;
            }
        }
    )

    useEffect(() => {
        if(state) {
            try {
                localStorage.setItem(key, JSON.stringify(state));
            } catch (err) {
                console.log(err);
            }
        }
    }, [state, key]);

    return [state, setState];
}

export default useLocalStorage;