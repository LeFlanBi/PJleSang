class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n: 0 };
  }

  incrementer() {
    this.setState({ n: this.state.n + this.props.step });
  }

  render() {
    return (
      <div>
        {this.state.n}
        <button onClick={this.incrementer.bind(this)}>Add</button>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    Voici un beau bouton
    <Add step={1} />
  </div>,
  document.getElementById("title")
);
