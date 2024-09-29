import React from 'react'
import { Link } from 'react-scroll'

const HeaderItem = (props) => {
  return (
    <div>
        <Link activeClass="active" spy={true} smooth={true} offset={props.offset} duration={500} to={props.to}>
          <span className={`${props.activeSection === props.to ? "text-blue-300" : "text-white hover:text-gray-900"}`} >
            {props.content}
          </span>
        </Link>
    </div>
  )
}

export default HeaderItem
