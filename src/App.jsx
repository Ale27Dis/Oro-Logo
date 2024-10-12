import './App.css'
import './com/Nav'
import Nav from './com/Nav'
import './com/Minimenu'
import Minimenu from './com/Minimenu'
import './com/Cards'
import Cards from './com/Cards'

function App() {
  

  return (
    <>
    <Nav></Nav>
    
    <Minimenu></Minimenu>
    
    
    {/* <Cards></Cards> */}
  
    <div className="App">
      <Cards 
        title="U-Boat" 
        image="https://m.media-amazon.com/images/I/81rX3fc5SLL._AC_UL480_FMwebp_QL65_.jpg" 
        price="2700.00" 
      />
      <Cards 
        title="CIGA Design" 
        image="https://m.media-amazon.com/images/I/612yLVoCU+L._AC_UL480_FMwebp_QL65_.jpg" 
        price="1999.99" 
      />
      <Cards 
        title="Citizen" 
        image="https://m.media-amazon.com/images/I/71G5WSdDOoL._AC_UL480_FMwebp_QL65_.jpg" 
        price="1885.99" 
      />
      <Cards 
        title="Philip Watch" 
        image="https://m.media-amazon.com/images/I/71HSizYdg3L._AC_UL480_FMwebp_QL65_.jpg" 
        price="1389.99" 
      />
      <Cards 
        title="Blaze" 
        image="https://m.media-amazon.com/images/I/618o04SecLL._AC_UL480_FMwebp_QL65_.jpg" 
        price="2233.99" 
      />
      <Cards 
        title="Philip Watch" 
        image="https://m.media-amazon.com/images/I/71SM5AhtIrL._AC_UL480_FMwebp_QL65_.jpg" 
        price="1729.99" 
      />
      <Cards 
        title="Frederique Constant" 
        image="https://m.media-amazon.com/images/I/716JBy1l9pL._AC_UL480_FMwebp_QL65_.jpg" 
        price="1629.99" 
      />
      <Cards 
        title="Leling" 
        image="https://m.media-amazon.com/images/I/71NgNgswpjL._AC_UL480_FMwebp_QL65_.jpg" 
        price="1629.99" 
      />
      <Cards 
        title="Awful" 
        image="https://m.media-amazon.com/images/I/71NgNgswpjL._AC_UL480_FMwebp_QL65_.jpg" 
        price="1583.99" 
      />
      <Cards 
        title="Citizen" 
        image="https://m.media-amazon.com/images/I/41OOk-XcrfL._AC_UL480_FMwebp_QL65_.jpg" 
        price="1329.99" 
      />
      <Cards 
        title="Citizen Cro" 
        image="https://m.media-amazon.com/images/I/61CUs7WQ0pL._AC_UL480_FMwebp_QL65_.jpg" 
        price="29.99" 
      />
      <Cards 
        title="Mido Cro" 
        image="https://m.media-amazon.com/images/I/61hTpsFufsL._AC_UL480_FMwebp_QL65_.jpg" 
        price="1329.99" 
      />
      <Cards 
        title="Swiss Military by Chrono" 
        image="https://m.media-amazon.com/images/I/71-J63Y2iiL._AC_UL480_FMwebp_QL65_.jpg" 
        price="1239.99" 
      />
      <Cards 
        title="Citizen BY299" 
        image="https://m.media-amazon.com/images/I/61z3NgnRJTL._AC_UL480_FMwebp_QL65_.jpg" 
        price="29.99" 
      />
      <Cards 
        title="Philip Watch" 
        image="https://m.media-amazon.com/images/I/8199fGVCooL._AC_UL480_FMwebp_QL65_.jpg" 
        price="1149.99" 
      />
      <Cards 
        title="Mido 87" 
        image="https://m.media-amazon.com/images/I/61qoCND8MKL._AC_UL480_FMwebp_QL65_.jpg" 
        price="1090.99" 
      />
      <Cards 
        title="Mido Multifort" 
        image="https://m.media-amazon.com/images/I/61z4fHkECML._AC_UL480_FMwebp_QL65_.jpg" 
        price="1290.99" 
      />
      <Cards 
        title="Bulova" 
        image="https://m.media-amazon.com/images/I/71kV7uZ63uL._AC_UL480_FMwebp_QL65_.jpg" 
        price="1089.99" 
      />
      <Cards 
        title="TSAR BOMBA" 
        image="https://m.media-amazon.com/images/I/71g-JiWk+ZL._AC_UL480_FMwebp_QL65_.jpg" 
        price="999.99" 
      />
      <Cards 
        title="Ritle" 
        image="https://m.media-amazon.com/images/I/714vlUThDeL._AC_UL480_FMwebp_QL65_.jpg" 
        price="980.99" 
      />
      <Cards 
        title="Philip Watch Caribe" 
        image="https://m.media-amazon.com/images/I/614QYfE9eHL._AC_UL480_QL65_.jpg" 
        price="780.99" 
      />
      <Cards 
        title="TSAR BOMBA" 
        image="https://m.media-amazon.com/images/I/61Z2l9bLWIL._AC_UL480_QL65_.jpg" 
        price="699.99" 
      />
    </div>



      
      <p className="read-the-docs">
      Scopri la nostra storia e la passione per l'orologeria di lusso.
      </p>
      <div>
           
            <p>Email: info@luxurywatches.com</p>
            <p>Telefono: +39 06 12345678</p>
        </div>
    <div >
      <p className="final-thought">
      Grazie per aver visitato la nostra pagina dedicat
      alla orologeria! <br />
       Speriamo che tu abbia trovato in
      teressante il nostri contenuti. <br />
       Seguici per ulteriori aggiornamenti e contenuti esclusivi!
      </p>
      <div id="my-bar"></div>
      </div>
     
     
    </>
  )
}

export default App
