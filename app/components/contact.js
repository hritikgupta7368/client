import Form from './form'



const Contact = () => {
  return (
   <section className='bg-[#F6F6F6]'>
      
     <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227.8778792649293!2d77.3797410741245!3d28.683536879540295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf07e435aec39%3A0xa7db2c9341086643!2sLoni%20Industrial%20Area%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201007!5e1!3m2!1sen!2sin!4v1712403518471!5m2!1sen!2sin" className='w-full h-72 px-5'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div>
        <p className='text-3xl font-semibold text-center my-2 md:my-4'>Get in touch with us</p>
        <p className='text-xl text-center my-4 md:my-8'>For any querries</p>
        <div className='block md:flex flex-row'>
            <div className='px-8'>
              <p>OUR OFFICE</p>
              <p>33/12, Site2, Loni Road Industrial Area</p>
              <p> Ghaziabad, Uttar Pradesh.</p>
              <p>Email : meghaenterprises.gmail.com</p>
            </div>
            <Form />
        </div>
      </div>
     </div>
   </section>
  )
}

export default Contact
