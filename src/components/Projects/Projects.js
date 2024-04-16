import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import palpite from "../../Assets/Projects/palpite.png";
import sitelavie from "../../Assets/Projects/carro.jpg";
import ecoleta from "../../Assets/Projects/ecoleta.svg";
import agiliza from "../../Assets/Projects/agiliza.png";
import portaria from "../../Assets/Projects/portaria.png";
import escola from "../../Assets/Projects/escola2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus trabalhos <strong className="purple">Recentes </strong>
        </h1>
        <p style={{ color: "white" }}>
         Aqui estão alguns projetos em que trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agiliza}
              isBlog={false}
              title="Agiliza"
              description="Criei aqui um simples sistema de cadastro de fornecedores usando Python para desktop, Tkinter para fazer as interfaces gráficas e banco de dados SQLITE."
              ghLink="https://github.com/DiksonRodrigues/AGILIZA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={escola}
              isBlog={false}
              title="Escolas Online"
              description="Projeto criado durante a pandemia para fomentar uma necessidade que eram as aulas continuarem de forma online, projeto foi criado em Reactnative e outras bibliotecas.Na ocasião também integrei a API do YOUTUBE onde os professores subiam suas aulas e os alunos assistiam."
              ghLink="https://github.com/DiksonRodrigues/AppEscolas"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecoleta}
              isBlog={false}
              title="Ecoleta"
              description="Na oportunidade criei um sistema de coleta, onde os usuarios que usam o sistema de coleta seletiva de lixo poderiam saber quais os dias e horarios corretos de passagem do caminhão de coleta no seu bairro. Sistema WEB, Aplicativo para Android e IOS."
              ghLink="https://github.com/DiksonRodrigues/e-coleta"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portaria}
              isBlog={false}
              title="Portaria"
              description="Aplicativo criado para controlar entrada e saída de moradores em condominios e empresas."
              ghLink="https://github.com/DiksonRodrigues/PORTARIA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sitelavie}
              isBlog={false}
              title="Site para loja de carros"
              description="Foi criado um site para uma loja de carros utilizando a linguagem JS e o framework ReactJs."
              ghLink="https://github.com/DiksonRodrigues/site-lavie"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={palpite}
              isBlog={false}
              title="Palpite box"
              description="Aplicativo de formulario para pegar sugestões e criticas dos usuarios para diversos tipos de empreendimentos."
              ghLink="https://github.com/DiksonRodrigues/palpiteBox"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
