import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

type Data = {
  token: string
}

interface Props {
  data: Data | null

  setData: React.Dispatch<React.SetStateAction<Data | null>>;
}

export const DataContext =  createContext<Props>({} as Props);

const DataProvider: React.FC = ({children}) => { 
  
  const [ data, setData ] = useLocalStorage<Data | null>('MozEconomia');

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  ) 
}

export default DataProvider;