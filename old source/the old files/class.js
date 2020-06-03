import React from "react";

class Developer{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getName(){
        return (this.firstname + " " + this.lastname)
    }
}
const Emp1= new Developer("Tomi", "Oyeniyi")

function Dev(){
    return(
        <>
            <div className="body">
            <h1>This is a Developer</h1>
            <h2>{Emp1.getName()}</h2>
            </div>
        </>
    )
}

export default Dev;