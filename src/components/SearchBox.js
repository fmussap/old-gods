import React, { Component } from 'react'
import { Input } from 'antd'

const Search = Input.Search

class SearchBox extends Component {
  state = {
    search: ''
  }

  onChange = ({ target }) => {
    const search = target.value
    this.setState(() => ({
      search
    }), () => this.props.handleSearch(this.state.search.trim()))
  }

  render () {
    return (
      <div>
        <Search
          enterButton
          onChange={this.onChange}
          placeholder='search for gods'
          style={{ width: 200 }}
          value={this.state.search}
        />
      </div>
    )
  }
}

export default SearchBox
