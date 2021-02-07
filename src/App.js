import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating : 4.8
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5.5
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.7
  }
];

function Food({name, picture, rating}) {
  return (
    <div>
      <h3 style ={{color : "deepskyblue"}}>I like {name}</h3>
      <h4>{rating} / 5</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

// prop 필요한 타입과 입력된 타입 비교하는 기능 추가
Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

function App() {
  return (
  <div>
    <h1>hello!!!! Brand New 2021</h1> 
    {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating ={dish.rating}/>)}
    {/* react 내부에서 사용하기 위해 key 값 입력 필요, Food 컴포넌트에서 사용하지 않아도 문제없음 */}
    {/* {console.log(foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating ={dish.rating}/>))} */}
    {/*  foodILike = 데이터 => 데이터에서 name 을 선택하여 Food 컴포넌트로 전달 */}
  </div>
  )
}

export default App;