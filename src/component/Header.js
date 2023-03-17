import React from 'react';

function Header (props) {
    return (
        <header className="d-flex justify-between align-center p-40">
          <div className="d-flex align-center">
           <img width={40} height={40} src="/images/logo.png" alt="Logotype" />
           <div>
           <h3 className="text-uppercace">REACT SNEAKERS</h3>
           <p className="opacity-5">Магазин лучших кроссовок</p>
         </div>
        </div>
         <ul className="d-flex">
           <li onClick={props.onClickCart} className="mr-30 cu-p">
             <img width={18} height={18} src="/images/bascet.svg" alt="Cart" />
             <span>1205 грн</span>
           </li>
           <li>
             <img width={18} height={18} src="/images/users.svg" alt="User" />
           </li>
         </ul>
       </header>
    );
};

export default Header;