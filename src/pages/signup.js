import React from 'react';
import FormInput from '../components/input/Input'
import Button from '../components/button/button'
import './login.css';
import  { Redirect } from 'react-router-dom'
class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            'email':'',
            'password':'',
            'repassword':'',
            'success':null
        }
    }
    handleChange=(event)=>{
        let {name,value}=event.target
       
        this.setState({
            [name]:value
        })
    }
    handleSubmit =(event)=>{
        event.preventDefault()
        localStorage.setItem('users',JSON.stringify([{'email':'','password':''}]))
        const {email,password,repassword,success}=this.state
        if(password==repassword){
            let users=JSON.parse(localStorage.getItem('users'))
            let newUsers=[...users,{
            'email':email,
            'password':password,
        }]
        localStorage.setItem('users',JSON.stringify(newUsers))
        this.setState({
            'success':true
    })
        }
        else{
            this.setState({
                    'success':false
            })
            alert("Password Does Not match")
        }
    }
    render(){
    const {email,password,repassword,success}=this.state
    return(
        <form className="container" onSubmit={this.handleSubmit}>
            <div className="form-group">
            <h3>User Registration</h3>
            <label htmlFor="username">Username</label>
            <FormInput name="email" id="username" type="email" value={email} onChange={this.handleChange} required ></FormInput>
            <label htmlFor="password">Password</label>
            <FormInput name="password" id="password" type="password" value={password} onChange={this.handleChange} required ></FormInput>
            <label htmlFor="repassword">Re-enter your Password</label>
            <FormInput name="repassword" id="repassword" type="password" value={repassword} onChange={this.handleChange} required ></FormInput>
            <Button name="">Sign-Up</Button>
            {
                success?<Redirect to='/'/>:<Redirect to='/signup'/>
            }
            </div>
            
        </form>
    )
    }
}
export default Signup;