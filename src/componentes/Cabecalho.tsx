import "./Cabecalho.css";
import pokemonLogo from "../assets/pokemon-logo.svg";

export default function Cabecalho() {
  return (
    <div>
      <header className="cabecalho-pokemon">        
          <img src={pokemonLogo} className="pokemon-logo" alt="Pokemon Logo" />       
        <div>
          <div className="paginas-compras">
            <a className="paginas-navegacao">Pokémons</a>
            <a className="paginas-navegacao">Pokébolas</a>
            <a className="paginas-navegacao">História</a>
          </div>
        </div>

        <div>
          <div className="paginas-cliente">
            <a className="paginas-navegacao">Login</a>
            <a className="paginas-navegacao">Cadastre-se</a>
          </div>
        </div>

      </header>
    </div>
  );
}
