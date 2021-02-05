let n = 0;

function numberFormat(n) {
  return n.toString().padStart(2, "0");
}
function render() {
  const taches = ["tache 1", "tache 2", "tache 3"];
  const lis = taches.map((item,i) => <li key = {i}>{item}</li>);
  const title = (
    <div>
      <h1>
        Bonjour les gens <span>{numberFormat(n)}</span>
      </h1>
      <ul>{lis}</ul>
    </div>
  );
  ReactDOM.render(title, document.querySelector("#title"));
}

render();

window.setInterval(() => {
  n++;
  render();
}, 1000);
