import React from 'react';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FBoardRead from "./BoardListTable";

const FreeBoardMain = () => {

  function onClickWrite() {
    window.location.replace("/BoardWrite");
  };

  return (
    <div className="container">
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
        <div className="container-sm">
          <FBoardRead />
        </div>
      </div>
    </div>
  );
}
export default FreeBoardMain