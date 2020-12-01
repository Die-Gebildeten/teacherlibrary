import React from "react";
import DeleteIcon from "../assets/icons/deleteicon.svg";
import styled from "@emotion/styled";

const Button = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;
`;

function DeleteButton({ handleClick }) {
  return (
    <Button onClick={handleClick}>
      <img
        src={DeleteIcon}
        alt="Delete Button"
      />
    </Button>
  );
}

export default DeleteButton;
