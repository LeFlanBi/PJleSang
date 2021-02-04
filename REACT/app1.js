function WelcomeFunc({ name, children }) {
  return (
    <div>
      <h1> Bonjour {name}</h1>
      <p>{children}</p>
    </div>
  );
}

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1> Bonjour {this.props.name}</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = window.setInterval(this.tick.bind(this), 1000);
  }

  componentwillUnmount() {
    window.clearInterval(this.timer);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        Il est {this.state.date.toLocaleDateString()}{" "}
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

class Incrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n: props.start };
    this.timer = null;
  }
  componentDidMount() {
    window.setInterval(this.increment.bind(this), 1000);
  }

  componentwillUnmount() {
    window.clearInterval(this.timer);
  }

  increment() {
    this.setState({ n: this.state.n + 1 });
  }

  render() {
    return <div>Valeur : {this.state.n}</div>;
  }
}

class ManualIncrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n: 0 };
  }
  increment() {
    this.setState({ n: this.state.n + 1 });
  }
  render() {
    return (
      <div>
         {this.state.n} <button onClick={this.increment.bind(this)}>Incrémenter</button>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Welcome name="Loriane">Ravi de te rencontrer</Welcome>
    <Clock />
    <Incrementer start={10} />
    <ManualIncrementer />
  </div>,
  document.getElementById("title")
);
