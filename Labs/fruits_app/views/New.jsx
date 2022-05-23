const React = require("react")

class New extends React.Component{
    render(){
        return (
            <>
                <form action ="/fruits" method="POST">
                    Name: <input placeholder="Add Name" type="text" 
                    name="name"/><br/>

                    Color: <input placeholder ="Add Color" type="text"
                    name="color"/><br/>

                    Is Ready To Eat: <input 
                    type="checkbox" name="readyToEat"/><br/>

                    <input type="submit" name=""
                    value="Create Fruit"/>                    
                </form>
            </>
        )
    }

}

module.exports = New;