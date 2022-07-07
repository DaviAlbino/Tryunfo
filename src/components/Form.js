import React from 'react';
import Input from './Input';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      onInputChange,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div>
        <form>
          <Input
            cardName={ cardName }
            onInputChange={ onInputChange }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            cardDescription={ cardDescription }
          />
        </form>
      </div>
    );
  }
}

export default Form;
