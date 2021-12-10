import React, {useState} from 'react';

function Contact() {

    const [firstName, setFirstname] = useState("")
    const [lastName, setLastname ]= useState("")
    const [emailAdress, setEmailAdress] = useState("")

    const  handleSubmit = (event) => {
        alert("Thank you, i will contact you as soon as i can!" + firstName + " " + lastName);
      }
      function  handleChangeFirstName(event){
         setFirstname(event.target.value)
      }

      function  handleChangeLastName(event){
        setLastname(event.target.value)
    }
    function  handleChangeEmailAdress(event){
      setEmailAdress(event.target.value)
   }

      return(
        <section className="section-contact" id="contact"> 
       <div>
          <h1>Contact Information</h1>
          <p className="section__subtitle section__title--contact">This is where and how you can reach me!</p> 

        <form onSubmit={handleSubmit}>

        <label>
          Firstname:
          <input type="text" name="firstName" value={firstName} placeholder="Firstname" onChange={handleChangeFirstName}></input>
        </label>
        <br/><br/>
        <label>
          Lastname:
          <input type="text" name="lastName" value={lastName} placeholder="Lastname" onChange={handleChangeLastName}></input>
        </label>
        <br/><br/>

        <label>
          Email:
          <input type="text" name="emailAdress" value={emailAdress} placeholder="Enter your email" onChange={handleChangeEmailAdress}></input>
        </label>
        <br/><br/>

        <textarea placeholder="Enter text here"/>

        <button>Submit</button>
      </form>
      
      </div>
      </section>
    )
}
export default Contact