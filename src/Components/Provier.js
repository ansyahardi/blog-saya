import React, {createContext, useState} from 'react';
import data from '../data/dataDummy.json';

export const MyContext = createContext();

const Provider = (props) => {

  const [state, setState] = useState(data);

  return (
    <MyContext.Provider value={[state, setState]} kenapa={'oh kenapa'}>
      {props.children}
    </MyContext.Provider>
  )
}

export default Provider;