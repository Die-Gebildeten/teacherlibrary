import React from "react";
import DownloadIcon from "../assets/icons/downloadicon.svg";
import styled from "@emotion/styled";

function DownloadButton(props) {
  return (
    <Button>
      <img src={DownloadIcon} alt="Download Button" />
    </Button>
  );
}

export default DownloadButton;

const Button = styled.button`
  width: 40px;
  height: 40px;
  padding: 4px;
  border: 1px solid black;
  border-radius: 50%;
`;
