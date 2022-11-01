import './style.css';

// 레이아웃만 구성해놓은 상태입니다. 아직 구현중.. 
const FreeBoardRead = () => {
  function onClickMain () {
    window.location.replace("/");
  }
  function onClickShare () {
    return (
      <></>
    )
  }
  // 등록 확인 모달창 구현 예정
  function onClickUpdate () {
    window.location.replace("/");
  }
   // 삭제 확인 모달창 구현 예정
  function onClickDelete () {
    window.location.replace("/");
  }

return (
  <>
  <body>
    <div className="board-read-body">
      <div className='board-title'>
        <h2>게시판</h2>
      </div>
      <div className="board-read-top-button">
        <button className="share-button" onClick={onClickShare}>공유</button>
        <button className="read-main-button" onClick={onClickMain}>목록</button>
      </div>
      <div className="read-title">글 제목</div>
      <div className="read-info">
        <div className="id">아이디</div>
        <div className="date">작성일</div>
        <div className="viewNum">조회수</div>
      </div>
      <div className="read-contents">글 내용</div>
      {/* visibility:hidden 로그인 id와 작성자 id가 일치하는 경우에만 hidden 해제*/}
      <div className="read-contents-UD">
        <button className="update" onClick={onClickUpdate}>수정</button>
        <button className="delete" onClick={onClickDelete}>삭제</button>
      </div>
      <div className="comment">
        <div className="comment-read-box">
          <p>작성자</p>
          <p>댓글 내용</p>
          <p>작성 날짜</p>
          {/* visibility:hidden 로그인id와 댓글 작성자id가 일치하는 경우에만 hidden 해제*/}
          <div className="comment-UD">
            <button className="comment-update" onClick={onClickUpdate}>수정</button>
            <button className="comment-delete" onClick={onClickDelete}>삭제</button>
          </div>
          <div className="comment-write-box">
            <p>작성자</p>
            <p>댓글 내용</p>
            <button>등록</button>
          </div>
        </div>
      </div>
    </div>
  </body>
  </>
)
}
export default FreeBoardRead