import React from 'react';
import './book.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import Button from '../components/button/button';
import {Link,Redirect} from 'react-router-dom';
class Book extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:null,
            rooms:["SuperMan","BatMan","SpiderMan","Flash","Arrow","IronMan","AntMan","Thor","Hulk","WonderWoman"],
            currentUser:this.props.location.email,
            date: new Date(),
            starTime: '10:00',
            success:false,
            selc:[],
            time:'',
            endtime:'',
            selroom:[]
        }
    }
    componentDidMount(){
        console.log(this.props.location.state.email)
        let users=JSON.parse(localStorage.getItem('users'))
        this.setState({
            data:users,
            currentUser:this.props.location.state.email
        })
    }
    isWeekday = (date) => {
        const day = date.getDay()
        return day !== 0 && day !== 6
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const {data,date,time,room,selc,endtime,currentUser,selroom}=this.state
        const arr={
            date:date,
            time:time,
            room:room,
            endtime:endtime
        }
        
        this.setState({
            selc:[...selc,arr],
            success:true,
            selroom:[...selroom,room]
        })
        
    }
    handleChange = (event) => {
        let {name,value}=event.target
       
        this.setState({
            [name]:value
        })
        
        this.renderValue()
      }
    handleDate =(newdate) =>{
       this.setState({
           date:newdate
       })
    }
    renderValue =()=>{
        const {date,time,room,selc,endtime}=this.state
        localStorage.setItem('Today',JSON.stringify(this.state))
        return(
            <div >
                <h3>Booking Details</h3>
                <div class="booking-cont">
                {
                    selc.map(({date,time,room,endtime})=>{
                    return (
                    <div className="booking-box">
                    <p>Date:-{date.toString()}</p>
                    <p>StartTime:-{time}</p>
                    <p>EndTime:-{endtime}</p>
                    <p>Room Name:-{room}</p>
                    </div>
                    )
                    })
                }
            </div>   
            </div>
            
        )
    }
render(){
    const {currentUser,data,rooms,starTime,date,time,room,success}=this.state
    return(
    <div className="book-container">
        <div class="root">
            <h3 >Hi {currentUser?currentUser:null},</h3> 
            <span>Please Select the Date and Time for Booking a Room</span>
        </div>
        <form className="input-container" onSubmit={this.handleSubmit}>
            <div>
            <label>
                Select Room
            </label>
        <select name="room" onChange={this.handleChange}>
        <option value="" selected="selected" hidden="hidden" >Select Room</option>
            {
                rooms.map((name,key)=>{
                    return <option id={key}>{name}</option>
                })
            }
        </select>
        </div>
        <div>
            <label>
                Select Date
            </label>
            <DatePicker
        name="date"
        selected={this.state.date}
        onChange={this.handleDate}
        minDate={new Date()}
        placeholderText="Select a weekday"
        disabledDays={[new Date(2017, 3, 12), { daysOfWeek: [0, 6] }]}
        filterDate={this.isWeekday}
      />
        </div>
        <div>
        <label htmlFor="appt">Choose a time for your meeting:</label>
            <input type="time" name="time"
            onChange={this.handleChange}
            value={this.state.time}
            step='600' min="10:00:00" max="18:00:00"
            placeholder="hrs:mins"
         />to<input type="time" name="endtime"
         onChange={this.handleChange}
         value={this.state.endtime}
         step='600' min={this.state.time} max="18:00:00"
         placeholder="hrs:mins"
      />
            <small>Office hours are 9am to 6pm</small>
        </div>
        <Button name="">Book</Button>
    </form>
    {
        success?this.renderValue():null
    }
    </div>
    )
}
}
export default Book;