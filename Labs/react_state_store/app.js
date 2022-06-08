console.table(data)

//create class component to render data to the screen
class App extends React.Component{
    //initialize your state
    state = {
        data: data,
        value: "",
        name: "",
        price: 0,
        description: "Describe this item"
    };
    //create a method to change user input
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    //create a method to submit form
    handleFormSubmit = () => {
        e.preventDefault();
    }
    
    render (){
        const dataList = data.map((element) => {
            return(
                <ul>
                    <li>{element.name} {element.price}</li>
                </ul>
            );
        });
        return (
            <div>
                <h1>Big Time Shopping</h1>
                <form onSubmit={this.handleFormSubmit}> 
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" value={this.state.name} onChange={this.handleChange}/><br></br>
                    <label htmlFor="price">Price: </label>
                    <input id="price" type="text" value={this.state.price} onChange={this.handleChange}/><br></br>
                    <label htmlFor="description">Description: </label>
                    <input id="description" type="text" value={this.state.description} onChange={this.handleChange}/><br></br>
                    <br></br>
                    <input type="submit"/>
                </form>
                <div>
                    <h2>Preview our new item</h2>
                    <h3>{this.state.name}</h3>
                    <h4>{this.state.price}</h4>
                    <h5>{this.state.description}</h5>
                </div>
                {/*this.state.data[0].name*/}
                {dataList}
            </div>
        );
    };
};

//render component to the screen
ReactDOM.render(<App />, document.querySelector(".container"));