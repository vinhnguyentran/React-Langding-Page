import React from "react";
import styled from "styled-components";
import styles from "./AboutMe.css"
// Assets

export default function AboutMe() {
  return (
    <Wrapper id="about">
      <div className="drakBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">About Me</h1>
            <div className="row r-info"><h3>Name:</h3><p>Nguyen Tran Vinh</p></div>
            <div className="row r-info"><h3>DOB:</h3><p>03/01/1999</p></div>
            <div className="row r-info"><h3>Gender:</h3><p>Male</p></div>
            <div className="row r-info"><h3>Hieght:</h3><p>1m80</p></div>
            <div className="row r-info"><h3>Weight:</h3><p>76 kg</p></div>
            <div className="row r-info"><h3>Country:</h3><p>Vietnam</p></div>
            <div className="row r-info"><h3>More:</h3></div>
            <p className="font16">
              I'm from Da Nang City and now I have lived and worked in Ho Chi Minh city for 2 years.
              My hobbies is: listen to music, sing, game, travel arow the world
              My personality is a bit unusual, usually quiet like an introvert but sometimes strangely lively.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
  









