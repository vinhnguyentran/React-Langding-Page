import React from "react";
import styled from "styled-components";

export default function ExpBox({ title, logo, action, from, to, jobTilte }) {
  return (
    <WrapperBtn className="animate pointer" onClick={action ? () => action() : null}>
      <Wrapper className="whiteBg radius8 shadow">
        <h3 className="font20 extraBold">{title}</h3>
        <Logo src={logo}/>
        <div style={{ padding: "30px 0" }}>
          <Date><h3>From:</h3><p>{from}</p></Date>
          <Date><h3>To:</h3><p>{to}</p></Date>
        </div>
        <Job>{jobTilte}</Job>
      </Wrapper>
    </WrapperBtn>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
const WrapperBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 70px;
  margin-top: 24px;
`

const Date = styled.div`
  display: flex;
`

const Job = styled.div`
  padding: 4px;
  background: gray;
  width: max-content;
  border-radius: 8px;
`