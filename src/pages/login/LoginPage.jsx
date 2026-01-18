import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthenticationContext } from "../../contexts/AuthenticationContext.jsx"
import { loginUser } from "../../services/authentication";

const LoginPage = () => {
  const authContext = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [inputValues, setValidationInput] = useState({
    email: '',
    password: ''
  });

  function handleOnChange(event){
    const { name, value } = event.target;

    const datosIngresados = {
      ...inputValues,
      [name]: value
    };
    setValidationInput(datosIngresados);
  }


  async function handleOnSubmit(event){
    event.preventDefault();
    setError("");
    
    if (!inputValues.email || !inputValues.password) {
      setError("Por favor completa todos los campos");
      return;
    }
    
    setLoading(true);
    try {
      const response = await loginUser(inputValues.email, inputValues.password);
      console.log("Lo que devuelve:", response);

      authContext.setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      authContext.setUserData(response.data);
      navigate("/home");
      
    } 
    catch (err) {
      setError(err.message || "Error con el codigo");
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <main className="img-bg img-bg--formulario">
      <form className="formulario formulario--login" onSubmit={handleOnSubmit} noValidate>
        <div className="formulario__imagen">
          <h3>Estás a solo un paso</h3>
          <p>Siendo usuario de nuestra platagorma tienes un mundo de ventajas por descubrir.
            <b> Tu viaje comienza con nosotros.</b>
          </p>
        </div>
        <div className="formulario__contenido">
          <h3 className="formulario__titulo">Ingresa a <br /> nuestra plataforma</h3>
          <p className="formulario__bajada">Siempre tendrás los mejores destinos y ofertas</p>
          <div className="formulario__contenedor-input">
            <label>correo electrónico</label>
            <input type="email" value={inputValues.email} onChange={handleOnChange} name="email" />
          </div>
          <div className="formulario__contenedor-input">
            <label>contraseña</label>
            <input type="password"  value={inputValues.password} onChange={handleOnChange} name="password" />
          </div>
          
          <div className="formulario__contenedor-accion">
            <button disabled={loading}>{loading ? "Iniciando sesión" : "Iniciar sesión"}</button>
          </div>
          {error && <div className="formulario__mensaje formulario__mensaje--error"><small>{error}</small></div>  }
        </div>
      </form>
    </main>
    
  )
}

export default LoginPage