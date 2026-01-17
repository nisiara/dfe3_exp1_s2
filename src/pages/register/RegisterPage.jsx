import { useState } from "react";
import { useNavigate } from "react-router";

const RegisterPage = () => {
  const navigate = useNavigate();

  const validationPatterns = {
    name: /^[a-zA-ZÀ-ÿ\s]{3,}$/,
    lastName: /^[a-zA-ZÀ-ÿ\s]{2,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  };

  const [formValues, setFormValues] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [validationInput, setValidationInput] = useState({
    name: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Calculamos si el formulario es válido en cada renderizado
  const isFormValid = Object.values(validationInput).every(isValid => isValid === true);

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    const datosIngresados = {
      ...formValues,
      [name]: value
    };
    setFormValues(datosIngresados);

    let isValidField = false;

    if (name === "confirmPassword") {
      isValidField = value === datosIngresados.password && validationPatterns.password.test(value);
    } else if (validationPatterns[name]) {
      isValidField = validationPatterns[name].test(value);
    }

    setValidationInput(prevValidation => {
      const updatedValidation = {
        ...prevValidation,
        [name]: isValidField
      };

      return updatedValidation;
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    if (!isFormValid) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formValues.name,
          lastName: formValues.lastName,
          email: formValues.email,
          password: formValues.password,
          confirmPassword: formValues.confirmPassword
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al registrarse");
      }

      const data = await response.json();
      console.log("Registro exitoso:", data);
      navigate("/verification", { state: { email: formValues.email } });
    } catch (err) {
      setError(err.message || "Ocurrió un error. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="img-bg img-bg--formulario">
      <form className="formulario formulario--registro" onSubmit={handleOnSubmit}>
        <div className="formulario__imagen">
          <h3>Tu próxima aventura te espera</h3>
          <p>
            Registrate y accede a descuentos exclusivos, planea el viaje de tus sueños, 
            ya sea en las montañas, playas, o en pueblo tranquilo 
            <b> tu viaje comienza aquí</b>
          </p>
        </div>

        <div className="formulario__contenido">
          <h3 className="formulario__titulo">Regístrate</h3>
         
          <div className="formulario__contenedor-input">
            <label>Nombre</label>
            <input 
              type="text" 
              name="name" 
              value={formValues.name} 
              onChange={handleOnChange} 
              className={!validationInput.name && formValues.name ? "error" : null}
            />
          </div>

          <div className="formulario__contenedor-input">
            <label>Apellido</label>
            <input 
              type="text" 
              name="lastName" 
              value={formValues.lastName} 
              onChange={handleOnChange} 
            />
          </div>
          
          <div className="formulario__contenedor-input">
            <label>Correo electrónico</label>
            <input 
              type="email" 
              name="email" 
              value={formValues.email} 
              onChange={handleOnChange} 
            />
          </div>

          <div className="formulario__contenedor-input">
            <label>Contraseña</label>
            <input 
              type="password" 
              name="password" 
              value={formValues.password} 
              onChange={handleOnChange} 
            />
            <ul>
              <li>Al menos 8 caracteres</li>
              <li>Una letra mayúscula</li>
              <li>Una letra minúscula</li>
              <li>Un número</li>
              <li>Un carácter especial</li>
            </ul>
          </div>

          <div className="formulario__contenedor-input">
            <label>Ingresa nuevamente la contraseña</label>
            <input 
              type="password" 
              name="confirmPassword" 
              value={formValues.confirmPassword} 
              onChange={handleOnChange} 
            />
           
          </div>
          
          <div className="formulario__contenedor-accion">
            <button type="submit" disabled={!isFormValid || loading}>
              {loading ? "Enviando datos..." : "Registrarme"}
            </button>
          </div>
          {error && <div className="formulario__mensaje formulario__mensaje--error"><small>{error}</small></div>  }
        </div>
      </form>
    </main>
  );
};

export default RegisterPage;