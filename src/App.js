import React, { useState } from "react";

function App() {
  //자바스크립트
  const [pets, setPets] = useState([
    { name: "줄리아", species: "cat", age: "5", id: 123456789 },
    { name: "라이언", species: "dog", age: "3", id: 987654321 },
    { name: "플로피", species: "rabbit", age: "2", id: 123123123 },
    { name: "길동", species: "cat", age: "1", id: 456456456 },
    { name: "진도", species: "dog", age: "6", id: 789789789 },
  ]);
  //자바스크립트와 태그를 같이 쓰는 문법을 JSX라고 한다(리액트 문법)
  return (
    <>
      <OurHeader />
      <LikeArea />
      <TimeArea />
      <AddPetForm setPets={setPets} />
      <ul>
        {pets.map((pet) => (
          <Pet
            key={pet.id}
            name={pet.name}
            species={pet.species}
            age={pet.age}
          />
        ))}
      </ul>
      <Footer name="부산IT교육센터" />
    </>
  );
}

function AddPetForm(props) {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    props.setPets((prev) =>
      prev.concat({ name: name, species: species, age: age, id: new Date() })
    );
    //입력창 클리어
    setName("");
    setSpecies("");
    setAge("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>새 PET 을 추가하기</legend>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
        />
        <input
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          placeholder="종류"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="나이"
        />
        <button>펫 추가</button>
      </fieldset>
    </form>
  );
}

function LikeArea() {
  const [likeCount, setLikeCount] = useState(0);
  function decreaseLike() {
    //라이크가 0 이하로 안떨어짐
    if (likeCount > 0) {
      setLikeCount(likeCount - 1);
    }
  }
  return (
    <>
      <button onClick={() => setLikeCount(likeCount + 1)}>추천하기</button>
      <button onClick={decreaseLike}>비추하기</button>
      <h2>이 페이지를 {likeCount}번 추천 했습니다!</h2>
    </>
  );
}

function Pet(props) {
  return (
    <li>
      {props.name}은 {props.species}이고 {props.age}살 이다.
    </li>
  );
}

function OurHeader() {
  return <h1 className="special">처음 앱</h1>;
}

function TimeArea() {
  //state값이 업데이트되면(setTime) 화면에 새로 렌더링 됨
  const [time, setTime] = useState(new Date().toLocaleString());
  // 1초에 한번만 시간time을 업데이트 하자.
  setTimeout(() => {
    setTime(new Date().toLocaleString());
  }, 1000);
  return <p>현재 시간 : {time}.</p>;
}

function Footer(props) {
  return <p>@카피라이트 : {props.name}</p>;
}

export default App;
