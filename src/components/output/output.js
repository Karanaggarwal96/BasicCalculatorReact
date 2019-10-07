import React,{Component} from 'react';
import classes from './output.css'

class output extends Component{
    render(){
        return(
            <div className={classes.result}>
                <p> {this.props.result}</p>
            </div>
        )
    }
}

export default output;