console.table(data)

//create class component to render data to the screen
class App extends React.Component{
    //initialize your state
    state = {
        data: data,
        value: "",
        name: "",
        price: 0,
        description: "Bescribe this item"
    };
    //create a method to change user input
    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        })
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
                <form>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </form>
                {/*this.state.data[0].name*/}
                {dataList}
            </div>
        );
    };
};

//render component to the screen
ReactDOM.render(<App />, document.querySelector(".container"));