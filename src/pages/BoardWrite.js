import './style.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React from 'react';

function FreeBoardWrite() {

  function onClickCreate() {
      // 등록 확인 모달창 띄울 예정
      window.location.replace("/");
  }

  return (
    <div className="App">
      <div className="board-title">
        <p>게시글 작성</p>
      </div>
      <div className='form-wrapper'>
          <select name="board-category">
            <option value="자유글">[자유글]</option>
            <option value="양도/교환">[양도/교환]</option>
            <option value="테마추천">[테마추천]</option>
            <option value="방탈출팁">[방탈출팁]</option>
          </select>
        <input className="title-input" type='text' placeholder='제목을 입력해주세요.' />
        <CKEditor
          editor={ClassicEditor}
          data="<p>자유롭게 작성해주세요😊</p>"
          onReady={editor => {
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <button className="submit-button" onClick={onClickCreate}>등록</button>
    </div>
  );
}

export default FreeBoardWrite;