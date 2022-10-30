import axios from "axios";
const HEADER = 'application/json';
const KH_DOMAIN = "http://localhost:8090/KH_Semi_/";

const Api = {
    // 게시글 조회
    BoardRead: async function() {
        const regCmd = {
            cmd : "FBoardList"
        }
        return await axios.post(KH_DOMAIN + "BoardReadServlet", regCmd, HEADER);
    },

    // 게시글 작성
    boardCreate: async function(fb_category, fb_title, fb_content) {
        const boardObj = {
            fb_category : fb_category,
            fb_title : fb_title,
            fb_content : fb_content,
        };
        return await axios.post(KH_DOMAIN + "BoardCreateServlet", boardObj, HEADER);
    },

    // 게시글 수정(작성자 id 일치 확인)
    boardUpdate: async function(fb_user_id) {
        const idCheck = {
            fb_user_id: fb_user_id,
        }
        return await axios.post(KH_DOMAIN + "BoardUpdateServlet", idCheck, HEADER);
    },

    // 게시글 삭제
    boardDelete: async function(fb_user_id) {
        const idCheck = {
            fb_user_id: fb_user_id,
        }
        return await axios.post(KH_DOMAIN + "BoardDeleteServlet", idCheck, HEADER);
    },

    // 댓글 조회
    commentRead: async function() {
        const boardCmd = {
            cmd : "boardRead"
        }
        return await axios.post(KH_DOMAIN + "CommentReadServlet", boardCmd, HEADER);
    },

    // 댓글 작성
    commentCreate: async function(comment_user_id, comment_id, comment_content, comment_c_date, comment_u_date, comment_category) {
        const commentObj = {
            comment_user_id : comment_user_id,
            comment_id : comment_id,
            comment_content : comment_content,
            comment_c_date : comment_c_date,
            comment_u_date : comment_u_date,
            comment_category : comment_category,
            
        };
        return await axios.post(KH_DOMAIN + "CommentCreateServlet", commentObj, HEADER);
    },

    // 댓글 수정(작성자 id 일치 확인)
    commentUpdate: async function(comment_user_id) {
        const idCheck = {
            comment_user_id: comment_user_id,
        }
        return await axios.post(KH_DOMAIN + "CommentUpdateServlet", idCheck, HEADER);
    },

    // 댓글 삭제
    commentDelete: async function(comment_user_id) {
        const idCheck = {
            comment_user_id: comment_user_id,
        }
        return await axios.post(KH_DOMAIN + "CommentDeleteServlet", idCheck, HEADER);
    }
}
export default Api;