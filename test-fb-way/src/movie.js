import React, { Component } from 'react';

class Movie extends Component{
	constructor(props){
		super(props);
	}
	render (){
		return(
			<h2>
			{this.props.movie.name}
			</h2>
		)
	}
}
export default Movie;