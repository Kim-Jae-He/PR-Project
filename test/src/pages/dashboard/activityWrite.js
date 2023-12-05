import { useContext, useEffect, useState } from "react";
import ActivityCU from "../../components/activity/activityCU";
import DashboardLayout from "../../components/common/layout";
import { useAuth } from "../../hooks/hooks";
import { UserContext } from "../../App";
import axios from "axios";

const ActivityWritePage = ()=>{
  useAuth();
  const [userEmail, setUserEmail] = useState('');
  const {accessToken } = useContext(UserContext);

  // 로그인 한 사람 이메일 정보 가져오기
  useEffect(()=>{
    const tmp = async()=>{
      if(!accessToken) return;
      let res = await axios.get('/api/loggedInEmail', {headers:{Authorization:`Bearer ${accessToken}`}});
      setUserEmail(res.data);
    }

    tmp();

  }, [accessToken]);

  return(
    <DashboardLayout target="활동게시판">
      <ActivityCU isUpdate={false} userEmail = {userEmail}/>
    </DashboardLayout>
  );
}

export default ActivityWritePage;