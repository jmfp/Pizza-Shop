const SingleProduct = () => {
    const imgSrc = require("../Single Product/pizza.png")
    const imgAlt = "alt"
    const title = "Product"
    const description = "This is a product description, doesn't it look nice?"
    const qty = 1
    const price = 14.25

    return (

    <article className="singleProduct">
        <div className='productImg'>
            <img src={imgSrc} alt={imgAlt}/>
        </div>
        <div className='productInfo'>
            <h2>{title}</h2>
            <h6>{description}</h6>
            <div className='productNums'>
                <button className='addCart'>Add to Cart</button>
                <h4 className='price'>${price}</h4>
            </div>
        </div>
    </article>



    )
}

export default SingleProduct