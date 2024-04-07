

const Product = ({heading ,src}) => {
  return (
    <div className='container shadow-md'>
      <img src = {src} className="image"/>
      <div className='overlay '>
        <p>{heading}</p>
      </div>
    </div>
  )
}

export default Product
