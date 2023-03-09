

function App() {
  return (
    <div className="wrapper clear">
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
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
        <h1> Все кроссовки</h1>
        <div className="searh-block">
          <img src="/images/search.svg" alt="Search"/>
          <input placeholder="Search..." />
          </div>
        </div>
            <div className="d-flex">
            <div className="card">
              <div className="favorite">
                <img src="/images/heart-unliked.svg" alt="Unliked" />
              </div>
          <img width={133} height={112} src="/images/sneacers/1.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>5999 грн</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/images/plus.svg" alt="Plus" />
          </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/images/sneacers/2.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>5999 грн</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/images/plus.svg" alt="Plus" />
          </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/images/sneacers/3.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>5999 грн</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/images/plus.svg" alt="Plus" />
          </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/images/sneacers/4.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>5999 грн</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/images/plus.svg" alt="Plus" />
          </button>
          </div>
        </div>
       
            </div>
      </div>
    </div>
  );
}

export default App;
