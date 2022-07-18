import React from 'react';
import Form from './components/Form';
import './components/App.css';
import Card from './components/Card';
import MyDeck from './components/MyDeck';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      myDeck: [],
    };
  }

  validateSaveButton = () => {
    const { cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const maximumPoints = 210;
    const maximumAttrPoints = 90;
    const numberOfAttr1 = parseInt(cardAttr1, 10);
    const numberOfAttr2 = parseInt(cardAttr2, 10);
    const numberOfAttr3 = parseInt(cardAttr3, 10);

    if (cardName && cardDescription && cardImage && cardRare) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }

    if (numberOfAttr1 + numberOfAttr2 + numberOfAttr3 > maximumPoints) {
      this.setState({ isSaveButtonDisabled: true });
    }

    if (numberOfAttr1 > maximumAttrPoints
       || numberOfAttr2 > maximumAttrPoints
       || numberOfAttr3 > maximumAttrPoints
    ) {
      this.setState({ isSaveButtonDisabled: true });
    }

    if (numberOfAttr1 < 0
      || numberOfAttr2 < 0
      || numberOfAttr3 < 0
    ) {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.type === 'checkbox'
      ? event.target.checked : event.target.value }, this.validateSaveButton);
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
    const { cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      // cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    const newStates = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    };
    this.setState((prevState) => ({
      myDeck: [...prevState.myDeck, newStates],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardTrunfo: false,
      hasTrunfo: true,
      isSaveButtonDisabled: true,
    }));
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      myDeck,
    } = this.state;
    return (
      <div className="App">
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          onInputChange={ this.onInputChange }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          cardDescription={ cardDescription }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          className="card"
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          cardDescription={ cardDescription }
          // hasTrunfo={ hasTrunfo }
        />
        <div>
          { myDeck && myDeck.map((cardFromDeck, index) => (
            <MyDeck
              key={ index }
              cardName={ cardFromDeck.cardName }
              className="card"
              cardAttr1={ cardFromDeck.cardAttr1 }
              cardAttr2={ cardFromDeck.cardAttr2 }
              cardAttr3={ cardFromDeck.cardAttr3 }
              cardImage={ cardFromDeck.cardImage }
              cardRare={ cardFromDeck.cardRare }
              cardTrunfo={ cardFromDeck.cardTrunfo }
              cardDescription={ cardFromDeck.cardDescription }
            />
          )) }
        </div>
      </div>
    );
  }
}

export default App;
