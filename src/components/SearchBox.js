import React, { Component } from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const { Search } = Input;

class SearchBox extends Component {
  state = {
    search: ''
  }

  onChange = ({ target }) => {
    const { handleSearch } = this.props;
    const search = target.value;
    this.setState(() => ({
      search
    }), () => handleSearch(search.trim()));
  }

  render() {
    const { search } = this.state;
    return (
      <div>
        <Search
          enterButton
          onChange={this.onChange}
          placeholder="search for gods"
          style={{ width: 200 }}
          value={search}
        />
      </div>
    );
  }
}

SearchBox.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default SearchBox;
