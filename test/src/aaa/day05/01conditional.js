import styled from "@emotion/styled";
import { Button } from "@mui/material";

// 조건부 렌더링 
const ConditionalPage = ()=>{
  return (
    <>
      <h1 abc="금요일" id="홍길동" className="err">조건부 렌더링</h1>
      <MyDiv abc="1번" id='배상엽' className="err">div1입니다</MyDiv>
      <MyDiv abc="2번" id='배상엽' className="err">div2입니다</MyDiv>
      <Div2 qqq='1번'>div3입니다</Div2>
      <Div2 qqq='2번'>div4입니다</Div2>
      <Div3 bbb='1번'>div5입니다</Div3>
      <Div3 bbb='2번'>div6입니다</Div3>
      <Div4 isErr={true} >빨간색 div</Div4>
      <Div4 isErr={false}>초록색 div</Div4>
      <Div4 >isErr이 없는데?</Div4>
      <Div5 isErr>div7입니다</Div5>
      <Div5>div8입니다</Div5>
      <MyBtn>일반버튼</MyBtn>
      <MyBtn textBtn>텍스트 버튼</MyBtn>
      <MyBtn elevatedBtn>엘리베이티드 버튼</MyBtn>
      <br/>
      <Button>일반버튼</Button>
      <Button variant="outlined">outlined 버튼</Button>
      <Button variant="contained">contained 버튼</Button>
    </>
  );
}

const MyBtn = styled.button`
  cursor: pointer;
  ${(props)=> props.textBtn && {
    background : 'none',
    border : 'none',
    '&:hover': {backgroundColor:'silver'},
  }}

  ${(props)=> props.elevatedBtn && {
      backgroundColor:'skyblue',
      border: 'none',
      boxShadow: '2px 4px 12px ',
      '&:active' : {
        boxShadow: 'none'
      }
    }
  }
`;


// isErr 이 true면 hover되었을 때 red
// 아니라면 hover되었을 때 blue
const Div5 = styled.div`
  border: 3px solid black;
  width: 200px;

  ${props=>{
    return props.isErr ? 
    {'&:hover' : {backgroundColor : 'red'}} : 
    {'&:hover' : {backgroundColor : 'green'}};
  }}
`;

const Div4 = styled.div`
  border: 3px solid black;
  width: 200px;
  ${(props)=>{
    return props.isErr ? {
      backgroundColor:'red',
      color: 'blue',
    } : {
      backgroundColor:'green',
      fontWeight:'bold'
    }
  }};
`;


const Div3 = styled.div`
  border: 3px solid black;
  width: 200px;
  ${()=>{return 'background-color:red'}};
  ${(props)=>{
    return props.bbb === '1번' ? {color:'white', borderRadius:'10px', padding:'50px'} : {margin:'10px', color:'blue'}
  }}
`;

const Div2 = styled.div`
  border: 3px solid black;
  width: 200px;
  background-color: ${a=>a.qqq === '1번' ? 'red' : 'blue'};
`;

const MyDiv = styled.div`
  border: 3px solid black;
  width: 200px;
  text-align: center;
  ${ a => a.abc === '1번' ? 'background-color:red' : 'background-color:blue'};
`;

export default ConditionalPage;