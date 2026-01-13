import { useState, useRef } from "react";
import { verification } from "../../services/verification";
import { useNavigate } from "react-router";

const VerificationPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const codeInputRef = useRef(null);

   const handleOnSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);
      try {
        const code = codeInputRef.current.value;
        //setLoading(true);
        const response = await verification(code);
        console.log("Lo que devuelve:", response);
        
        localStorage.setItem('token', response.data.session_token);
        navigate("/dashboard");
        
      } 
      catch (err) {
        setError(err.message || "Error con el codigo");
      } 
      finally {
        setLoading(false);
      }
    };

  return (
    <main>
      <form className="formulario" onSubmit={handleOnSubmit}>
        <div className="formulario__imagen">
          <h3>Estás a solo un paso</h3>
          <p>Registrate y accede a descuentos exclusivos, planea el viaje de tus sueños, ya sea en las montañas, playas, o en pueblo tranquilo 
            <b> tu viaje comienza aquí</b>
          </p>
        </div>
        <div className="formulario__contenido">
          <h3 className="formulario__titulo">Ingresa la clave</h3>
          <p className="formulario__bajada">Revisa tu correo electrónico e ingresa el código recibido</p>
          <div className="formulario__contenedor-input">
            <label>Ingresa el código</label>
            <input ref={codeInputRef} />
          </div>
          
          <div className="formulario__contenedor-accion">
            <button disabled={loading}>{loading ? "Verificando..." : "Verificar código"}</button>
          </div>
          {/* {{error}} */}
        </div>
      </form>
    </main>
    
  )
}

export default VerificationPage