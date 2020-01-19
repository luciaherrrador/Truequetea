import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
  return <div className="user">
    <img src={props.imageUrl} alt={props.userName} />
    <h2 className="name">{props.userName}</h2>
    <h2 className="contact">{props.userContact}</h2>
    <h2 className="city">{props.userCity}</h2>
    <h2 className="search">{props.userSearch}</h2>
    <h2 className="offer">{props.userOffer}</h2>
  </div>
}
User.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
}

export default User;