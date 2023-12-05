import { useMove } from "../hooks/hooks";

const IndexPage = ()=>{
  
  // console.log(value);
  let moveToLoginPage = useMove('/login');
  let moveToJoinPage = useMove('/join');
  let moveToCareerPage = useMove('/career');

  return(
    <>
      <h1>메인페이지 입니다</h1>
      <button onClick={moveToLoginPage}>로그인하기</button>
      <button onClick={moveToJoinPage}>회원가입하기</button>
      <button onClick={moveToCareerPage}>커리어</button>
    </>
  )
}

export default IndexPage;