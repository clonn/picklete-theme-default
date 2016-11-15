import React, { Component } from 'react'
import 'Shop/styles/ShopProductDetailPhotos.scss'

export default class ShopProductDetailPhotos extends Component {
  state = {
    activePhoto: 0
  }

  handleChangePhoto = (index) => {
    this.setState({
      activePhoto: index
    })
  }

  render() {
    return (
      <div className="c-product-gallery">
        <div className="c-product-gallery-content">
          <img src={this.props.photos[this.state.activePhoto]}/>
        </div>
        <div className="row c-product-gallery-thumbnail">
          {this.props.photos.map((photo, index) => (
            <div className="col-xs-4 c-product-thumb" onClick={this.handleChangePhoto.bind(null, index)} key={index}>
              <img src={photo}/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
