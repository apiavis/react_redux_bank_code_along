import React, { PureComponent } from "react";
import { Container, Row, Col } from "reactstrap";
import BankDisplay from "../components/BankDisplay";
import CustomTellerForm from "../components/CustomTellerForm";
import QuickTeller from "../components/QuickTeller";
import BehindTheScenesFeed from "../components/BehindTheScenesFeed";

class Bank extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <BankDisplay />
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <Row>
              <Col xs="12">
                <CustomTellerForm />
              </Col>
              <Col xs="12">
                <QuickTeller />
              </Col>
            </Row>
          </Col>
          <Col xs="6">
            <BehindTheScenesFeed />
          </Col>
        </Row>
      </Container>
    );
  }
}

//The Bank component does not need information from the redux store and it does not need to dispatch any actions therefor it has not been connected to the redux store
export default Bank;
