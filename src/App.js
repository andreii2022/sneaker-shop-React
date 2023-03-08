

function App() {
  return (
    <div className="wrapper">
      <header>
       <div className="headerLeft">
       <img width={40} height={40} src="/images/logo.png" alt="#" />
        <div className="headerInfo">
          <h3>REACT SNEAKERS</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
       </div>
        <ul className="hraderRight">
          <li>
            <svg/>
            <span>1205 грн</span>
          </li>
          <li>
            <svg/>
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
        ....
      </div>
    </div>
  );
}

export default App;
