import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getListGods, setSearchList } from 'store/actions'

import './App.css'

import SearchBox from 'components/SearchBox'
import GodsList from 'components/GodsList'
import DisplayMessage from 'components/DisplayMessage'

class App extends Component {
  handleSearch = (value) => {
    const { cacheList, getListGods, setSearchList } = this.props
    const cache = cacheList[value]
    if (cache) {
      setSearchList(cache)
    } else if (!value) {
      const all = cacheList['all']
      setSearchList(all)
    } else {
      getListGods(value)
    }
  }
  componentDidMount () {
    this.props.getListGods(null, 'errorMessage')
  }
  render () {
    const { list, message } = this.props
    return (
      <div className='container'>
        <SearchBox handleSearch={this.handleSearch} />
        <GodsList data={list} />
        <DisplayMessage message={message} />
      </div>
    )
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getListGods,
    setSearchList
  }, dispatch)
}

const mapStateToProps = ({ gods }) => ({
  list: gods.searchList,
  cacheList: gods.cacheList,
  message: gods.errorMessage
})

export default connect(mapStateToProps, matchDispatchToProps)(App)
