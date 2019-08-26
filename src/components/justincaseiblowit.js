handleStealClick = () => {
  const dRoll = Math.floor(Math.random() * 20 + 1);
  const bounty = Math.floor(Math.random() * 20000 + 1);
  if (dRoll >= 20 * 0.7) {
    this.props.robTheBank(bounty);
  } else {
    this.props.fine();
  }
};


            // <Button
            //   size="lg"
            //   color="danger"
            //   onClick={this.handleStealClick}
            // >
            //   Steal from bank
            // </Button>;

            const mapDispatchToProps = {
              robTheBank,
              fine
            };