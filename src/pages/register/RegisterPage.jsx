
const RegisterPage = () => {
  return (
    <main>
      <form className="formulario">
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
            <input type="mail" />
          </div>
          
          <div className="formulario__contenedor-accion">
            <button>Enviar código</button>
          </div>
          
         
          <div className="formulario__contenedor-mensaje">
            <small><b>¡Atento!</b> Recibiras un código al correo electrónico que indicaste.</small>
          </div>
         
        </div>
      </form>
    </main>
    
  )
}
 
export default RegisterPage;