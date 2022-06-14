// 1. import react
import React from "react"

// 2. additional imports

// 3. create component
class MovieInfo extends React.Component {
    render() {
        return (
            <div>
                <h1>Title: {this.props.searchResult.Title}</h1>
                <h2>Year: {this.props.searchResult.Year}</h2>
                <img src={this.props.searchResult.Poster} alt={this.props.searchResult.Title}/>
                <h3>Genre: {this.props.searchResult.Genre}</h3>
                <h4>Plot: {this.props.searchResult.Plot}</h4>           
            </div>
        )
    }
}
// 4. export component
export default MovieInfo