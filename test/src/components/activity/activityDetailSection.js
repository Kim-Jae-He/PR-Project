import { useContext, useEffect, useState } from "react";
import { BoardContent, BoardDetailWrap, BoardInfoWrap, BoardTitle, WriteBtn } from "../../styles/dashboard/activityDetail.styles";
import axios from "axios";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";


const ActivityDetailSection = (props)=>{

    const [activity , setActivity] = useState(null);
    
    const {accessToken} = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(()=>{
        let tmp = async ()=>{
            if(accessToken === null) return;
            try{
                let res = await axios.get(`/api/activities/${props.activityId}`, {
                    headers:{Authorization:`Bearer ${accessToken}`}
                });

                setActivity(res.data);
                // 조회수 증가
                

            }catch(err){
                console.log(err);
                alert('오류가 발생했어요');
            }
        }

        tmp();
    }, [props.activityId, accessToken]);

    const onLikeClick = async ()=>{
        if(activity.liked === 'yes'){
            try{
                await axios.delete('/api/like', {
                    data:{id:activity.id},
                    headers:{Authorization:`Bearer ${accessToken}`}
                });
                setActivity({ ...activity , liked:'no', activity_like : activity.activity_like - 1});

            }catch(err){
                console.log(err);
                alert('좋아요 현재 수정 불가');
            }
        }else{
            try{
                await axios.post('/api/like', 
                    {id:activity.id}, 
                    {headers:{Authorization:`Bearer ${accessToken}`}}
                );
                setActivity({...activity , liked:'yes', activity_like:activity.activity_like+1});

            }catch(err){
                console.log(err);
                alert('좋아용오류');
            }
        }
    }

    let onDeleteClick = async ()=>{
        try{
            await axios.delete(`/api/activities/${props.activityId}`, {headers:{Authorization : `Bearer ${accessToken}`}}) 
            navigate('/activity', {replace:true});
        }catch(err){
            alert('삭제 실패ㅜㅜ');
        }
    }

    return(
        <section>
            <BoardDetailWrap>
                <BoardTitle>
                    {activity?.title}
                    <div style={{display:'flex', alignItems:'baseline'}}>
                        <span>좋아요:{activity?.activity_like} </span>
                        <span onClick={onLikeClick}>
                            {activity?.liked === 'yes' ? <FavoriteIcon style={ {color:'red'} }/> : <FavoriteBorderIcon/>}
                        </span>
                    </div>
                </BoardTitle>
                <BoardInfoWrap>
                    <p>작성자</p>
                    <p>{activity?.writer_email}</p>
                    <p>조회수</p>
                    <p>{activity?.activity_view}</p>
                </BoardInfoWrap>
                <BoardInfoWrap>
                    <p>작성일자</p>
                    <p>{activity?.created_date}</p>
                    <p>수정일자</p>
                    <p>{activity?.updated_date}</p>
                </BoardInfoWrap>
                <BoardContent>
                    {activity?.img_url.map((img)=><div>
                            <img style={{width:'100%'}} src={img} alt="이미지"/>
                        </div>)}
                    {activity?.content}
                </BoardContent>
                {
                    activity?.owner &&
                    <div style={{alignSelf:'flex-end', display:'flex', columnGap:'10px'}}>
                    <WriteBtn>수정하기</WriteBtn>
                    <WriteBtn onClick={onDeleteClick} style={{backgroundColor:'red'}}>삭제하기</WriteBtn>
                </div>}
            </BoardDetailWrap>
        </section>
    );
}

export default ActivityDetailSection;