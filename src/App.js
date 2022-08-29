import NavBar from "./component/NavBar";
import ItemListContainer from "./component/ItemListContainer";
import ItemCount from "./component/ItemCount";
const App = () => {
  return( 
  <>
    <NavBar />
    <ItemListContainer 
      saludo = "Bienvienidos a mi tienda"
      imgPath= "https://us.123rf.com/450wm/kesu87/kesu871907/kesu87190700139/127039478-hermoso-paisaje-con-amanecer-en-la-cascada-kirkjufellsfoss-y-la-monta%C3%B1a-kirkjufell-islandia-.jpg?ver=6" 
      description= "paisaje montaña"/>    
  </>
  )
}
export default App;
