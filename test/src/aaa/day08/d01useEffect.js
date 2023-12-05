import { useEffect, useState } from "react";

const Child = ( props )=>{
  useEffect(()=>{
    console.log(props.componentTitle, '번 자식이 만들어짐')
    return ()=>{ 
      console.log(props.componentTitle, '번 자식 삭제!');
      // 부모의 state변수 cnt 를 0으로 변경
      // setCnt
      props.setCnt(0);
      // 부모의 state변수 msg를 '기본값' 으로 변경
      // setMsg
      props.setMsg('기본값');
    }
  }, []);
  
  const onRemoveClick = (number)=>{
    console.log(number);
    // props.abc([ 1, 2 ])
    let res = props.ar.filter((e)=> e !== number);
    props.abc(res);
  }

  // const wrapFunc = ()=>{
  //   onRemoveClick(props.componentTitle);
  // }
  return(
    <>
      <h1>{props.componentTitle}번자식 컴포넌트입니다</h1>
      <button onClick={()=>onRemoveClick(props.componentTitle)} >삭제!</button>
      <button onClick={onRemoveClick} >삭제!</button>
    </>
  )
}

const UseEffectPage = ()=>{
  const [cnt , setCnt] = useState(0);
  const [msg, setMsg] = useState('기본값');

  // 해당 컴포넌트가 rendering 될때마다 실행이 된다
  console.log('안녕하세요');

  useEffect(()=>{
    console.log('의존성 배열이 없다면?')
  })

  useEffect(()=>{
    console.log('UseEffectPage가 최초 렌더링 될때만 실행');
  } , []);

  useEffect(()=>{
    console.log('cnt가 바뀌어서 다시 그려질때마다');
    return ()=>{console.log('cnt unmount')}
  }, [cnt]);

  useEffect(()=>{
    console.log('msg가 바뀔때마다 실행');
  }, [msg]);

  useEffect(()=>{
    console.log('cnt 혹은 msg 둘중 하나만 마뀔때마다 실행');
  }, [cnt, msg]);

  useEffect(()=>{
    return ()=>{
      console.log('unmount될때 실행(기존컴포넌트가 사라질때)')
    }
  }, []);

  const [ar, setAr] = useState([1, 2, 3]);

  return(
    <>
      {/* <Child abc={setAr} componentTitle={1}/>
      <Child abc={setAr} componentTitle={2}/>
      <Child abc={setAr} componentTitle={3}/> */}
      {ar.map((e)=> <Child key={e} ar={ar} setCnt={setCnt} setMsg={setMsg}  abc={setAr} componentTitle={e} /> )}
      <h1>UseEffectPage</h1>
      <h1>{cnt}</h1>
      <button onClick={()=> setCnt(cnt-1) }>-</button>
      <button onClick={()=> setCnt(cnt+1) }>+</button>
      <p>{msg}</p>
      <input onChange={(e)=>setMsg(e.target.value)} />
    </>
  )
}

export default UseEffectPage;