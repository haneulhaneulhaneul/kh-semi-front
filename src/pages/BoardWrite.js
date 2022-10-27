import Footer from "../components/Footer"
import Header from "../components/Header"
import { Link } from "react-router-dom";

const BoardWrite = () => {

  return(
    <>
    <Header />
      <div className="board-category">
         <select name="category">
          <option value="자유글">자유글</option>
          <option value="양도/교환">양도/교환</option>
          <option value="테마추천">테마추천</option>
          <option value="방탈출팁">방탈출팁</option>
        </select>
      </div>
      <div className="title">
        <input type={text} placeholder="제목을 입력하세요"></input>
      </div>
      <div>
        <input type={text} placeholder="내용을 입력하세요"></input>
      </div>
      <button className="write-push">작성하기</button>
    <Footer />
    </>
  )
}
import default BoardWrite