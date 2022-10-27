import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import './style.css';
// import Table from 'react-bootstrap/Table';


// 게시판 메인 페이지 전부를 여기에 만듦.
// Header, Footer 컴포넌트로 불러옴
// Main(body) UI 및 기능 구현
// 게시판 제목(text 게시판 / backgroundcolor)
// 말머리별 네비바(ul > li로 구현 + 링크(href=#) 연결)
// 작성하기 버튼
// 게시판 UI(코알누 todo list 참고)
// 페이징버튼(부트스트랩)

const BoardMain = () => {

  function onClickWrite() {
    return(
      <Link to = "/BoardWrite" />
    )
  };

  return (
    <>
    <Header />
    <body className="body-style">
      <div className='board-title'>
      <h2>게시판</h2>
      </div>
      <div className='board-nav'>
        <ul>
          <li><a href="/">자유글</a></li>
          <li><a href="/">양도/교환</a></li>
          <li><a href="/">테마추천</a></li>
          <li><a href="/">방탈출팁</a></li>
        </ul>
      </div>
      <div className="board-list">
        <div className='board-write-button'>
          <button onClick={onClickWrite}>작성하기</button>
        </div>
        <div className='board-list-table'>
          {/* <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table> */}
        </div>
      </div>
    </body>
    <Footer />
    </>
  );
}
export default BoardMain