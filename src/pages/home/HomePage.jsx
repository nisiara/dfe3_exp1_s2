
import { useContext } from "react";
import { AuthenticationContext } from "../../contexts/AuthenticationContext.jsx"
import { Header } from "../../layouts/Header.jsx";

const HomePage = () => {

  const authContext = useContext(AuthenticationContext);


  if (!authContext.userData) {
    return <h1>Cargando perfil...</h1>;
  }

  return (
    <>
    <Header />
    <main className="img-bg img-bg--home">
     
    </main>
    </>
  )
  
}
 
export default HomePage;