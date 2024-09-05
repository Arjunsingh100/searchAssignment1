import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../Context/Search.jsx'
import axios from 'axios';
import styled from 'styled-components'

const Header = () => {
    const [values, setValues] = useSearch();
    const [debounceSearchValue, setDebounceSearchValue] = useState();
    const navigate = useNavigate();

    //debounce function 
    useEffect(() => {
        const getData = setTimeout(() => {
            setDebounceSearchValue(values.searchKeyword)
        }, 500);
        //cleanup function to clera the timer
        return () => {
            clearTimeout(getData)
        }
    }, [values.searchKeyword])

    const handleSubmit = async () => {
        if (!debounceSearchValue) {
            return;
        }
        const { data } = await axios.get(`https://searchassignment1.onrender.com/api/v1/searchAssignment/search/${values.searchKeyword}`);
        console.log(data)
        setValues({ results: data?.products });
        console.log(values.results)
        navigate('/search');
    }
    //calling api using debounce
    useEffect(() => {
        if (debounceSearchValue) {
            try {
                handleSubmit();
            } catch (error) {
                console.log(error)
            }
        }
    }, [debounceSearchValue])

    return (
        <Container>
            <div className='header'>
                <h2>Search Assignment</h2>
                <div>
                    <form>
                        <input placeholder='Search here' type='text' onChange={(e) => { setValues({ ...values, searchKeyword: e.target.value }) }} />
                        <button disabled type='submit'>Search</button>
                    </form>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
.header {
h2{
color:white;
}
width:100vw;
height:80px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
gap:30px;
background-color:gray;
form {
input {
padding:10px;
border:none;
outline:none;
border-radius:10px;
}
button {
padding:10px;
color:white;
background-color:blue;
outline:none;
border:none;
border-radius:10px;
margin-left:15px;
}
}
}
`
export default Header
