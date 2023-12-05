import styled from "@emotion/styled";
import axios from "axios";
import { useState } from "react";


const MapPage = ()=>{
  let [axiosPostList, setAxiosPostList] = useState([]);
  let [fetchPostList, setFetchPostList] = useState([]);

  let ar = [10, 20, 30];
  let res = ar.map((element, index, array)=>{
    console.log('a : ', element);
    console.log('b : ', index);
    console.log('c : ', array);
    return element * 3;
  });
  console.log(res);

  let ar2 = [<h2 key={10}>제목1</h2>, <h2 key={500}>제목2</h2>, <p key={1}>안녕하세요</p>]

  let todoList = [
    'javascript 공부하기', 
    'css 복습하기', 
    'html 공부하기', 
    'team project 준비하기',
    '장보기',
    '청소하기',
    '독서하기'
  ];

  let postList = [
    {
      id : 5,
      title: '백과사전',
      writer : 'test@naver.com',
      createdAt : '2023-08-08',
      updatedAt : '2023-09-01'
    },
    {
      id : 78,
      title: '네이버란 무엇인가',
      writer : 'abc@naver.com',
      createdAt : '2023-08-08',
      updatedAt : '2023-09-01'
    },
    {
      id : 465,
      title: '카카오란 무엇인가',
      writer : 'kakao@naver.com',
      createdAt : '2023-08-08',
      updatedAt : '2023-09-01'
    },
  ];
  
  // fetch('https://koreanjson.com/posts')
  // .then((response)=>{
  //   console.log('데이터 결과 가져옴!')
  //   return response.json()
  // }).then((data)=>{
  //   console.log('aaa:', data);
  //   // fetchPostList = data;
  //   setFetchPostList(data);
  // }).catch((err)=>{
  //   //오류가 났을 때 실행이 되는 공간
  //   console.log(err);
  // });
  
  // axios.get('https://koreanjson.com/posts')
  // .then((res)=>{
  //   console.log(res);
  //   console.log(res.data);
  //   // axiosPostList = res.data;
  //   setAxiosPostList(res.data);
  // }).catch((err)=>{console.log(err)})

  return(
    <>
      <h1>fetch로 가져온 배열</h1>
      {/* {fetchPostList[0]?.id} */}
      <h1>axios로 가져온 배열</h1>
      {/* {axiosPostList} */}
      <h1>할일 목록입니다</h1>
      {todoList.map((element, idx)=> <div key={idx}>{element}</div>)}
      {res}
      {ar2}
      <div>javascript 공부하기</div>
      <div>css 복습하기</div>
      <div>html 공부하기</div>
      <div>team project 준비하기</div>
      <div>장보기</div>
      <div>청소하기</div>
      <div>독서하기</div>
      <h1>글목록</h1>
      <WriteWrap>
        <WriteRow>
          <p>No</p>
          <p>제목</p>
          <p>작성자</p>
          <p>작성일</p>
          <p>수정일</p>
        </WriteRow>
        { postList.map((e, idx)=>(
        <WriteRow key={e.id}>
          <p>{idx + 1}</p>
          <p>{e.title}</p>
          <p>{e.writer}</p>
          <p>{e.createdAt}</p>
          <p>{e.updatedAt}</p>
        </WriteRow>
        ))}
      </WriteWrap>
    </>
  );
}

const WriteWrap = styled.div`
  background-color: skyblue;
  border-radius: 20px;
  box-shadow: 3px 4px 12px rgba(0,0,0,0.08);
  width: 80%;
  margin: 0 auto;
  padding: 10px 20px;
`;

const WriteRow = styled.div`
  display: flex;

  & p {
    text-align: center;
    flex-grow: 1;
  }

`;

export default MapPage;