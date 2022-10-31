import './App.css';
// import FreeBoardRead from './pages/BoardRead';
import FreeBoardWrite from './pages/BoardWrite';
import FreeBoardMain from './pages/BoardMain/BoardMain';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Layout/Header';
import Footer from './Layout/Footer';


function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<FreeBoardMain />} />    
          <Route path="/BoardWrite" element={<FreeBoardWrite />} />
          {/* <Route path="/BoardRead" element={<FreeBoardRead />} />
          <Route path="/BoardWrite" element={<FreeBoardWrite />} /> */}
        </Routes>
      </Router>
      <Footer /> 

    </>
  );
}

export default App;

// import BoardMain from './pages/BoardMain'

// function App() {
//   return (
//     <div className="App">
//       <BoardMain></BoardMain>
//     </div>
//   );
// }
// export default App;