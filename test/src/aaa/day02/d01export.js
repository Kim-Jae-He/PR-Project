let a = 10;


function tmp(){
  return '배상엽';
}

function Test(){
  return(
    <>
      <h1>Test컴포넌트</h1>
      <p>Test컴포넌트를 만들었습니다</p>
    </>
  );
}

function Test2(){
  return(
    <h1>default로 export한 컴포넌트</h1>
  );
}

// 다른 파일에서 함수, 변수, 컴포넌트를 사용할
// 수 있도록 export 하기 
export {a, tmp, Test};
export default Test2;