import { useState } from "react";
import { loginUser } from "../../services/authentication";
import { useNavigate } from "react-router";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleOnChange = (event) => {
    setEmail(event.target.value)
  }

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await loginUser(email);
      console.log("Registro exitoso:", response);
      navigate("/verification");
    } catch (err) {
      setError(err.message || "Error al registrarse");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <form className="formulario" onSubmit={handleOnSubmit}>
        <div className="formulario__imagen">
          <h3>Tu próxima aventura te espera</h3>
          <p>Registrate y accede a descuentos exclusivos, planea el viaje de tus sueños, ya sea en las montañas, playas, o en pueblo tranquilo 
            <b> tu viaje comienza aquí</b>
          </p>
        </div>
        <div className="formulario__contenido">
          <h3 className="formulario__titulo">Regístrate</h3>
          <p className="formulario__bajada">¿Listo para viajar? <br />Ingresa tu correo electrónico para registrarte en nuestra plataforma</p>
          <div className="formulario__contenedor-input">
            <label>correo electrónico</label>
            <input type="email" onChange={handleOnChange} />
          </div>
          
          <div className="formulario__contenedor-accion">
            <button disabled={loading}>{loading ? "Enviando..." : "Enviar código"}</button>
          </div>
          
          {error && (
            <div className="formulario__contenedor-mensaje formulario__contenedor-mensaje--error">
              <small><b>Error:</b> {error}</small>
            </div>
          )}
          
          {!error && (
            <div className="formulario__contenedor-mensaje">
              <small><b>¡Atento!</b> Recibiras un código al correo electrónico que indicaste.</small>
            </div>
          )}
         
        </div>
      </form>
    </main>
    
  )
}
 
export default RegisterPage;