import React from 'react'
import { Col, Row } from 'antd'
import moment from 'moment'

const GodsList = ({ data }) => {
  const capitalizeFirstLetter = (string) => {
    const splitString = string.split(/[_' ']/)
    return splitString.map((word) => {
      return word.replace(/^./, word[0].toUpperCase())
    }).join(' ')
  }
  const renderList = () => {
    if (data.length === 0) {
      return (
        <div className='list-item'>
          No gods found ...
        </div>
      )
    }
    return data.map(({ name, superpower, end_of_an_era }, i) => {
      const capitalName = capitalizeFirstLetter(name)
      const capitalsuperpower = capitalizeFirstLetter(superpower)
      const formatedDate = moment(end_of_an_era).format('DD/MM/YYYY')
      const nameLabel = capitalizeFirstLetter('name')
      const superpowerLabel = capitalizeFirstLetter('superpower')
      const eraLabel = capitalizeFirstLetter('end_of_an_era')
      return (
        <li key={i} className='list-item'>
          <Row>
            <Col span={12}>{nameLabel}: </Col>
            <Col span={12}>{capitalName}</Col>
          </Row>
          <Row>
            <Col span={12}>{superpowerLabel}: </Col>
            <Col span={12}>{capitalsuperpower}</Col>
          </Row>
          <Row>
            <Col span={12}>{eraLabel}: </Col>
            <Col span={12}>{formatedDate}</Col>
          </Row>
        </li>
      )
    })
  }
  return (
    <div>
      {renderList()}
    </div>
  )
}

export default GodsList
