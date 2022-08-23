import NavBar from "./component/NavBar";
import ItemListContainer from "./component/ItemListContainer";
const App = () => {
  return( 
  <>
    <NavBar />
    <ItemListContainer 
    imgPath="https://us.123rf.com/450wm/kesu87/kesu871907/kesu87190700139/127039478-hermoso-paisaje-con-amanecer-en-la-cascada-kirkjufellsfoss-y-la-monta%C3%B1a-kirkjufell-islandia-.jpg?ver=6" 
    description="paisaje montaña"/>
    <ItemListContainer 
    imgPath="https://static.dw.com/image/58845200_303.jpg" 
    description="oso"/>
  </>
  )
}
export default App;
