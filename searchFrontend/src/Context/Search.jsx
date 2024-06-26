import React from 'react'
import { useState,useContext,createContext } from 'react'
const SearchContext = createContext();

const SearchProvider = ({children}) => {
    const [search,setSearch] = useState({
        searchKeyword:'',
        results:[]
    })
  return (
    <SearchContext.Provider value={[search,setSearch]}>
        {children}
    </SearchContext.Provider>
  )
}

const useSearch = ()=>{ return useContext(SearchContext)}

export {useSearch,SearchProvider}