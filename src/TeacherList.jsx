import React from "react";
import Comment from "./component/comment";

const coments = [
  {
    name : "이예진1",
    comment : '안녕하세요. 이예진 입니다.'
  } , 
  {
    name : "이예진2",
    comment : '리액트 재밌다 ~~~!!'
  } ,
  {
    name : "이예진3",
    comment : '리액트 재미 없어  ~~~!!'
  }
]

function TeacherList(){
 return(
  <div>
    {
      customElements.map((commentcurrent , i )=>{
        return(
          <Comment name={commentcurrentnt.name} comment = {coments.coment}/>
        )
      })
    }
  </div>
 )
}