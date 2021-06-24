import React from 'react'

class Greeting extends React.Component{
    state ={
        hours:new Date(),
    }
	
  componentDidMount(){
      setInterval(() => {
        this.displayDate();
      }, 1000);  
   }

   displayDate=()=>{
    var hours = new Date()
    var hr = hours.getHours()
    var mn = hours.getMinutes()
    var tm = hours.getSeconds()
     
     var period 
     var timeOfDay
     if(hr<12){
       timeOfDay ="Good morning"
       period="AM"   
     }
     else if(hr>=12 && hr <= 16 ){
       timeOfDay ="Good afternoon"
       period="PM"   
     }
     else if(hr>16 && hr <= 18 ){
       timeOfDay ="Good evening"
       period="PM"  
     }
     else{
       timeOfDay ="Good Night"
       period="PM"  
     }
    this.setState({hours,hr,timeOfDay,mn,tm,period})    
       
   }
  render(){
    const { hours,hr,timeOfDay,mn,tm,period} = this.state;
    return(
      <div className="time-font2">
         <h6><span>{timeOfDay}</span> <br/>
          <span>{hours.toDateString()}{" "}{hr}:{mn}:{tm}{period}</span>
        </h6>
      </div>
        )
    }
  } 

export default Greeting