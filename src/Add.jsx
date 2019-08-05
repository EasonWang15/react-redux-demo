import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addList } from './redux/actions'

const mapStateToProps = (state) => {
  const { global: { lists } } = state
  return { lists }
}

class Add extends Component {
  handleAddList = () => {
    console.log("dasd", this.props);
    this.props.addList('dasdssasd');
  }
  render() {
    const { lists } = this.props
    console.log('lists', lists);
    return (
      <div>
        {
          lists.map(item => {
            return (
              <p key={item.id}>{item.title}</p>
            )
          })
        }
        <button onClick={this.handleAddList}>Add</button>
        <Link to='/home'>home</Link>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { addList }
)(Add)