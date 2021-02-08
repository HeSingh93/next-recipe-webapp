import React from 'react';
import {useState } from 'react';
import AppContext from './ContextIndex';

   const ContextProvider = ({ children }) => {
   const [query, setQuery] = useState('');
   const [results, setResult] = useState('');
   let [recipes, setRecipes] = useState([]);
   let [searchData, setSearchData] = useState([]);

   const context = {
     query, setQuery,results, setResult,searchData,setSearchData, recipes, setRecipes
   };
   return (
       <AppContext.Provider value={context}>
         {children}
       </AppContext.Provider>
   );
 };
export default ContextProvider;