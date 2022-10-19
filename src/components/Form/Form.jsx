import React, { useState } from "react";

import logo from "../../assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";

import "./Form.css";
import { Map } from "../Map/Map";

export function Form() {
  const [address, setAddress] = useState("");
  const [addressProp, setAddressProp] = useState("Tokyo");

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
        <a href="home.persisinternet.com.br" target="_blank">
          <img src={logo} alt="Logo da Persis" />
        </a>
      </header>
      <div className="form">
        <p>Descubra qual o melhor período para seu agendamento!</p>
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
          será pegado a localização mais próxima
        </p>
      </div>
      <div className="result">
        <Map address={addressProp} />
      </div>
      <div className="tecnics">
        <div className="tec1">
          <h3>Técnico 1</h3>
          <p id="soon">Manhã</p>
          <p id="late">Tarde</p>
        </div>
        <div className="tec2">
          <h3>Técnico 2</h3>
          <p id="soon">Manhã</p>
          <p id="late">Tarde</p>
        </div>
        <div className="others1">
          <h3>2 Horários</h3>
          <p id="cambe">Cambé</p>
          <p id="uniao">União</p>
          <p id="uniao">Jataizinho</p>
        </div>
        <div className="others2">
          <h3>Fim de Tarde</h3>
          <p id="ibipora">Ibiporã</p>
        </div>
      </div>
    </div>
  );
}
