import Header from "./components/header/Header.jsx"; //importando o componente Header.jsx

function App() {
  return (
    <>
      {/* Chamando o componente Header para ser renderizado na página */}
      <Header />

      <main>
        <h2>Eu sou a main</h2>

        <img
          src="https://cdn-icons-png.flaticon.com/256/2554/2554896.png"
          alt="Carro 1"
        />

        <img
          src="https://images.vexels.com/media/users/3/139439/isolated/lists/53b5830244f44bc2422d22247a28fe6d-corridas-de-carros-antigos.png"
          alt="Carro 2"
        />

        <img
          src="https://grupomassei.com.br/wp-content/uploads/2022/12/icone-1.webp"
          alt="Carro 3"
        />
      </main>

      <footer>
        <p>Para fins de estudo</p>
      </footer>
    </>
  );
}

export default App;
