import React from 'react';
import "./BusinessList.css";
import Business from "../Business/Business";

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        <Business />
        <Business />
        {/* Add four more Business components} */}
        <Business />
        <Business />
        {/* Add four more Business components} */}
        <Business />
        <Business />
        {/* Add four more Business components} */}
        <Business />
        <Business />
        {/* Add four more Business components} */}
        <Business />
        <Business />
        {/* Add four more Business components} */}
        <Business />
        <Business />
        {/* Add four more Business components} */}
      </div>
    );
  }
}

export default BusinessList;
