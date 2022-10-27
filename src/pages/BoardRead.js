import Footer from "../components/Footer"
import Header from "../components/Header"
import { Link } from "react-router-dom";

const BoardRead = () => {
  function onClickMain () {
    return(
      <Link to = "/BoardMain" />
    )
  }
  function onClickUpdate () {
    return (
      <></>
    )
  }
  function onClickDelete () {
    return (
      <></>
    )
  }

return (
  <>
  <Header />
  <main>
    <div>
      <div>
        <button className="share-button">공유</button>
        <button className="read-main-button" onClick={onClickMain}>목록</button>
      </div>
      <div className="read-title">글 제목</div>
      <div className="read-info">
        <div className="id"></div>
        <div className="date"></div>
        <div className="viewNum"></div>
      </div>
      <div className="read-contents">글 내용</div>
      {/* display:hidden 로그인 id와 작성자 id가 일치하는 경우에만 hidden 해제*/}
      <div className="UD">
        <div className="update" onClick={onClickUpdate}>수정</div>
        <div className="delete" onClick={onClickDelete}>삭제</div>
      </div>
      <div className="comment">
        <div className="comment-read-box">
          <p>작성자</p>
          <p>댓글 내용</p>
          <p>작성 날짜</p>
          {/* display:hidden 로그인id와 댓글 작성자id가 일치하는 경우에만 hidden 해제*/}
          <div className="comment-UD">
            <div className="comment-update" onClick={onClickUpdate}>수정</div>
            <div className="comment-delete" onClick={onClickDelete}>삭제</div>
          </div>
          <div className="comment-write-box">
            <p>작성자</p>
            <p>댓글 내용</p>
            <button>등록</button>
          </div>
        </div>

      </div>
    </div>
  </main>
  <Footer />
  </>
)
}
export default BoardRead