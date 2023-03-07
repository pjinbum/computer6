import React from "react";
import "./Comment.css";

function Comment(props) {
  return (
    <div
      style={{
        width: "500px",
        height: "100px",
        border: "1px solid black",
        display: "flex",
        alignItems : 'center' ,
        borderRadius : '10px' ,
        marginTop : '5px'
      }}
    >
      <div>
        <img
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMTRfMjA4%2FMDAxNjY1NzU1NDMxOTc5.WMQncVohDyt0Jn37KXB0crINyBnzJv3_dgTGr_S-fj0g.M1N_pc7cwMGdJUJkaK5XJD3MQsH0t2IOREKIimZoEkQg.JPEG.gmlwjd5363%2FFB%25A3%25DFIMG%25A3%25DF1665755399365.jpg&type=sc960_832"
          alt="logo"
          style={{ width: "90px", height: "90px", borderRadius: "50%" }}
        />
      </div>
      <div>
        <h3>
          <strong>{props.name}</strong>
        </h3>

        <h4>{props.St}</h4>
      </div>
    </div>
  );
}

export default Comment;
