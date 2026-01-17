import { useContext, useEffect } from "react";
import { AuthenticationContext } from "../contexts/AuthenticationContext";
import { useNavigate } from "react-router"; 
import { userData } from "../services/user-data";

export const Header = () => {
  const authContext = useContext(AuthenticationContext);
  const navigate = useNavigate();
  const {id, name, lastName, email} = authContext.userData.user;

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const response = await userData('/me');
        
        if (response && response.ok) {
          const userData = await response.json();
          authContext.setUserData(userData.data);
        }
      } catch (error) {
        console.error("Error cargando perfil", error);
      }
    };

    getUserProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    authContext.setUserData(null);
    authContext.setToken(null);
  };


  return (  
    <>
    <header className="header">
      <div className="container">
        <div className="header__user">
          <small>{name} {lastName}</small>
          <small>{email}</small>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
       
      </div>
    </header>
    <main>
        
       
    </main>
    </>
  );
}