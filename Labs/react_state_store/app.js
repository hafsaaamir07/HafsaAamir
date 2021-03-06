//create a total component to sum up items inside shopping cart
class Total extends React.Component{
    render(){
        const total = this.props.cart.reduce((accumulator, element) => {
            return (accumulator += element.price)
        }, 0)
        return(
            <div>
                <h4>Total:{Math.round(total)}</h4>
            </div>
        );
    };
};


//create the shopping list component to recieve the data from the cart
class ShoppingList extends React.Component{
    render(){
        const cartItems = this.props.cart.map((element) => {
            return (
                <li>{element.name}{" "}{element.price}</li>
            );
        });
        return(
            <div>
                <ul>{cartItems}</ul>
                {this.props.children}
            </div>         
        );
    };
};


//create class component
class ProductList extends React.Component{
    state = {
        inShoppingCart: false,
    };
    //create a function to toggle the state of our shopping cart
    handleCartToggle = () => {
        this.setState({
            inShoppingCart: !this.state.inShoppingCart,
        });
    };
    render(){
        return (
            <li onClick={() => {
                return this.props.handleShoppingCart(this.props.element);
            }}>
                {this.props.element.name}{" "} {this.props.element.price}
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
        cart: [],
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
        });
    };

    //create a function to toggle the value of our hiring state
    handleToggleHiring = () => {
        this.setState({
            isHiring: !this.state.isHiring,
        });
    };
    // Step 1. create a method in App component that keeps a handle inside Product List component 
    handleShoppingCart = (item) => {
        this.setState({
            cart: [item, ...this.state.cart],
        });
    };
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
                <button onClick={this.handleToggleHiring}>Toggle Hiring</button><br></br>
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
                    <ShoppingList cart={this.state.cart}>
                        <Total cart={this.state.cart}/>
                    </ShoppingList>
                </div>
            </div>
        );
    };
};

//render component to the screen
ReactDOM.render(<App />, document.querySelector(".container"));