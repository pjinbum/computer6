import React from "react"




function Header(props1) {
  return(
    <div style={{width : '100vw' , height : '100px' , backgroundColor : 'aqua' , display : 'flex' , justifyContent : "space-between"}}>
      <div>
        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MjlfOTAg%2FMDAxNjE5NjIyMDU0MjI0.90PiV7GNBb7raHyU7rvUHB8p2rxQXfw2LqAiJ8Mdf94g.CfXv8_mWkxdvunRzFnAQaW0hdFNZAX-Sy8wGz6_e_vAg.JPEG.wisdom0660%2FIMG_6488.JPG&type=sc960_832" alt="로고" style={{width : '100px' , height : '100px'}} />
      </div>
      <div>
        {props1.list}
        {props1.list1}
        {props1.list2}
      </div>
    </div>

  )
  }
  










export default Header