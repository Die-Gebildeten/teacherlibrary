import React from "react";
import DownloadIcon from "../assets/icons/downloadicon.svg";
import styled from "@emotion/styled";

function DownloadLink(link) {
  return (
    <Link href={link} target="_blank">
      <img
        src={DownloadIcon}
        alt="Download Button"
      />
    </Link>
  );
}

export default DownloadLink;

const Link = styled.a`
  width: 40px;
  height: 40px;
  padding: 4px;
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;
  background-color: white;

  &:hover {
    background-color: lightgray;
  }
`;
