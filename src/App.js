import Container from "./components/Container/Container.js";
import NavBar from "./components/NavBar/NavBar.js";
import Main from "./components/Main/Main.js";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Favorite from "./components/Favorite/Favorite.js";
import List from "./components/List/List.js";
import WrongAdress from "./components/WrongAdress/WrongAdress.js";
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Main>
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/list/:listId" element={<List />} />
            <Route path="*" element={<WrongAdress />} />
          </Routes>
        </Container>
      </Main>
    </div>
  );
};

export default App;
