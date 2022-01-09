import React from 'react';
import './Business.css';


/*
# Modifying Business.js using Props


Let’s review what you’ve done so far:

Moved business information to App.js
Created a list of businesses using an array, rather than repeating components in BusinessList.js
Built functionality for the BusinessList component to iterate through the array and return Business components
You’re just about done! With the changes you’ve made, however, the Business component will have to access business information differently. This is what you’ll build next.

Open Business.js. What do you notice about how information is accessed inside of the return statement?

Because the business object was removed, statements like the following no longer have any meaning:
- Before
  {business.imageSrc}
- After 
  {this.props.business.imageSrc}

Business information now has to be accessed via the business prop you set in BusinessList.js. Modify all statements (like the one in the example above) by prepending them with this.props.
*/
class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img
            src={this.props.business.imageSrc}
            alt={this.props.business.name}
          />
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{this.props.business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className="rating">{this.props.business.rating}</h3>
            <p>{this.props.business.reviewCount}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;