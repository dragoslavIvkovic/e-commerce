import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Page404.css'


const Page404 = () => {
    return (
		<div className="notfound">
			<h1>Oops!</h1>
			<h3> <b>404</b> - PAGE NOT FOUND</h3>
			<Link to="/">Go back Shop List</Link>
		</div>
    )
}

export default Page404