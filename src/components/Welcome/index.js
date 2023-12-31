// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component{
 state = {
    isSubscribed: false,
 }

onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscibed}))
}



getButtonText = () => {
    const {isSubscribed}=this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
}
render(){
    const buttonText = this.getButtonText()
        return (
            <div className ="bg-container">
            <h1 className ="heading">Welcome</h1>
            <P className= "para">Thank you! Happy Learning</P>
           <button  type = "text" className ="button" onClick ={this.onSubscribe}>{buttonText}</button>
</div>
            
    )
    }
}
export default Welcome