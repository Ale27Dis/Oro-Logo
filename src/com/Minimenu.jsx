
import './Minimenu.css'


function Minimenu() { 
    const brands = [
        'Casio', 'Seiko', 'Citizen', 'Timex', 'Tommy Hilfiger',
        'Diesel', 'Orient', 'Fossil', 'Maserati', 'Bulova'
      ];
    return(
        <>
     <div className="brand-buttons-container">
      {brands.map((brand, index) => (
        <button key={index} className="brand-button">
          {brand}
        </button>
      ))}
    </div>

        </>
    )
};




export default Minimenu;