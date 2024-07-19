import unlike from './unlike-img.png'
import likeImg from './like.png'
import "./CategoryCard.css"
import { useState } from 'react'
function CategoryCard({name , image , price , description}) {

  const [liked , setLiked]= useState(false);
  const handleLike = ()=>{
    setLiked(!liked);
  }
  return (
    <>
    <div className="category-container">
      <span className="category-card-name">{name}</span><br/>
      <img src={image} alt={name}  className="category-card-image"/><br/>
      <span className="category-card-price" dangerouslySetInnerHTML={{__html: price}}>
    </span><br/>
      <p className="category-card-desc">{description.substring(0,120)}...</p>
      <img 
      src={liked ? likeImg : unlike}
      alt={liked ? "liked" : "unliked"}
      className="category-card-like"
      onClick={handleLike}
      />
    </div>
    </>
  )
}



export default CategoryCard
