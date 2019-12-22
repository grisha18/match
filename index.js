import React from 'react';
import ReactDOM from 'react-dom';


class Text extends React.Component{

    constructor(){
        super();
        this.state = {name: ""}
    }



    render(){

        console.log(this.props);
        const {color,name,surname} = this.props;
        return(

            <div>
                <h1 style={{color:color, fontWeight:"initial"}}>hello</h1>
                <h2>{this.state.name ? this.state.name : "Vasya"}</h2>
                <h2>{surname}</h2>
                <button onClick={()=>{this.setState({name:"Petya"})}}>press me</button>
            </div>


        )

    }

}



class App extends React.Component {

    render() {
        
        return (
        <>
            <Text color="red" name="vasya" surname="Ivanov" ></Text>
           
        </>
        )
    }
    
    

}
class Button extends React.Component{


render() {
    return <button onClick={()=>{this.props.setState({name:"Petya"})}}>press me</button>
}

}

ReactDOM.render(<App  />, document.getElementById('root'));

