import React from "react";
import './component.css'

function Teacher(props) {
  return(
  <div className="wrapper">
    <div className="img-box">
      <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MjlfOTAg%2FMDAxNjE5NjIyMDU0MjI0.90PiV7GNBb7raHyU7rvUHB8p2rxQXfw2LqAiJ8Mdf94g.CfXv8_mWkxdvunRzFnAQaW0hdFNZAX-Sy8wGz6_e_vAg.JPEG.wisdom0660%2FIMG_6488.JPG&type=sc960_832" alt="userimg" />
    </div>
    
    <div className="content-container">
      <span className="name-text">이예진{props.name}</span>
      <span className="comment-text">라라라랄라라라{props.comment}</span>
    </div>
    
  </div>

  )
}

export default Teacher ;