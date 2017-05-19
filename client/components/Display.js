import React from 'react';
import axios from 'axios';

const Detail = (props) => {

    return (
      <div>
        <div style={divStyle} id="detaildefault">
          <h1>{props.roomDetail.roomDesc}</h1>
          <p style={textStyle}>{props.roomDetail.desc}</p>
          <button onClick={() => {
            axios.post('http://localhost:3000/collect', { userId: props.user.id, id: props.roomDetail._id })
              .then((response) => {
                if (response.data === "Invalid username or password") return;
                console.log('sent')
              })
          }}>Start This Collection</button>
        </div>
      </div>
    )
};

export default Detail;
