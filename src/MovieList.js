import React, { Component } from 'react';
import UserList from './UserList';

export default class MovieList extends Component {
  render() {
    const movieList = Object.values(this.props.movies);
    
    return (
      <ul>
          {movieList.map(movie => {return (
            <li key = {movie.id}>
                <strong>{movie.name}</strong>
                <p>Liked Users</p>
                <UserList users = {this.props.users}
                            profiles = {this.props.profiles}
                            movieId = {movie.id}/>
            </li>
          )})}
      </ul>
    );
  }
}
