import React, { useState } from "react";
import Modal from "./Modal";
import "./modal.css";

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }
  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <button className="button" onClick={handleToggleModalPopup}>Open Modal Popup</button>
      </div>
      {showModalPopup && (
        <Modal
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
          body={<div>Customized body</div>}
        />
      )}
    </div>
  );
};

export default ModalTest;
