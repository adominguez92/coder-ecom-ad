import NavBar from "./component/NavBar";
//import ItemListContainer from "./component/ItemListContainer";
//import ItemCount from "./component/ItemCount";
import ItemDetailContainer from "./component/ItemDetailContainer";

const App = () => {
  return( 
  <>
    <NavBar />
    {/*<ItemListContainer saludo = "Bienvienidos a mi tienda"/>*/}    
    <ItemDetailContainer />
  </>
  )
}
export default App;
