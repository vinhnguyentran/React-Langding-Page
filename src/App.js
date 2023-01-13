import React from "react";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";
import ScanerCamera from "./screens/ScanerCamera.jsx";

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="https://codepen.io/shshaw/pen/QmZYMG.js"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      {/* <ScanerCamera /> */}
      <Landing />
    </>
  );
}

