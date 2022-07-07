import React from 'react';
import './App.css';

// onInputChange = (event) => {
//   this.setState({ cardName: event.target.value });
// };

class Input extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisable,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="style-inputs">
        <label htmlFor="name-input">
          NOME:
          <input
            type="text"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            id="name-input"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input
            type="textarea"
            name="cardDescription"
            id="description-input"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1-input">
          Força:
          <input
            type="number"
            name="cardAttr1"
            id="attr1-input"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2-input">
          Agilidade:
          <input
            type="number"
            name="cardAttr2"
            id="attr2-input"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3-input">
          Magia:
          <input
            type="number"
            name="cardAttr3"
            id="attr3-input"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image-input">
          Imagem:
          <input
            type="text"
            name="cardImage"
            id="image-input"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare-input">
          Carta Rara:
          <select
            data-testid="rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trunfo:
          <input
            type="checkbox"
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            id="trunfo-input"
            data-testid="trunfo-input"
          />
        </label>
        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisable }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>
      </div>
    );
  }
}

export default Input;
