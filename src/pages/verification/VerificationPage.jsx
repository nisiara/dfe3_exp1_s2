const VerificationPage = () => {
  return (
    <main>
      <form className="formulario">
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
            <input type="password" />
          </div>
          
          <div className="formulario__contenedor-accion">
            <button>Verificar código</button>
          </div>
         
        </div>
      </form>
    </main>
    
  )
}

export default VerificationPage