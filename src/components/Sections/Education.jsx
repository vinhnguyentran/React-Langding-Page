import React, {} from "react";
import styled from "styled-components";
import styles from "./Education.css"
import LogoEdu from '../../assets/img/logoEducation.webp'
// import { useNavigate } from "react-router-dom";
// Assets

export default function Education() {
    // const route = useNavigate()
    const handleMore = () => {
        // console.log('log', route);
    }
    return (
        <Wrapper id="education">
            <div className="drakBg">
                <div className="container">
                    <HeaderInfo>
                        <h1 className="font40 extraBold">Education (Passerellse Numeriques Vietnam)</h1>
                        <Img className="radius8"
                            src={LogoEdu}
                            alt="office"
                            style={{ zIndex: 9 }} />
                        <p className="font16" style={{ textAlign: 'center' }}>
                            Before initiating the program, Passerelles numériques conducted a thorough study of the socio-economic status of Vietnam. 
                            <br />Demographic data revealed that the vast majority of the population in remote areas and the Central Highlands suffered from a stagnant economy and limited access to higher education.
                            <br /> With 55.5% of Vietnam’s population under 35 years old, we believe that today’s generation has the best chance to end poverty and serve as an engine for the global fight against inequality.
                            <br /> However, despite efforts to eradicate poverty in the country, over 50% of young adults aged 16 to 20 still lack education. 
                            <br />The main reason for under-education is financial difficulties.

                            <br/>In today’s age of the fourth industrial revolution, there is a great opportunity that IT education as one of the solutions to reduce poverty.
                            <br /> IT graduates have higher chances of securing long-term and decent-paying jobs compared to other specializations.
                            <br /> Da Nang seemed to be a promising hub for IT development, with strong support and incentives granted by the government.
                            <br />Therefore, it was an ideal place for our students to find job opportunities after graduating.
                        </p>
                        <a href="https://www.passerellesnumeriques.org/vi/cac-trung-tam/vietnam/"><BtnMore>More</BtnMore></a>
                    </HeaderInfo>
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

const Img = styled.img`
  display: flex;
  margin: auto;
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;

const BtnMore = styled.button`
  display: flex;
  margin: auto;
  padding: 1vh 2vh;
  border-style: none;
  border-radius: 10px;
  :hover{
    background-color: #7620FF;
  }
`








