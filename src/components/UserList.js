import React from 'react';
import User from './User';

const UserList = props => {
    return <ul className="user-list">
        {props.users.map(item => {
            return <li key={item.id} className="user-item">
                <User
                    imageUrl={item.url}
                    userName={item.name}
                    userContact={item.contact}
                    userCity={item.city}
                    userSearch={item.search}
                    userOffer={item.offer}
                />
            </li>
        })}
    </ul>
}


export default UserList;
