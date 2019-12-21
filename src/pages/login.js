import React from 'react';
import FormInput from '../components/input/Input'
import Button from '../components/button/button'
import './login.css';
import {Link,Redirect} from 'react-router-dom';
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            'email':'',
            'password':'',
            'success':false,
            'data':''
        }
    }
    handleChange=(event)=>{
        let {name,value}=event.target
       
        this.setState({
            [name]:value
        })
    }
    handleSubmit =(event)=>{
        const {email,password,success}=this.state
        let users=JSON.parse(localStorage.getItem('users'))
        users.filter((loc)=>{
            console.log(loc)
            if((loc.email==email) && (loc.password==password)){
               this.setState({
                   'success':true,
                   'data':users
               })
            }
            
        })
        
    }
    render(){
    const {email,password,success,data}=this.state
    return(
        <form className="container" onSubmit={this.handleSubmit}>
            
            <div className="form-group">
            <h3>Login</h3>
            <label htmlFor="username">Username</label>
            <FormInput name="email" id="username" type="email" value={email} onChange={this.handleChange} required ></FormInput>
            <label htmlFor="password">Password</label>
            <FormInput name="password" id="password" type="password" value={password} onChange={this.handleChange} required ></FormInput>
            <Button name="">Submit</Button>
           
            </div>
            <div>New User?<Link to="/signup">Sign-Up</Link></div>
            {
                success?<Redirect to={{
                    pathname: '/book',
                    state: { email: email }
                }}/>:<Redirect to='/'/>
            }
        </form>
        
    )
    }
}
export default Login;