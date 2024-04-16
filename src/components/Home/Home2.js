import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/eu3.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              VOU FALAR <span className="purple"> SOBRE MIM, </span> AGORA!
            </h1>
            <p className="home-about-body">
              Trabalho com programação ha um bom tempo, com desenvolvimento
              FrontEnd. E há 2 anos venho estudando sobre DADOS no geral. 
              <br />
              <br />Tenho muita habilidade com
              <i>
                <b className="purple"> Python, Javascript e SQL. </b>
              </i>
              <br />
              <br />
              Minha aréa de interesse hoje é &nbsp;
              <i>
                <b className="purple">Contruir aplicações WEB e PIPELINES </b>
                complementando meu estudo com a parte prática{" "}
                <b className="purple">
                  de DADOS.
                </b>
              </i>
              <br />
              <br />
              Sempre que possível aplico também minha paixão pelo desenvolvimento de produtos com <b className="purple">Python</b> e
              <i>
                <b className="purple">
                  {" "}
                  Biblioteca e estruturas Javascript modernas
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js e Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>QUER SE CONECTAR ?</h1>
            <p>
              É só clicar e <span className="purple">conectar-se </span>comigo.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/DiksonRodrigues"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dikson-rodrigues-562b351a3/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
