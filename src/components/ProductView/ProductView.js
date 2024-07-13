import React from "react";
import "./ProductView.css";
import CategoryCard from "../CategoryCard/CategoryCard";
import { birthdayData } from "../../data/ProductData";
function ProductView() {
  return (
    <>
    <div>
      <span className="cake-categories-heading">Cake Categories</span>
      <div className="cake-categories-container">
        <div className="cake-categories-item">
          <img
            src="https://cdn.wishingcart.in/wp-content/uploads/2023/03/Happy-1st-Birthday-Cake-scaled.jpg"
            className="cake-categories-image" />
          <span className="cake-categories-item-name">Birthday Cakes</span>
        </div>
        <div className="cake-categories-item">
          <img
            src="https://www.cakesquarechennaionline.com/wp-content/uploads/2023/08/Pink-Elegant-Wedding-Cake.jpg"
            className="cake-categories-image"
          />
          <span className="cake-categories-item-name">Wedding Cakes</span>
        </div>
        <div className="cake-categories-item">
          <img
            src="https://www.cakesquarechennaionline.com/wp-content/uploads/2023/08/Premium-Engagement-Cake-Best-Anniversary-cakes.jpg"
            className="cake-categories-image"
          />
          <span className="cake-categories-item-name">Anniversary Cakes</span>
        </div>
        <div className="cake-categories-item">
          <img
            src="https://www.onlinedelivery.in/images/detailed/36/3962bda7-a0fd-4e99-b2ec-8bbbdde579c3__1_.jpg"
            className="cake-categories-image"
          />
          <span className="cake-categories-item-name">Baby Shower</span>
        </div>
        <div className="cake-categories-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxJ1IGjnWfq_gx4M9A-bBLd09RFxkUP8KQB83IPKtG8lRQ9GCVbdEmgTBB4AZ8eEeP7Fg&usqp=CAU"
            className="cake-categories-image"
          />
          <span className="cake-categories-item-name">Valentine's Day</span>
        </div>
        <div className="cake-categories-item">
          <img
            src="https://theseasidebaker.com/wp-content/uploads/2019/04/Easter-Chocolate-Cake-6.jpg"
            className="cake-categories-image"
          />
          <span className="cake-categories-item-name">Easter Cakes</span>
        </div>
      </div>
      <h2 className="birthday-heading">Birthday Cakes</h2>
    </div>
    <div className="birthday-cake-routing-container">
      {birthdayData.map((cakeObject , i)=>{
        const {name , image , price , description} = cakeObject;
        return(
            <CategoryCard 
            key={i}
            name={name}
            image={image}
            price={price}
            description={description}
            />
        )
      })}

    </div>
    <div>

    </div>
    </>
  );
}

export default ProductView;
