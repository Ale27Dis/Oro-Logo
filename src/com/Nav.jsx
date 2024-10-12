import './Nav.css';

function Nav (){
    return(
             <><header className="navbar">
             <div className="logo">Oro Logo</div>
             <div className="site-name">MyBuit</div>
             <nav>
               <ul className="nav-links">
                 <li><button>Home</button></li>
                 <li><button>About</button></li>
                 <li><button>Services</button></li>
                 <li><button>Contact</button></li>
               </ul>
             </nav>
             <div className="search-container">
               <input type="text" placeholder="Search..." />
               <button className="search-btn">🔍</button>
             </div>
             <div className="auth-buttons">
               <button className="signup-btn">Iscriviti</button>
               <button className="login-btn">Accedi</button>
             </div>
           </header>
             <h1 className="page-title">Benvenuti nella Nav!!!</h1>
             </>
    )
};

export default Nav;