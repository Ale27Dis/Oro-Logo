import './Cards.css';

function Cards({ title, image, price }) { 

    return(
        <>
        
       
       <div className="product-card">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <div className="product-info">
        <span className="price">{price} €</span>
        <button className="buy-button">Compra</button>
      </div>
    </div>
        </>
    )
};




export default Cards;