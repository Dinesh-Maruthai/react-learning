import Header from "./Header";
import Footer from "./Footer";
import UserGreeting from "./UserGreeting";
import Lists from "./Lists";

function App(){
  return(
    <>  {/*this is called fragments*/}
    <Header/>
    <Lists />
    <Footer/>
    </> 
  );
}
export default App