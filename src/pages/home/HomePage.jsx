import { useEffect, useState } from "react";
import { apiClient } from "../../services/api-client";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Borramos el token
    navigate("/register"); // Redirigimos al registro
  };

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        
        const response = await apiClient('/app-users/me');
        
        if (response && response.ok) {
          const datos = await response.json();
          console.log("Datos del usuario:", datos.data);
          setUserData(datos.data);
        }
      } catch (error) {
        console.error("Error cargando perfil", error);
      }
    };

    getUserProfile();
  }, []);

  if (!userData) {
    return <h1>Cargando perfil...</h1>;
  }

  return (
    <>
    
      <section>
        <div><small>ID usuario: </small><b>{userData.id}</b></div>
        <div><small>Email: </small><b>{userData.email}</b></div>
        <div><small>Project ID: </small><b>{userData.project_id}</b></div>
        <div><small>Status: </small><b>{userData.status}</b></div>
      </section>
      <button className="logout" onClick={handleLogout}>Cerrar sesión</button>
    </>
  )
  
}
 
export default HomePage;