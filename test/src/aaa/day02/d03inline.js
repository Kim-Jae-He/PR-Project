
function Inline(){
  return(
    <>
      <h1 >인라인 스타일 적용방법</h1>
      <p style={
        {
          color:'red', 
          marginLeft:'20px',
          border : '1px solid black'
        }
      }>
        리액트의 jsx 중 html 태그와 이름이 똑같이 만들어져있는
        jsx에서 inline 스타일을 입히기 위해서는 
        style 속성에 적용시킬 css속성들을 객체로 대입
      </p>
    </>
  );
}

export default Inline;