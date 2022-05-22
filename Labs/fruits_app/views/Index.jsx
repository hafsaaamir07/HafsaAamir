const React = require("react");

class Index extends React.Component {
    render() {
        const {fruits} = this.props
        return (
            <>
                <h1>Fruits Index Page</h1>
                <ul>
                    {fruits.map((fruit, i) => {
                        return (
                            <li>
                                The{" "}
                                <a href ={`/fruits/${i}`}>
                                    {fruit.name}
                                </a> {" "}
                                is {fruit.color}{" "}
                                {fruit.readyToEat? "Its Ready" : "Its NOT"}

                            </li>
                        )
                    })}
                </ul>
            </>
        );
    }
}

module.exports = Index;