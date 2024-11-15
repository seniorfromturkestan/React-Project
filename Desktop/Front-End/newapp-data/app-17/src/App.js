import React from "react";
import Wrapper from "./components/wrapper";
import Header from "./components/header";
import MainSection from "./components/main-section/main-section";


function App() {
  return (
    <div>
      <Wrapper>
        <Header/>
        <MainSection/>
      </Wrapper>
    </div>
  );
}

export default App;
