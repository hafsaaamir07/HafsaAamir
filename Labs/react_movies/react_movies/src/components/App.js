// 1. import React
import React from "react"

// 2. additional imports
import MovieInfo from "./MovieInfo";

// 3. create component
class App extends React.Component{
    //add a state to our component
    state = {
        baseURL: 'http://www.omdbapi.com/?',
        apikey: 'apikey=' + '910e0323',
        query: '&t=',
        movieTitle: '',
        searchURL: ''
    };
    //methods
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };
    handleSubmit = (event) =>{
        event.preventDefault()
        this.setState({
          searchURL: 
          this.state.baseURL + 
          this.state.apikey + 
          this.state.query + 
          this.state.movieTitle
        },
            () => {
                fetch(this.state.searchURL)
                .then ((response) => {
                    return response.json();
                })
                .then ((data) => {
                    console.log(data)
                })
                .catch((error) => {
                    console.error(error.message)
                })
            }
        );
    };
      
    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor='movieTitle'>Title</label>
              <input id='movieTitle' type='text' 
              value={this.state.movieTitle}
              onChange={this.handleChange}/>
              <input type='submit'value='Find Movie Info'/>
            </form>
            <a href={this.state.searchURL}>{this.state.searchURL}</a>
            <MovieInfo />
          </>
        );
    };
};

// 4. export component
export default App;