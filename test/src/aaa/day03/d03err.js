import {useRouteError} from "react-router-dom";

const ErrorPage = ()=>{
  // 함수 실행 결과는 객체
  // 오류에 대한 다양한 정보들이 들어있는 객체 
  // statusText 혹은 message 등등의 key값이 있는 객체
  
  let aaa = useRouteError();

  return (
    <div>
      <h1>죄송합니다! 해당 페이지는 찾을 수 없어요</h1>
    </div>
  );
}

export default ErrorPage;
