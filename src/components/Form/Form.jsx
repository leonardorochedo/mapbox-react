import React, { useState } from "react";
import logo from "../../assets/logo.png";

import { AiOutlineSearch } from "react-icons/ai";

import "./Form.css";
import { Map } from "../Map/Map";

export function Form() {
  const [address, setAddress] = useState("");
  const [addressProp, setAddressProp] = useState("Londrina");

  function consultAPI() {
    // Quando der enter vai passar o enderço como prop
    setAddressProp(address);
  }

  function keyPress(e) {
    if (e.key == "Enter") {
      consultAPI();
    }
  }

  return (
    <div className="container">
      <header>
        <img src={logo} alt="Logo da Persis" />
      </header>
      <div className="form">
        <div className="form-actions">
          <input
            type="text"
            placeholder="Digite o endereço"
            onChange={(e) => setAddress(e.target.value)}
            onKeyUp={(e) => keyPress(e)}
          />
          <button onClick={consultAPI}>
            <AiOutlineSearch size={20} />
          </button>
        </div>
        <p className="warning">
          caso não coloque o endereço precisamente
          <br />
          será pego a localização mais próxima
        </p>
      </div>
      <div className="map-table">
        <Map address={addressProp} />
      </div>
    </div>
  );
}
