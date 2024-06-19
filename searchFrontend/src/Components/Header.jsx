import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../Context/Search.jsx'
import axios from 'axios';
import styled from 'styled-components'

const Header = () => {
    const [values, setValues] = useSearch();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await axios.get(`https://searchassignment1.onrender.com/api/v1/searchAssignment/search/${values.searchKeyword}`);
        console.log(data)
        setValues({ ...values, results: data?.products });
        console.log(values.results)
        navigate('/search');
    }
    return (
        <Container>
            <div className='header'>
                <h2>Search Assignment</h2>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input placeholder='Search here' type='text' onChange={(e) => { setValues({ ...values, searchKeyword: e.target.value }) }} />
                        <button type='submit'>Search</button>
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
