//on créé une classe qui s'etend à 'React.Component'
class Incrementer extends React.Component {
  constructor(props) {
    //on "définie" les variables globales de la classe
    super(props);
    this.state = {
      n: props.start,
      step: props.step,
      start: props.start,
      pause: 1000,
    };
    this.timer = null;
  }
  //quand le composant est monté
  componentDidMount() {
    this.play();
  }
  componentwillUnmount() {
    window.clearInterval(this.state.timer);
  }
  increment() {
    this.setState({ n: this.state.n + this.state.step });
    //changement d'état 'setState' et on assigne n par n+1 qu'on vient chercher avec un 'this.' + la variable ' state'
  }
  incrementStep() {
    this.setState({ step: this.state.step + 1 });
  }
  play() {
    clearInterval(this.state.timer);
    this.setState({
      timer: window.setInterval(this.increment.bind(this), 1000),
    }); // le bind reinjecte la valeur dans la classe
  }
  pause() {
    clearInterval(this.state.timer);
    this.setState({ timer: null });
  }
  label() {
   return this.state.timer ? 'Pause' : 'Play'
  }
  toggle() {
    this.state.timer ? this.pause() : this.play()
  }
  render() {
    return (
      <div>
        Compteur : {this.state.n}
        <button onClick={this.toggle.bind(this)}>{this.label()}</button>
        <button onClick={() => this.setState({ n: this.state.start })}>
          Réinitialiser
        </button>
        <br />
        <br /> Variable start : {this.state.start}
        <button onClick={() => this.setState({ start: this.state.start + 1 })}>
          ⏫
        </button>
        <button onClick={() => this.setState({ start: this.state.start - 1 })}>
          ⏬
        </button>
        <br /> Variable step : {this.state.step}
        <button onClick={() => this.setState({ step: this.state.step + 1 })}>
          ⏫
        </button>
        <button onClick={() => this.setState({ step: this.state.step - 1 })}>
          ⏬
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Incrementer start={12} step={2} />
  </div>,
  document.getElementById("title")
);
