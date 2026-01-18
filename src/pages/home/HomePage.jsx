import { useContext } from "react";
import { AuthenticationContext } from "../../contexts/AuthenticationContext.jsx";
import { Header } from "../../layouts/Header.jsx";

const HomePage = () => {
  const { userData } = useContext(AuthenticationContext);

  
  if (!userData) {
    return <h1>Cargando perfil...</h1>;
  }

  return (
    <>
      <Header />
      <main className="img-bg img-bg--home">
        <h1 style={{color: "#FFFFFF"}}>Bienvenido, {userData.user?.name}</h1>
      </main>
    </>
  );
};

export default HomePage;