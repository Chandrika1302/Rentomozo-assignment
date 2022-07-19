import React from "react";
import { Component } from "react";
// import ItemServices from "../services/ItemServices";
class InputTab extends Component {
    state = {  
        games:[],
        inputValue:''
    } 
    handleChange=({target})=>{
        const inputValue = target.value;
        this.setState({inputValue:inputValue});
        console.log(inputValue)
    }
    getItems(){
        console.log(this.state.inputValue);
    }
    
  
    render() { 
        let {games,inputValue}=this.state;
        return (
            <React.Fragment>
               <div className="flex space-x-6 items-center justify-center">
                    <input onChange={this.handleChange} type="text" placeholder="Enter the name of the dish" value={inputValue} className="border-2 rounded  p-2 w-64"/>
                    <button onClick={this.getItems} className="px-3 py-2 bg-gray-700 rounded text-gray-200">Get Games</button>
                </div>
            </React.Fragment>
        );
    }
}
 
export default InputTab;