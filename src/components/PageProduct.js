//import React from 'react'
import React, {useContext} from 'react'
import {Database} from './Context'
import {useParams} from 'react-router-dom'
import '../css/PageProduct.css'

const PageProduct = () => {
    
    let productList = useContext(Database)

    const {slug} = useParams()

    const prod = productList.find((prod) => prod.slug === slug) || productList[0]

    return (
        <article className="prodPage">
            <div  className="prodWrap">
                <div className="prodImg" style={{backgroundImage: `url("${prod.image}")`}} />
                <div className="prodDesc">
                    <div>
                        <h3> {prod.name} </h3>
                        <div> <b> {prod.price} </b> </div>
                    </div>
                    <data value={prod.price}>
                        <div> Color: <span>{prod.color}</span> </div>
                        <div> Size: <span>{prod.size}</span> </div>
                    </data>
                    <p>{prod.desc}</p>
                </div>
            </div>
        </article>
    )
}

export default PageProduct