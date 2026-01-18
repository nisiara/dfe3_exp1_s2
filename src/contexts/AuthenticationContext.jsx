import { createContext, useState, useEffect } from "react"
import { userData as getUserDataService } from "../services/user-data";

export const AuthenticationContext = createContext()

export const AuthenticationProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const savedToken = localStorage.getItem('token');
      
      if (savedToken) {
        try {
          const response = await getUserDataService('/me');
          if (response && response.ok) {
            const result = await response.json();
            setUserData(result.data);
          } else {
            
            localStorage.removeItem("token");
            setToken(null);
          }
        } catch (error) {
          console.error("Error al recuperar sesión", error);
        }
      }
      setLoading(false);
    };

    fetchProfile();
  }, []);

  return (
    <AuthenticationContext.Provider value={{ userData, setUserData, token, setToken, loading }}>
      {children}
    </AuthenticationContext.Provider>
  );


}