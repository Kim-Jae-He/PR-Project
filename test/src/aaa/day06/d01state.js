import styled from "@emotion/styled";
import { useState } from "react";

const AWrap = styled.div`
  border: 3px solid red;
`;

const A = ()=>{
  const [msg, setMsg] = useState('메시지');

  const tmp = (e)=>{
    // change 이벤트가 발생하면 실행되는 함수
    console.log('change이벤트 발생함');
    // let myInput = document.querySelector('input');
    // setMsg(myInput);
    // abc에는 무엇이 들어있을까?
    console.log(e);
    // abc.target에는 이벤트가 발생한 태그가 들어있음(input태그)
    // 우리가 입력한 값은 input태그.value에 들어있음 
    console.log(e.target.value);

    setMsg(e.target.value);
  }

  // 엔터키가 입력된다면 실행시킬 함수 
  const enterPressed = (e)=>{
    console.log('onKeyDown이벤트 발생함');
    // 엔터가 눌렸을 때
    console.log(e); 
    //setMsg('메시지');
    // e.keyCode 엔터는 13이 들어있음
    if(e.keyCode === 13){
      setMsg('엔터클릭됨');
    }else if(e.keyCode === 27){
      console.log('esc눌림');
      e.target.blur();
    }

  }

  return (
    <AWrap>
      <h1>A컴포넌트영역입니다</h1>
      <input onChange={tmp} onKeyDown={enterPressed}/>
      <p>{msg}</p>
    </AWrap>
  );
}



const StatePage = ()=>{
  // let number = 0;
  const [number, setNumber] = useState(0);

  // 함수
  const normalClick = (ddd)=>{
    console.log('기본 버튼이 클릭됨!');
    console.log(ddd);
  }

  const plusClick = ()=>{
    console.log('클릭전 number:', number);
    // number = 100;
    setNumber(number + 1);
    console.log('클릭후 number:', number);
  }

  const minusClick = ()=>{
    setNumber(number - 1);
  }

  return(
    <>
      <h1>스테이트 컴포넌트</h1>
      <h2>{number}</h2>
      <button onClick={normalClick}>기본버튼입니다</button>
      <br/>
      <button onClick={minusClick}>-</button>
      <button onClick={plusClick}>+</button>
      <A/>
    </>
  );
}



export default StatePage;