import React from 'react';



class NavBar extends React.Component {
    
    
    getGreeting(dayColorStyle) {
        const date = new Date();
        const hrs = date.getHours();
        if (hrs <= 11 && hrs >= 4)
        {
            dayColorStyle.color = 'yellow';
            return "Good Morning";
        }
        else if (hrs <= 15)
        {
            dayColorStyle.color = 'orange';
            return "Good Afternoon";
        }
        else
        {
            dayColorStyle.color = 'purple';
            return "Good Evening";
        }
    }

    render() {
        const dayColorStyle = {
            color: 'white'
        }
        const greeting = this.getGreeting(dayColorStyle);
        const myName = "Abhishek Vanjani";
        return (
            <div className="navbar">
                <h1 style = {dayColorStyle}> {greeting} </h1>
                <h1> To-Do List: {myName} </h1>
            </div>
        );
    }
}

export default NavBar;