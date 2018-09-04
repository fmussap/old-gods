import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'Store/actions';
import PropTypes from 'prop-types';

import './App.css';

import SearchBox from 'Components/SearchBox';
import GodsList from 'Components/GodsList';
import DisplayMessage from 'Components/DisplayMessage';

class App extends Component {
  componentDidMount() {
    const { getListGods } = this.props;
    getListGods(null, 'errorMessage');
  }

  handleSearch = (value) => {
    const { cacheList, getListGods, setSearchList } = this.props;
    const cache = cacheList[value];
    if (cache) {
      setSearchList(cache);
    } else if (!value) {
      const { all } = cacheList;
      setSearchList(all);
    } else {
      getListGods(value);
    }
  }

  renderMessage = () => {
    const { message } = this.props;
    if (message) {
      return (
        <DisplayMessage message={message} />
      );
    }
    return null;
  }

  render() {
    const { list } = this.props;
    return (
      <div className="container">
        <SearchBox handleSearch={this.handleSearch} />
        <GodsList data={list} />
        {this.renderMessage()}
      </div>
    );
  }
}

const mapStateToProps = ({ gods }) => ({
  cacheList: gods.cacheList,
  list: gods.searchList,
  message: gods.errorMessage
});

App.defaultProps = {
  cacheList: {},
  list: [],
  message: null
};

App.propTypes = {
  cacheList: PropTypes.object,
  getListGods: PropTypes.func.isRequired,
  list: PropTypes.array,
  message: PropTypes.string,
  setSearchList: PropTypes.func.isRequired
};

export default connect(mapStateToProps, actions)(App);
