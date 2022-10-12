import React from "react";
import ModalComponent from "./components/material-popup-header/ModalComponent";

const App: React.FC = () => {
  return (
    <ModalComponent
      open={true}
      handleClose={() => {
        console.log("pressed");
      }}
      headerTitle="Hello World"
      // headerStyle={{
      //   header: { boxShadow: "0px 35px 30px -11px rgba(0,0,0,0.62)" },
      //   title: { fontSize: 20, color: "yellow" },
      // }}
      // leftIcon={<AdbIcon style={{ fontSize: 40, color: "green" }} />}
    >
      <h1>children in the house</h1>
      <h1>children in the house</h1>
      <h1>children in the house</h1>
      <h1>children in the house</h1>
      <h1>children in the house</h1>
    </ModalComponent>
  );
};

export default App;
