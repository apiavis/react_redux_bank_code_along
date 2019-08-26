import React, { PureComponent } from "react";
import { Row, Col, Button, CustomInput, Form } from "reactstrap";
import { withdrawlFromBank, depositToBank } from "../redux/actions/bankActions";
import { connect } from "react-redux";

//research for deciding to place component level state within QuickTeller for button coloration
//https://redux.js.org/faq/organizing-state
class QuickTeller extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      btnColor: "success",
      withdrawl: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    const amount = parseFloat(e.target.value);
    if (this.state.withdrawl) {
      this.props.bankAccount >= amount
        ? this.props.withdrawlFromBank(amount)
        : alert("Sorry not enough money");
    } else {
      this.props.wallet >= amount
        ? this.props.depositToBank(amount)
        : alert("Sorry not enough money");
    }
  }

  handleChange(e) {
    if (this.state.btnColor === "success") {
      this.setState({ btnColor: "danger", withdrawl: false });
    } else {
      this.setState({ btnColor: "success", withdrawl: true });
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row className="borderDivider">
          <Col xs="12">
            <CustomInput
              defaultChecked
              onChange={this.handleChange}
              type="radio"
              id="quickWithdrawlRadio"
              name="transactionType"
              label="Withdrawl"
            />
            <CustomInput
              onChange={this.handleChange}
              type="radio"
              id="quickDepositRadio"
              name="transactionType"
              label="Deposit"
            />
          </Col>
          <Col xs="12">
            <Button
              size="lg"
              type="submit"
              className="quickTellerBtn"
              outline
              onClick={this.handleClick}
              value={10.0}
              color={this.state.btnColor}
            >
              $10
            </Button>
            <Button
              size="lg"
              type="submit"
              className="quickTellerBtn"
              outline
              onClick={this.handleClick}
              value={20.0}
              color={this.state.btnColor}
            >
              $20
            </Button>
            <Button
              size="lg"
              type="submit"
              className="quickTellerBtn"
              outline
              onClick={this.handleClick}
              value={40.0}
              color={this.state.btnColor}
            >
              $40
            </Button>
          </Col>
          <Col xs="12">
            <Button
              size="lg"
              type="submit"
              className="quickTellerBtn"
              outline
              onClick={this.handleClick}
              value={60.0}
              color={this.state.btnColor}
            >
              $60
            </Button>
            <Button
              size="lg"
              type="submit"
              className="quickTellerBtn"
              outline
              onClick={this.handleClick}
              value={80.0}
              color={this.state.btnColor}
            >
              $80
            </Button>
            <Button
              size="lg"
              type="submit"
              className="quickTellerBtn"
              outline
              onClick={this.handleClick}
              value={100.0}
              color={this.state.btnColor}
            >
              $100
            </Button>
          </Col>
        </Row>
      </Form>
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
)(QuickTeller);
