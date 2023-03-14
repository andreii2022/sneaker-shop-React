import Card from "./component/Card";
import Header from "./component/Header";
import Drawer from "./component/Drawer";

function App() {
  return (
    <div className="wrapper clear">
        <Drawer/>
        <Header/>
      
    
     
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
        <h1> Все кроссовки</h1>
        <div className="searh-block">
          <img src="/images/search.svg" alt="Search"/>
          <input placeholder="Search..." />
          </div>
        </div>
            <div className="d-flex">
          <Card/>
          <Card/>
       
        </div>
      </div>
    </div>
  );
}

export default App;





