import React from 'react';
import './App.css';

class Input extends React.Component {
  render() {
    return (
      <div className="style-inputs">
        <label htmlFor="name-input">
          NOME:
          <input type="text" id="name-input" data-testid="name-input" />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input type="textarea" id="description-input" data-testid="description-input" />
        </label>
        <label htmlFor="attr1-input">
          Força:
          <input type="number" id="attr1-input" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2-input">
          Agilidade:
          <input type="number" id="attr2-input" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3-input">
          Magia:
          <input type="number" id="attr3-input" data-testid="attr3-input" />
        </label>
        <label htmlFor="image-input">
          Imagem:
          <input type="text" id="image-input" data-testid="image-input" />
        </label>
        <label htmlFor="rare-input">
          Carta Rara:
          <select data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trunfo:
          <input type="checkbox" id="trunfo-input" data-testid="trunfo-input" />
        </label>
        <button data-testid="save-button" type="submit">Salvar</button>
      </div>
    );
  }
}

export default Input;
