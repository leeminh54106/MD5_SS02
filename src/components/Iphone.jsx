import React from 'react'

export default function Iphone({item,index}) {
  return (
    <div>
         <div className="col-md-3 col-sm-6">
          <div className="single-shop-product">
            <div className="product-upper">
              <img src={item.image} alt="" />
            </div>
            <h2>
              <a href="">{item.name}</a>
            </h2>
            <div className="product-carousel-price">
              <ins>${item.price}</ins> <del>${item.oldPrice}</del>
            </div>
            <div className="product-option-shop">
              <a
                className="add_to_cart_button"
                data-quantity={1}
                data-product_sku=""
                data-product_id={70}
                rel="nofollow"
                href="/canvas/shop/?add-to-cart=70"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}