import { useContext } from "react";
import { AuthenticationContext } from "../contexts/AuthenticationContext";
import { useNavigate } from "react-router"; 

export const Header = () => {
  const { userData, setUserData, setToken } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const user = userData?.user;

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserData(null);
    setToken(null);
    navigate("/login");
  };

  return (  
    <header className="header">
      <div className="container">
        <div className="header__user">
          
          {user ? (
            <>
              <small>{user.name} {user.lastName}</small>
              <small>{user.email}</small>
            </>
          ) : (
            <small>Cargando usuario...</small>
          )}
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </div>
    </header>
  );
}