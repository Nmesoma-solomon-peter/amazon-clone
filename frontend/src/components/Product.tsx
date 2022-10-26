import React from 'react'
import './Product.css'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function Product() {
    return (
        <div className='card'>
            <div className="card__heading">
                <h3 className="card__headingText">Gaming accessories</h3>
            </div>

            <div className='card__imageBox'>
                {/* /image row 1 */}
                <div className="card__image box__left">
                <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg' alt='boximage' />
                <p>Headsets</p>
                </div>
                
                <div  className="card__image box__right">
                <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg' alt='boximage' />
                <p>keyboards</p>
            </div>
                </div>
                
            <div className="card__imageBox">
                {/* image row 2 */}

                <div className="card__image box__left">
                    <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg' alt='boximage' />
                    <p>computer mice</p>
                </div>

                <div className="card__image box__right">
                    <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg' alt='boximage' />
                    <p>chair</p>
                </div>
            </div>


        </div >

    )
}

export default Product



{/* <div className='product'>
            <div className="product__info">
                <p>The lean startup</p>
                <p>
                    <small>$</small>
                    <strong>20.00</strong>
                </p>
                <div className="product__rating">  
                    <p>🌟</p>
                    <p>🌟</p>
                </div>
            </div>
            <img src="https://m.media-amazon.com/images/I/71RnbVLC+PL._AC_UY218_.jpg" alt="item" />
                <button>Addd to basket</button>
        </div> */}