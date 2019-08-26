import React, { PureComponent } from "react";
import { Jumbotron, Button, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { robTheBank } from "../redux/actions/walletActions"; //imported action creator for the walletReducer
import { fine } from "../redux/actions/bankActions"; //imported action creator for the bankAccountReducer

class BankDisplay extends PureComponent {
  //We created this handleStealClick function together! It "rolls a die" to generate a random number
  //if that number is >= 20 * 0.7 we dispatch a robTheBank action.  This will update our wallet with the $$$ we got from the bank
  //that amount is stored on the bounty variable.  
  //Notice we randomly generate the bounty here in our component and pass it as an argument to our action creator to attach to the payload it's not created in our reducer
  //reducers should be pure functions that return predictable results.


  render() {
    return (
      <Jumbotron>
        <h1 className="display-3">Redux Bank!</h1>
        <p className="lead">
          This is a "simple" redux example to go along with the popular redux
          bank analogy.
        </p>
        <hr className="my-2" />
        <Row>
          <Col xs="4">

          </Col>
          <Col className="padder" xs="4">
            <p className="lead">Bank Account: $ {this.props.bankAccount}</p>
            <p className="lead">Wallet: $ {this.props.wallet}</p>
          </Col>
          <Col className="padder" xs="4">

          </Col>
        </Row>
      </Jumbotron>
    );
  };
};

//mapStateToProbs will do the following once passed to connect
//take the state of the bankAccountReducer reducer and stick it on a prop called bankAccount
//take the state of the walletReducer reducer and stick it on a prop called bankAccount
//after mapStateToProps is passed to connect we can access our bankAccountReducer state likeso this.props.bankAccount
//after mapStateToProps is passed to connect we can access our walletReducer state likeso this.props.wallet
const mapStateToProps = state => ({
  bankAccount: state.bankAccountReducerState,
  wallet: state.walletReducerState
});

//don't let the concise es6 syntax fool you below is what the object mapDispatchToProps looks like
// {
//  robTheBank: robTheBank,
//  fine: fine
// }
//import your action creators and list the ones your using within the mapDispatchToProbs object in order to dispatch them
//remember dispatch is how we will trigger our reducers than based off the type property returned from our action creator each
//reducer will update or not


export default connect(
  mapStateToProps
)(BankDisplay);

//Here
// export default connect(null,mapDispatchToProps)(BankDisplay)
