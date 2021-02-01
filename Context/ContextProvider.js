import React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import AppContext from './ContextIndex';

   const ContextProvider = ({ children }) => {

   const [query, setQuery] = useState('');
   const [results, setResult] = useState({});
   /*const [message, setMessage] = useState('');*/

   const context = {
     query, setQuery,results, setResult,
   };

   return (
       <AppContext.Provider value={context}>
         {children}
       </AppContext.Provider>
   );
 };

export default ContextProvider;