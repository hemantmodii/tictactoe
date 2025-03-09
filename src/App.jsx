import Field from "./Field"
import Footer from "./Footer"

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-6xl font-semibold text-green-600 text-center py-2 my-4 drop-shadow-lg">Tic Tac Toe</h1>
      <Field/>
      <Footer/>
    </div>
  )
}

export default App
