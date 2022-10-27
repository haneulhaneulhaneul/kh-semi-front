import './App.css';
// import BoardRead from './pages/BoardRead';
import BoardMain from './pages/BoardMain';
// import BoardWrite from './pages/BoardWrite';
import { BrowserRouter as Router, Routes} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Header />
        {/* <Route path="/" element={<BoardMain />} />
        <Route path="/BoardRead" element={<BoardRead />} />
        <Route path="/BoardWrite" element={<BoardWrite />} /> */}
        <BoardMain />
        <Footer />
      </Routes>
    </Router>
  );
}

export default App;