import React, { useState } from 'react'
import Header from './Header';
import { useSearch } from '../Context/Search';
import styled from 'styled-components';

const SearchPage = () => {
  const [values, setValues] = useSearch();
  return (
    <Container>
      <Header />
      <div className='searched-items'>
        <div className='products-header'>
          <th>
            <td>Product Name</td>
            <td>Product Description</td>
            <td>Product Price</td>
          </th>
        </div>
        {
          values?.results?.map((pro, index) => {
            return (
              <div className='searched-item' key={index}>
                <p>{pro.name}</p>
                <p>{pro.description}</p>
                <p>{pro.price}</p>
              </div>
            )
          })
        }
      </div>
    </Container>
  )
}

const Container = styled.div`
height:100vh;
overflow-X:scroll;
display:flex;
flex-direction:column;
align-items:center;
.searched-items {
margin-top:20px;
width:70vw;
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:center;
gap:20px;
.products-header {
border:1px solid red;
width:100%;
overflow-X:hidden;
border-radius:10px;
th {
width:100%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-around;
padding:10px;
background-color:#eb7e10;
td{
font-size:1.75rem;
font-weight:1000;
color:white;
}
}
}
.searched-item {
width:100%;
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
border:2px solid green;
background-color:purple;
border-radius:12px;
p{
font-size:1.5rem;
font-weight:900;
color:white;
}
}
.searched-item:hover {
background-color:rgb(93,189,201);
box-shadow: 0 4px 8px 0 rgba(0, 200, 0, 0.2), 0 6px 20px 0 rgba(0, 200, 0, 0.19)
}
}
`

export default SearchPage
