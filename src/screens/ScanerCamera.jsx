import React from "react";

import MyComponent from "react-paper-scanner";

import "react-paper-scanner/dist/index.css";

const ScanerCamera = () => {
  const datas = [
    {
      title: "Mặt trước",
      type: "Paper",
    },
    {
      title: "Mặt sau",
      type: "ID",
    },
  ];

  const onSave = (data) => {
    //Handle save data from component
  };

  const onClose = () => {
    //Handle close event from component
  };
  return (
    <div>
      <MyComponent
        data={datas}
        onSave={onSave}
        onClose={onClose}
        scale={10}
      />
    </div>
  );
};

export default ScanerCamera;

//   render() {
//     return <MyComponent data={datas} onSave={this.onSave} onClose={this.onClose} scale={1}/>
//   }
// }
