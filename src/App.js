import React from 'react';
import Form from './components/Form';
import './components/App.css';
import Card from './components/Card';
import MyDeck from './components/MyDeck';
import Filters from './components/Filters';

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
      searchName: '',
      searchRareCard: 'todas',
      searchTrunfo: false,
      disabledRarity: false,
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
      hasTrunfo: !!cardTrunfo,
      isSaveButtonDisabled: true,
    }));
  }

  deleteCardBtn = ({ target }) => {
    const { myDeck } = this.state;
    const filteredDeck = myDeck
      .filter((cardFromDeck) => cardFromDeck.cardName !== target.id);
    console.log(target.value);
    if (target.value) {
      this.setState({
        myDeck: filteredDeck,
        hasTrunfo: false,
      });
    } else {
      this.setState({ myDeck: filteredDeck });
    }
  }

  handleFilter = ({ target }) => {
    const { myDeck } = this.state;
    const { name, type, checked, value } = target;
    this.setState({ [name]: type === 'checkbox'
      ? checked : value,
    });

    if (name === 'searchName') {
      const filteredByName = myDeck.filter((card) => card.cardName.includes(value));
      this.setState({
        myDeck: [...filteredByName],
      });
    }

    if (name === 'searchRareCard') {
      if (value === 'todas') {
        this.setState({ myDeck });
      } else {
        const filteredByRarity = myDeck.filter((card) => card.cardRare.includes(value));
        this.setState({
          myDeck: [...filteredByRarity],
        });
      }
    }

    if (checked) {
      const filteredByTrunfo = myDeck.filter((card) => card.cardTrunfo === true);
      this.setState({
        myDeck: [...filteredByTrunfo],
        disabledRarity: true,
      });
    } else {
      this.setState({
        myDeck,
        disabledRarity: false,
      });
    }
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
      searchName,
      searchRareCard,
      searchTrunfo,
      disabledRarity,
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
          <form>
            <Filters
              searchName={ searchName }
              searchRareCard={ searchRareCard }
              searchTrunfo={ searchTrunfo }
              handleFilter={ this.handleFilter }
              disabledRarity={ disabledRarity }
            />
          </form>
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
              deleteCardBtn={ this.deleteCardBtn }
            />
          )) }
        </div>
      </div>
    );
  }
}

export default App;
