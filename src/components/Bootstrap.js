import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import Casas from './components/Casas.js';
import Departamentos from './components/Departamentos.js';
import Edificios from './components/Edificios.js';
import Townhouse from './components/Townhouse.js';

function Bootstrap() {
  return (
    <>
      <Row md={4} className="border p-2">
        <Col xs={1}>
          <Casas/>
        </Col>
        <Col xs={3}>
          <Departamentos/>
        </Col>
      </Row>
      <Row md={4} className="border p-2">
        <Col xs={2}>
          <Edificios/>
        </Col>
        <Col xs={2}>
          <Townhouse/>
        </Col>
      </Row>
    </>
  );
}

export default Bootstrap;