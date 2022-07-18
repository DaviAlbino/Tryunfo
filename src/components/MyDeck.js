import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

class MyDeck extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      deleteCardBtn,
      // hasTrunfo,
    } = this.props;

    return (
      <div>
        <h3 data-testid="name-card">{ cardName }</h3>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ cardDescription }</p>
        <ul>
          <li data-testid="attr1-card">
            { cardAttr1 }
            {' '}
          </li>
          <li data-testid="attr2-card">
            { cardAttr2 }
            {' '}
          </li>
          <li data-testid="attr3-card">
            { cardAttr3 }
            {' '}
          </li>
        </ul>
        <span data-testid="rare-card">{ cardRare }</span>
        <div>
          { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
        </div>
        <button
          type="button"
          data-testid="delete-button"
          id={ cardName }
          onClick={ deleteCardBtn }
          value={ cardTrunfo }
        >
          Excluir

        </button>
      </div>
    );
  }
}

MyDeck.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.boolean,
  hasTrunfo: PropTypes.boolean,
  isSaveButtonDisabled: PropTypes.boolean,
  onInputChange: PropTypes.function,
  onSaveButtonClick: PropTypes.function,
}.isRequired;

export default MyDeck;
