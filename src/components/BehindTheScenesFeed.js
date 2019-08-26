import React, { PureComponent } from "react";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";

//This component's ONLY purpose is to display dispatched actions it does not really tie into
//our redux bank analogy but it does an excellent job giving you feedback as you interact
//with the app and dispatch actions
class BehindTheScenesFeed extends PureComponent {
  render() {
    //below I am mapping over the array typeAndPayloadHistory (it holds an array of all actions that have been dispatched)
    const payloadPTags = this.props.typeAndPayloadHistory.map(
      (element, index) => {
        return (
          <p key={index}>
            Type: {element.type} Payload: {element.payload}
          </p>
        );
      }
    );
    return (
      <Row className="borderDivider">
        <Col xs="12">
          <p>Each action that gets dispatched will appear below</p>
          {payloadPTags}
        </Col>
      </Row>
    );
  }
}

//here we take our state from the displayDispatchAndStateReducer and stick it on a prop that we defined as typeAndPayloadHistory
//to reference this value within this class based component see below
//this.props.typeAndPayloadHistory
const mapStateToProps = state => ({
  typeAndPayloadHistory: state.displayDispatchAndStateReducer
});

//not every component will dispatch actions if the mapDispatchToProps argument is not provided connect will pass dispatch() as a prop look below to see how to reference it
//this.props.dispatch(yourActionCreator(payload))
export default connect(mapStateToProps)(BehindTheScenesFeed);
