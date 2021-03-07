import React from 'react';
import PropTypes from 'react';

function Food ({name, picture}) {
  return (
  <div>
    <h2>I Love {name}.</h2>
    <img width="300" height="150" src={picture} alt={name} />
  </div>
  )
}

const foodILike = [
  {
    id:1,
    name: "kimchi", 
    image:"https://img.hankyung.com/photo/201910/01.20660060.1.jpg",
    rating: 5
  },
  { 
    id:2,
    name: "smagiopsal", 
    image:"http://www.pigpeople.net/data/photos/20170206/art_14863900198623_179900.jpg",
    rating: 5
  },
  { 
    id:3,
    name: "gyul", 
    image:"https://mblogthumb-phinf.pstatic.net/MjAxOTAxMjFfMTUw/MDAxNTQ4MDU1MzExNzY1.tTPgV7Y53CxgWw3856U1gJ0RxXIhhAlsDSXk9vjpLlIg.L8_fRbMx34kjXImdPY-6P7s_RAzLHtFcctDCS_KnV9kg.JPEG.kbsomang/SE-6a907ef0-c480-467a-a671-33efd0960a71.jpg?type=w800",
    rating: 4
  },
  { 
    id:4,
    name: "podo", 
    image:"https://www.enewstoday.co.kr/news/photo/202009/1412943_472619_358.jpg",
    rating: 5
  },
];
function App() {
  return (
    <div>
      {/*맵은 아이템별로 펑션을 호출한다*/}    
      {foodILike.map( dish => <Food key ={dish.id} name = {dish.name}  picture = {dish.image}/> )}
      

    </div>  
    );
} 
