import {handlesubmit} from "../actions/form";


const Form = () => {
    
  return (
     <form action = {handlesubmit}>
        <p className='logoHeading text-3xl text-black p-5'>Contact us</p>
        <div className='parent '>
            <div className='input'><input required type = "text" name = "firstname" placeholder='First Name' /></div>
            <div className='input'><input required type = "text" name = "lastname" placeholder='Last Name' className=''/></div>
            <div className='input'><input required type = "text" name = "email id" placeholder='Email id' className=''/></div>
            <div className='input'><input required type = "text" name = "phone" placeholder='Phone no.' /></div>
            <div className='input h-40'><textarea type = "text" name = "message" required placeholder='querry' /></div>
            <button className = "shop_button mx-2" type = "submit">Send</button>
        </div>
     </form>
    
  )
}

export default Form
