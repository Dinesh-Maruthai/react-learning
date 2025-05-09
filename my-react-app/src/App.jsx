import Header from "./Header";
import Footer from "./Footer";
import Student from "./Student";

function App(){
  return(
    <>  {/*this is called fragments*/}
    <Header/>
    <Student name="dinesh" age={21} isStudent={true}/>
    <Student name="doremon" age={30} isStudent={false}/>
    <Student name="nobita" age={20} isStudent={true}/>
    <Student name=""/>
    <Footer/>
    </> 
  );
}
export default App