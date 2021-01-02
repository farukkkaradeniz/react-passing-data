import React, { Component } from 'react';

export default class UserList extends Component {
  render() {
    const users = Object.values(this.props.users);
    const profiles = this.props.profiles;
    const movieId = this.props.movieId;
    var likedUserList = [];
    profiles.map(profile => {
        if (profile.favoriteMovieID == movieId) {
            users.filter(user => user.id == profile.userID).map(val => likedUserList.push(val));
        }
    });
    if(likedUserList.length > 0) {
        return (
            <ul>
                {likedUserList.map(usr => {return(<li key={usr.id}><p>{usr.name} - {usr.userName}</p></li>)})}
            </ul>
         );
    } else {
        return (<p>None of the current users liked this movie</p>);
    }
  }
}
