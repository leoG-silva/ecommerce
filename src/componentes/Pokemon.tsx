import pokemonLogo from "../assets/pokemon-logo.svg";

export default function Pokemon() {
  return (
    <div className="Pokemon">
      <img src={pokemonLogo} className="pokemon-react" alt="Pokemon Logo" />
      <div>
        <h2>Nome:</h2>
        <h2>Preço:</h2>
      </div>
    </div>
  );
}
