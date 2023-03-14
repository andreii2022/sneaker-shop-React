import React from 'react';

const Header = () => {
    return (
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
        <img width={40} height={40} src="/images/logo.png" alt="#" />
         <div>
           <h3 className="text-uppercace">REACT SNEAKERS</h3>
           <p className="opacity-5">Магазин лучших кроссовок</p>
         </div>
        </div>
         <ul className="d-flex">
           <li className="mr-30">
             <img width={18} height={18} src="/images/bascet.svg" alt="#" />
             <span>1205 грн</span>
           </li>
           <li>
             <img width={18} height={18} src="/images/users.svg" alt="#" />
           </li>
         </ul>
       </header>
    );
};

export default Header;