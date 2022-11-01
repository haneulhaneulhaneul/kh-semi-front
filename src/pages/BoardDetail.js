import { useState, useEffect } from 'react';
import Api from '../api/Api';

const BoardDetail = () => {
    const getDetail = window.localStorage.getItem("Detail");
    const [boardDetail, setBoardDetail] = useState("");

    useEffect(() => {
        const boardData = async () => {

            try {
                const response = await Api.boardDetail(getDetail); // 전체 회원 조회
                setBoardDetail(response.data);
                console.log(response.data)
            } catch (e) {
                console.log(e);
            }
        };
        boardData();
    }, []);

    return (
        <div>
           {boardDetail && boardDetail.map(list => (
            <div key={list.fb_id}>
                <p>{list.fb_id}</p>
                <p>{list.fb_category}</p>
                <p>{list.fb_title}</p>
                <p>{list.fb_user_id}</p>
                <p>{list.fb_c_date}</p>
                <p>{list.fb_hit}</p>
                <p>{list.fb_content}</p>
            </div>
            
        ))}
        </div>
    )

}
export default BoardDetail;