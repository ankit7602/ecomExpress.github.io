import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorMsg(props) {
    return (
   <div style={{ marginTop: "5rem" }} className="text-center">
        <img
          src="https://i.pinimg.com/originals/c7/eb/5b/c7eb5bbae52025b4d2ad9b8224022bd4.gif"
          alt="not found"
        />
        <h1 style={{ marginTop: "1rem" }}>{props.title}</h1>

        <Link
          style={{ margin: "1rem" }}
          type="button"
          className="btn apbtn"
          to={props.link}
        >
          <h6 >{props.button}</h6>
        </Link>
        </div>
        
    )
}
