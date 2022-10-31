import './App.css';
// import FreeBoardRead from './pages/BoardRead';
import FreeBoardMain from './pages/BoardMain/BoardMain';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import FreeBoardFree from './pages/BoardMain/CategoryPages/Board_Free';
import FreeBoardTrade from './pages/BoardMain/CategoryPages/Board_Trade';
import FreeBoardRecommend from './pages/BoardMain/CategoryPages/Board_Recommend';
import FreeBoardTip from './pages/BoardMain/CategoryPages/Board_Tip';
import FreeBoardWrite from './pages/BoardWrite';


function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<FreeBoardMain />}/>
            <Route path="/BoardFree" element={<FreeBoardFree />}/> 
            <Route path="/BoardTrade" element={<FreeBoardTrade />}/> 
            <Route path="/BoardRecommend" element={<FreeBoardRecommend />}/> 
            <Route path="/BoardTip" element={<FreeBoardTip />}/> 
            
          <Route path="/BoardWrite" element={<FreeBoardWrite />} />
          {/* <Route path="/BoardRead" element={<FreeBoardRead />} />
          <Route path="/BoardWrite" element={<FreeBoardWrite />} />  */}

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