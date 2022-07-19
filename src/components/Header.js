import React, { Component } from "react";
import ItemServices from "../services/ItemServices";
import InputTab from "./InputTab";
class Header extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className="flex items-center justify-center flex-col space-y-6 bg-orange-200 p-2">
            <div className="text-4xl text-gray-700 ">Games-Finder</div>
            </div>
            <InputTab></InputTab>
            <ItemServices></ItemServices>
            </React.Fragment>
        );
    }
}
 
export default Header;