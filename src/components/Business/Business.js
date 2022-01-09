import React from 'react';
import './Business.css';



class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img
            src={this.props.busines.imageSrc}
            alt={this.props.busines.name}
          />
        </div>
        <h2>{this.props.busines.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.busines.address}</p>
            <p>{this.props.busines.city}</p>
            <p>{this.props.busines.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.busines.category}</h3>
            <h3 className="rating">{this.props.busines.rating}</h3>
            <p>{this.props.busines.reviewCount}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;