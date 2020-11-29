import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import styled from "@emotion/styled";

function AddLessonCard({link}) {

    const StyledCard = styled(Card)`
    background-color: black;
    
    
    h2{
position: absolute;
font-size: 2.5rem;
text-align: center;
top: 50px;
color: white;
padding: 1rem;
    }`

    return (
        <>
        <Link to = {link}>
     <StyledCard>
<h2>Click here to add your own lesson</h2>
     </StyledCard>
     </Link>
     </>
    );
}

export default AddLessonCard;