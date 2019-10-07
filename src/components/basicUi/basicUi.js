import React,{Component} from 'react';
import classes from './basicUi.css'
import Output from '../output/output'
class basicUi extends Component{

    state={
        value:null,
        displayValue :'0',
        waitingForOperand: false,
        operator:null,
        scientificmode:false,
        buttons:false
      }
    buttonPressed= (buttonName )=>{
          
           if(this.state.waitingForOperand){
      
            this.setState({
      
            displayValue:String(buttonName),
            waitingForOperand:false
           
           })
            
           } else{
          this.setState({ 
            displayValue: this.state.displayValue === '0' ? String(buttonName) : this.state.displayValue+ buttonName
          })
        }
        
    }
      
      
 performOperation=(nextOperator)=>{
            const {displayValue,operator,value}=this.state
            const  nextValue= parseFloat(displayValue)

            const operations  ={
                '/': (prevValue,nextValue)=> prevValue/nextValue,
                '*': (prevValue,nextValue)=> prevValue*nextValue,
                '+': (prevValue,nextValue)=> prevValue+nextValue,
                '-': (prevValue,nextValue)=> prevValue-nextValue,
                '=': (nextValue)=> nextValue
            }

            if(value==null){
                this.setState({
                    value:nextValue
            })
        }else if(operator){

         const currentValue= value || 0
         const computedValue = operations[operator](currentValue,nextValue)

         this.setState({
             value:computedValue,
             displayValue:String(computedValue)
         })

        }
     
    this.setState({
              waitingForOperand:true,
              operator: nextOperator
            })

}      


toggleSign(){
const {displayValue} =this.state

this.setState({
 
    displayValue: displayValue.charAt(0)=== '-' ? displayValue.substr(1) : '-'+ displayValue
})

}

squareNo(){
 
    const {displayValue} =this.state

this.setState({
 
    displayValue: displayValue*displayValue
})

}

squareRoot(){

    const {displayValue} =this.state

this.setState({
 
    displayValue: Math.sqrt(displayValue)
})


}

clearDisplay(){
    
    this.setState({
        displayValue:'0'
    })
}

toggleHandler(){
    const doesShow= this.state.scientificmode;

    this.setState({
        scientificmode: !doesShow
    })
}

handler(){
    const active=this.state.buttons
    this.setState({
        buttons: !active
    })
}


    render(){
    
        return(
          <div className={this.state.buttons?classes.App:classes.App1}> 
          <br/> 
            <div className={classes.calc}>
                        <Output result={this.state.displayValue}/>
                        <div className={classes.buttons}>

                        <button name="1" className={this.state.buttons?classes.buttonsTrue:classes.buttonsFalse} onClick={()=>{this.buttonPressed('1')}}>1</button>
                        <button name="2" className={this.state.buttons?classes.buttonsTrue:classes.buttonsFalse} onClick={()=>{this.buttonPressed('2')}}>2</button>
                        <button name="3" className={this.state.buttons?classes.buttonsTrue:classes.buttonsFalse} onClick={()=>{this.buttonPressed('3')}}>3</button>
                        <button name="+" className={this.state.buttons?classes.buttonsTrue:classes.buttonsFalse} onClick={()=>{this.performOperation('+')}}>Add(+)</button>
                        <button name="4" className={this.state.buttons?classes.buttonsTrue:classes.buttonsFalse} onClick={()=>{this.buttonPressed('4')}}>4</button>
                        <button name="5" className={this.state.buttons?classes.buttonsTrue:classes.buttonsFalse} onClick={()=>{this.buttonPressed('5')}}>5</button>
                        <button name="6" className={this.state.buttons?classes.buttonsTrue:classes.buttonsFalse} onClick={()=>{this.buttonPressed('6')}}>6</button>
                        <button name="-" className={this.state.buttons?classes.buttonsTrue:classes.buttonsFalse} onClick={()=>{this.performOperation('-')}}>Subtract(-)</button>
                        <button name="7" className={this.state.buttons?classes.buttonsTrue:classes.buttonsFalse} onClick={()=>{this.buttonPressed('7')}}>7</button>
                        <button name="8" className={this.state.buttons?classes.buttonsTrue:classes.buttonsFalse} onClick={()=>{this.buttonPressed('8')}}>8</button>
                        <button name="9" className={this.state.buttons?classes.buttonsTrue:classes.buttonsFalse} onClick={()=>{this.buttonPressed('9')}}>9</button>
                        <button name="*" className={this.state.buttons?classes.buttonsTrue:classes.buttonsFalse} onClick={()=>{this.performOperation('*')}}>Multiply(*)</button>
                        <button name="clear" className={this.state.buttons?classes.buttonsTrue:classes.buttonsFalse}  onClick={()=>{this.clearDisplay()}} >Clear</button>
                        <button name="0" className={this.state.buttons?classes.buttonsTrue:classes.buttonsFalse} onClick={()=>{this.buttonPressed('0')}}>0</button>
                        <button name="=" className={this.state.buttons?classes.buttonsTrue:classes.buttonsFalse} onClick={()=>{this.performOperation('=')}}>=</button>
                        <button name="/" className={this.state.buttons?classes.buttonsTrue:classes.buttonsFalse} onClick={()=>{this.performOperation('/')}}>Divide(/)</button>
                    </div>

                    <div>
                            <br></br>
                            <button onClick={()=>{this.toggleHandler()}}> Scientfic Mode</button>
                            <br/>
                            <br/>
                            { this.state.scientificmode?
                            <div>
                                <button onClick={()=>{this.toggleSign()}}>Sign</button>
                                <button onClick={()=>{this.squareNo()}}>Square</button>
                                <button onClick={()=>{this.squareRoot()}}>Square Root </button>
                            </div>
                            : null }
                   </div>


                   <div>
                            <br></br>
                         
                            <button  onClick={()=>{this.handler()}}>Light Theme</button>
                            <button  onClick={()=>{this.handler()}}>Dark Theme</button>
                          
                           
                   </div>
     </div>
     </div>
        );
    }


}


export default basicUi;