import './style.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { useState } from 'react';
import Api from '../api/Api';

function FreeBoardWrite() {

  const [fb_category, setFb_Category] = useState("");
  const [fb_title, setFb_Title] = useState("");
  const [fb_content, setFb_Content] = useState("");
  const [resData, setResData] = useState(''); // 서버에서 받는 결과 데이터

  const onChangeCategory = (e) => setFb_Category(e.target.value);

  const onChangeTitle = (e) => setFb_Title(e.target.value); // 현재 이벤트가 발생한 입력창의 값을 useState에 세팅

  const onChangeContent = (contentSet) => setFb_Content(contentSet); // e.target.value 콘솔 출력시 값이 들어오지 않음

  // 등록 확인 모달창 띄울 예정
  const onClickCreate = async () => {
    try {
      const res = await Api.FBoardCreate(fb_title, fb_content, fb_category);
      setResData(res.data);
      console.log("등록 완료");
      console.log(fb_content);
      if(res.data.result === "OK") {
        window.location.replace("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  function onClickCancel() {
    alert("취소하시겠습니까?")
    window.location.replace("/");
  };

  return (
    <div className="App">
      <div className="board-title">
        <p>게시글 작성</p>
      </div>
      <form>
      <div className='form-wrapper'>
          <select name="board-category" value={fb_category} onChange={onChangeCategory}>
            <option value="자유글">[자유글]</option>
            <option value="양도/교환">[양도/교환]</option>
            <option value="테마추천">[테마추천]</option>
            <option value="방탈출팁">[방탈출팁]</option>
          </select>
        <input className="title-input" type='text' value={fb_title}  onChange={onChangeTitle} placeholder='제목을 입력해주세요.' />
        <CKEditor
          editor={ClassicEditor}
          data="<p>자유롭게 작성해주세요😊</p>"
          // onReady={editor => {
          //   console.log('Editor is ready to use!', editor);
          // }}
          // onChange={(event, editor) => {
          //   const data = editor.getData();
          //   console.log({ event, editor, data });
          // }}
          // onBlur={(event, editor) => {
          //   console.log('Blur.', editor);
          // }}
          // onFocus={(event, editor) => {
          //   console.log('Focus.', editor);
          // }}
          showToolbar={true}
          setDefaultStyle="height: auto"
          onChange={(fb_content) => {
            onChangeContent(fb_content);
          }}
          setContents={fb_content}
          setOptions={{
            buttonList: [
              [
                "bold",
                "underline",
                "italic",
                "strike",
                "list",
                "align",
                "fontSize",
                "formatBlock",
                "table",
                "image",
              ],
            ],
          }}
        />
      </div>
      <div className='write-page-button'>
        <button className="cancel-button" onClick={onClickCancel}>취소</button>
        <button className="submit-button" onClick={onClickCreate}>등록</button>
      </div>
      
      </form>
      {resData &&  resData.map(list =>(
                <>
                <p key={list.index}>분류 : {list.fb_category}</p> 
                <p key={list.index}>제목 : {list.fb_title}</p>
                <p key={list.index}>내용 : {list.fb_content}</p>
                </>
            ))}
    </div>
  );
}

export default FreeBoardWrite;