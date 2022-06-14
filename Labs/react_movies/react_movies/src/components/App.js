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
    // handles input bar
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };
    //submit form after we enter name of movie
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
                    this.setState({
                        searchResult: data,
                    });
                })
                .catch((error) => {
                    console.error(error.message)
                })
                //this runs no matter what (wether you get data or not)
                .finally(() => {
                    this.setState({
                        movieTitle: "",
                    })
                });
            }
        );
    };
      
    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor='movieTitle'>Title</label>
              <input 
              id='movieTitle' 
              type='text' 
              value={this.state.movieTitle}
              onChange={this.handleChange}/>{" "}
              <input type='submit' value='Find Movie Info'/>
            </form>
            {/*if there is a serach result then pass in the movie component else an empty string*/}
            {this.state.searchResult ? (<MovieInfo searchResult={this.state.searchResult}/>) : ("")}
          </>
        );
    };
};

// 4. export component
export default App;