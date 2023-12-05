import { Link } from "react-router-dom";

// 나만의 컴포넌트 
function a(){
  return "배상엽";
}

function Bae(){
  // 이곳을 주석
  
  return (
    <>
      {/*주석*/}
      <h1>{a()} 컴포넌트</h1>
      <p className={a()}>내가 처음으로 만든 나만의 xml, 즉 리액트 컴포넌트입니다</p>
      <p>{a()}</p> 
      <Link to='/abc'>주소 뒤에 abc 붙여줘!</Link>
    </>
  );
}





export default Bae;