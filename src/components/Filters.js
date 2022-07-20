import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Filters extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const {
      searchName,
      searchRareCard,
      searchTrunfo,
      handleFilter,
      disabledRarity,
    } = this.props;

    return (
      <div className="style-inputs">
        <label htmlFor="name-filter">
          Filtros de busca
          <input
            type="text"
            name="searchName"
            value={ searchName }
            onChange={ handleFilter }
            id="name-filter"
            data-testid="name-filter"
            disabled={ disabledRarity }
          />
          <select
            name="searchRareCard"
            data-testid="rare-filter"
            onChange={ handleFilter }
            value={ searchRareCard }
            disabled={ disabledRarity }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
          <label htmlFor="trunfo-filter">
            <input
              type="checkbox"
              name="searchTrunfo"
              checked={ searchTrunfo }
              onChange={ handleFilter }
              id="trunfo-filter"
              data-testid="trunfo-filter"
            />
          </label>
        </label>
      </div>
    );
  }
}

Filters.propTypes = {
  searchName: PropTypes.string,
  searchRareCard: PropTypes.string,
  searchTrunfo: PropTypes.bool,
  handleFilter: PropTypes.func,
}.isRequired;

export default Filters;
