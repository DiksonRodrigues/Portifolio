import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Fala turma, eu sou <span className="purple"> Dikson Rodrigues </span>
            de <span className="purple"> Fortaleza, Ceará.</span>
            <br />
            Atuo hoje como desenvolvedor frontEnd na Seventh LTDA
            <br />
            Sou formado em ciência da computação pela UNIFOR.
            <br />
            <br />
            Além do código e tratamento de dados, tem outras atividades que gosto de fazer.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar Volei
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
            <li className="about-activity">
              <ImPointRight /> Pescar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "O plantio é opcional, mais a colheita é obrigatória"{" "}
          </p>
          <footer className="blockquote-footer">DiksonR.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
