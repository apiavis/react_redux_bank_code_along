import React, { PureComponent } from "react";
import {
  FormGroup,
  Form,
  CustomInput,
  Label,
  Input,
  Button,
  Row,
  Col
} from "reactstrap";
import { withdrawlFromBank, depositToBank } from "../redux/actions/bankActions"; //importing action creators
import { connect } from "react-redux";

class CustomTellerForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { amount: 0 }; //just because we have redux does not mean all state must live within it
    this.handleInputChange = this.handleInputChange.bind(this); //using bind to correct function context we could also use arrow functions when defining
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e) {
    //update state for amount written in custom input field
    this.setState({ amount: parseFloat(e.target.value) });
  }

  handleSubmit(e) {
    //If you have ever clicked on (...) when console.logging an event object
    //just to get a null value use e.persist() to see everything about the event for debugging.
    //uncomment two lines below to check it out
    //e.persist()
    //console.log(e)
    e.preventDefault();
    //if below is true withdrawl
    if (e.target.transactionType[0].checked) {
      this.props.bankAccount >= this.state.amount
        ? //dispatch action withdrawlFromBank that has been attached to props from mapDispatchToProps.
          //We used an object when defining mapDispatchToProps therefor dispatch automatically wraps our action creator.
          //this.state.amount will be the payload of the return object from the withdrawlFromBank action creator.
          this.props.withdrawlFromBank(this.state.amount)
        : alert("Sorry not enough money");
    } else {
      this.props.wallet >= this.state.amount
        ? //dispatch action depositToBank that has been attached to props from mapDispatchToProps.
          //We used an object when defining mapDispatchToProps therefor dispatch automatically wraps our action creator.
          //this.state.amount will be the payload of the return object from the depositToBank action creator.
          this.props.depositToBank(this.state.amount)
        : alert("Sorry not enough money");
    }
  }

  render() {
    return (
      <Row className="borderDivider">
        <Col xs="12">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="exampleCheckbox">Custom Withdrawl/Deposit</Label>
              <div>
                <CustomInput
                  defaultChecked
                  type="radio"
                  id="withdrawRadio"
                  name="transactionType"
                  label="Withdrawl"
                />
                <CustomInput
                  type="radio"
                  id="depositRadio"
                  name="transactionType"
                  label="Deposit"
                />
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="amountInput">Amount</Label>
              <Input
                onChange={this.handleInputChange}
                type="number"
                name="amountInput"
                id="customAmountInput"
                placeholder="$500.00"
              />
            </FormGroup>
            <Button color="primary">Submit</Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

//mapStateToProbs will do the following once passed to connect
//take the state of the bankAccountReducer reducer and stick it on a prop called bankAccount
//take the state of the walletReducer reducer and stick it on a prop called bankAccount
//after mapStateToProps is passed to connect we can access our bankAccountReducer state likeso this.props.bankAccount
//after mapStateToProps is passed to connect we can access our walletReducer state likeso this.props.wallet
const mapStateToProps = state => ({
  bankAccount: state.bankAccountReducerState,
  wallet: state.walletReducerState
});

//mapDispatchToProps as an object wraps each action creator with dispatch.
//these can be accessed by this.props.withdrawlFromBank(amount) and this.props.depositToBank(amount)
//the amount argument will become the payload of the action
const mapDispatchToProps = {
  withdrawlFromBank,
  depositToBank
};

//connect will connect our component to the redux store and put whatever state you define onto props as well as actions to dispatch on props
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomTellerForm);
