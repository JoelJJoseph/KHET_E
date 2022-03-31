import React from 'react'
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
           <title>{title}</title> 
           <meta name='description' content={description} />
           <meta name='keyword' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome To Khet-E',
    description: 'Agriclutural website by The Department of Agriculture (DoA)  ',
    keywords: 'farmers, Khet-E, department of agriculture, agricultural science'
}

export default Meta
