import Landing from './Landing'
// Se eliminan los imports de componentes dinámicos como Navbar, Pedidos, Productos, etc.
// También se eliminan useState, useEffect y Login, ya que no se usarán.

function App() {
  // NOTA IMPORTANTE:
  // Se han eliminado todos los hooks (useState, useEffect) y la lógica
  // de autenticación condicional (if (!accesstoken)) para garantizar 
  // que el componente sea 100% estático para el despliegue.

  // Siempre retorna la Landing Page.
  return (
    <div className="container-fluid p-0">
      <Landing />
    </div>
  )
}

export default App