class Incrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n: props.start };
    this.timer = null;
    const start = props.start;
  }

  componentDidMount() {
    this.play();
  }
  componentwillUnmount() {
    window.clearInterval(this.state.timer);
  }
  play() {
    window.clearInterval(this.state.timer);
    this.setState({
      timer: window.setInterval(this.increment.bind(this), 1000),
    });
  }
  pause() {
    window.clearInterval(this.state.timer);
    this.setState({ timer: null });
  }
  increment() {
    this.setState((state, props) => ({ n: this.state.n + props.step }));
  }
  toggle() {
    return this.state.timer ? this.pause() : this.play();
  }
  label() {
    return this.state.timer ? "Pause" : "Play";
  }
  reinitialize() {
    this.setState({ n: 0});
  }
  render() {
    return (
      <div>
        {this.state.n}
        <button onClick={this.toggle.bind(this)}>{this.label()}</button>
        <button onClick={this.reinitialize.bind(this)}>Réinitialiser</button>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Incrementer start={10} step={2} />
  </div>,
  document.getElementById("title")
);
