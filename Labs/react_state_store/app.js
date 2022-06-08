//create class component

class ProductList extends React.Component{
    state = {
        inShoppingCart: false,
    };
    handleCartToggle = () => {
        this.setState({
            inShoppingCart: !this.state.inShoppingCart
        });
    };
    render(){
        return (
            <li onClick={() => {
                return this.props.handleShoppingCart(this.props.element);
            }}>
                {this.props.element.name}{" "}
                {this.state.inShoppingCart ? <span>In Shopping cart</span> : null}
            </li>
        );
    };
};

//create class component to render data to the screen
class App extends React.Component{

    //initialize your state
    state = {
        data: data,
        value: "",
        name: "",
        price: 0,
        description: "Describe this item",
        isHiring: true,
        caer: []
    };

    //create a method to change user input
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    //create a method to submit form
    handleFormSubmit = (e) => {
        e.preventDefault();

        //lets add new item to our data array
        const newItem = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description
        };

        //add new items to our data array
        this.setState({
            data: [newItem, ...this.state.data]
        })
    };

    //create a function to toggle the value of our hiring state
    handleToggle = () => {
        this.setState({
            isHiring: !this.state.isHiring,
        });
    };
    // Step 1. create a method in App component that keeps a handle inside Product List component 
    handleShoppingCart = (item) => {
        this.setState({
            cart: [item, ...this.state.cart],
        })

    }
    render (){
        const dataList = this.state.data.map((element) => {
            return(
                <ul className="products">
                     {/*Step 2. hook our handle to our product list */}
                     <ProductList element={element} handleShoppingCart={this.handleShoppingCart} />
                </ul>
            );
        });
        return (
            <div>
                <h1>Big Time Shopping</h1>
                <h2>{this.state.isHiring ? <h2>Yes we are hiring!</h2>: <h2>Sorry try again tommorow</h2>}</h2>
                <button onClick={this.handleToggle}>Toggle Hiring</button><br></br>
                <form onSubmit={this.handleFormSubmit}> 
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" value={this.state.name} onChange={this.handleChange}/><br></br><br></br>
                    <label htmlFor="price">Price: </label>
                    <input id="price" type="text" value={this.state.price} onChange={this.handleChange}/><br></br><br></br>
                    <label htmlFor="description">Description: </label>
                    <input id="description" type="text" value={this.state.description} onChange={this.handleChange}/><br></br>
                    <br></br>
                    <input type="submit"/>
                </form>
                <div className="preview">
                    <h2>Preview our new item</h2>
                    <h3>{this.state.name}</h3>
                    <h4>{this.state.price}</h4>
                    <h5>{this.state.description}</h5>
                </div>
                {dataList}
                <div className="cart">
                    <h3>Shopping Cart</h3>
                    <ul></ul>
                </div>
            </div>
        );
    };
};

//render component to the screen
ReactDOM.render(<App />, document.querySelector(".container"));