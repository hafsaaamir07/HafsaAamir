const React = require("react")
const myStyle = {
    color: "#FFFFFF",
    backgroundColor: "#ADD8E6",
};
const pokemon = require("./../models/pokemon")

class Index extends React.Component {
    render () {
        return (
            <>
            <h1>See All Pokemon's</h1>
            <div style = {myStyle}>
                <ul>
                    {pokemon.map((pokemon) => {
                        return (
                            <li>
                                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                            </li>
                        )
                    })}
                   
                </ul>

            </div>
            </>
        )
    }
}
module.exports = Index;