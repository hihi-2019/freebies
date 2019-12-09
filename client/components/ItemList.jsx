import React from 'react'
import { connect } from 'react-redux'
import { findSuburb } from '../apis/itemList'

class ItemList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() { }

  componentWillReceiveProps(newProps) {
    // console.log(newProps)
    this.setState({
      items: newProps
    })
  }

  handleClick = e => { }

  render() {
    const items = this.props.items
    console.log(items)

    return (
      <div className='scrollable'>
        <h2>Listed items: </h2>
        <div className="row">
          <div className="col-centered">
          {items.map((item, i) => {
            return (
              <div key={i} className="card" style={{ alignItems: 'center'}} >
                <img className="card-img-top" src={item.image} alt={item.item_name} style={{ 'MaxWidth': 2 + 'rem'}}/>
                <div className="card-body">
                  <h5 className="card-title">{item.item_name}</h5>
                  <h6><em>{item.suburb}</em></h6>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            )
          }
          )}
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps)(ItemList)
