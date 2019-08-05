import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  const { global: { lists } } = state
  return { lists }
}

class Home extends Component {
  render() {
    const { lists } = this.props
    return (
      <div>
        {
          lists.map(item => {
            return (
              <p key={item.id}>{item.title}</p>
            )
          })
        }
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home)