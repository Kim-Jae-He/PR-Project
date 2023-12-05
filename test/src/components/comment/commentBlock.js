import { useContext, useState } from "react";
import { Comment, CommentHeader, CommentItem ,CommentWriter, CommentDate, CommentBtn} from "../../styles/dashboard/activityComment.styles";
import axios from "axios";
import { UserContext } from "../../App";

const CommentBlock = (props)=>{
  const [comment , setComment] =  useState(props.comment);
  let onDeleteClick = props.onDeleteClick;
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState(comment.content);

  const {accessToken} = useContext(UserContext);

  const onUpdateComment = async()=>{
    if(accessToken === null) return;

    // express 한테 기존댓글을 수정해줘~
    try{
      let res = await axios.put('/api/comments', {
        id: comment.id,
        content
      }, {headers : {Authorization: `Bearer ${accessToken}`}});

      //res.data --> 수정완료된 댓글이 객체로 들어있다
      setIsEdit(false);
      setComment(res.data);

    }catch(err){
      alert('댓글 수정 실패...ㅜㅜ');
    }
  }

  return(
    <CommentItem >
      <CommentHeader>
          <CommentWriter>
              작성자 id : {comment.writer_email}
          </CommentWriter>
          <CommentDate>(작성일){comment.created_date}</CommentDate>
          <CommentDate>(수정일){comment.updated_date}</CommentDate>
          {comment.owner && <CommentBtn onClick={()=>onDeleteClick(comment.id)}>삭제하기</CommentBtn>}
      </CommentHeader>
      { isEdit ? 
        <input onBlur={onUpdateComment} onChange={(e)=>setContent(e.target.value)} value={content}/> 
        : <Comment onClick={()=>{
            if(comment.owner) {
              setIsEdit(true)
            }
          }}>{comment.content}</Comment>}
    </CommentItem>
  );
}

export default CommentBlock;