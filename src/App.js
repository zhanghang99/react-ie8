import React from "react";
import {Router} from "react-router";

import routes from "./routes";

class App extends React.Component
{
    componentDidMount(){
        var aa = [1,2,3,4,5,6,7,8,9];
        aa.forEach((v)=>{
            console.log(v);
        })
        let cc = aa.map((v)=>{
            return v + 1
        });
        console.log(cc);
    }
    render()
    { 
        return (
            <Router routes={routes}>
                <div>
                    {this.props.children}
                </div>
            </Router>
        );
    }
}

export default App;