import { useState } from "react";
import "./styles.css";

export default function SearchBox({onSearch, onClose, isSearching }) {
  const [searchText, setSearchText] = useState("");

  const handleCloseSearch = () => {
    onClose();
    setSearchText("");
  }
  return (
    <>
      <div className="search-box">
        <h3 className="search-box-title">Buscador Personal </h3>
        <label>
          <input
            className="search-box-input"
            type="text"
            placeholder="Buscar"
            value={searchText}
            onChange={({ target: { value } }) => setSearchText(value)}
          />

          <button onClick={()=> onSearch(searchText)} disabled={!searchText.length}>Buscar</button>
          {isSearching && <button onClick={handleCloseSearch} disabled={!searchText.length}>Cancelar</button>}
        </label>
      </div>
    </>
  );
}
