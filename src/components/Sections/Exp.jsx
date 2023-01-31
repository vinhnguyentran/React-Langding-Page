import React from "react";
import styled from "styled-components";
// Components
// import ExpBox from "../Elements/ExpBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";
import ExpBox from "../Elements/ExpBox";

export default function Exp() {
  return (
    <Wrapper id="exp">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Exp</h1>
            {/* <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p> */}
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ExpBox
                title="HTActive"
                logo="https://media.licdn.com/dms/image/C560BAQErS3vPxR8DmQ/company-logo_200_200/0/1539920598890?e=2147483647&v=beta&t=yShiI8t4crB_CNz1ZP6gndhCf1rc7YqVWt8TRhLCPGw"
                from=""
                to=""
                jobTilte="Intern Front-end Engineer"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ExpBox
                title="EG-Tech"
                logo="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                from=""
                to=""
                jobTilte="Full-stack Developer"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ExpBox
                title=""
                logo=""
                from=""
                to=""
                jobTilte=""
                action={() => alert("clicked")}
              />
            </div>
          </div> 
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ExpBox
                title="Halana"
                logo="https://cdn-image.halana.vn/news/images/content/2022-03-23/1648006638576-thiet-ke-chua-co-ten-1.png"
                from="April, 2021"
                to="October, 2021"
                jobTilte="Front-end Engineer"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ExpBox
                title="Topica"
                logo="https://topica.edu.vn/static/images/Topica_logo-800904686076717142f9f85013484d52.png"
                from="March, 2022"
                to="July, 2022"
                jobTilte="Front-end Engineer"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ExpBox
                title="HDBank"
                logo="https://inkythuatso.com/uploads/images/2021/12/logo-hdbank-inkythuatso-06-18-08-16.jpg"
                from="July, 2022"
                to="Now"
                jobTilte="Full-stack Developer"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          
          {/* <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;