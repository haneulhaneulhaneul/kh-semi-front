import { useState, useEffect } from 'react';
import Api from '../../api/Api';
// import '../App.css'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';


const FBoardRead = () => {
  const [FBoardList, setFBoardList] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const BoardData = async () => {
      setLoading(true);
      try {
        const response = await Api.FBoardList();
        setFBoardList(response.data);
        console.log(response.data)
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    BoardData();
  }, []);

  // 추후 에니메이션으로 변경 예정
  if (loading) {
    return <p>로딩중.. 잠시만 기다려주세요</p>
  }

  return (
    <div className="BoardListTable">
      <Table class="table table-striped">
        <thead>
          <tr>
            <th>분류</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {console.log(FBoardList)}
          {FBoardList && FBoardList.map((list) => (
            <tr key={list.fb_id}>
              <td>{list.fb_category}</td>
              <td>{list.fb_title}</td>
              <td>{list.fb_user_id}</td>
              <td>{list.fb_c_date}</td>
              <td>{list.fb_hit}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default FBoardRead;