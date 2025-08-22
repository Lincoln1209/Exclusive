import React from 'react'
import { useLocation } from 'react-router'

const BreadCrumb = () => {

    let { pathname } = useLocation()
    let LocationPathName = pathname.split("/")

    return (
        <>
            <div className='flex gap-4'>
                <h2>Home</h2>
                <h2>/</h2>
                <h2>{LocationPathName}</h2>
            </div>
        </>
    )
}

export default BreadCrumb