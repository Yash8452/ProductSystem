import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <div className="text-center m-1 p-4">
                <h3>Admin panel</h3>
                <ul className="list-group">
                    <NavLink to="/dashboard/create-product" className="list-group-item " aria-current="true">Create a product</NavLink>
                    <NavLink to="/dashboard/list-product" className="list-group-item " >=list-product=</NavLink>
                    <NavLink to="/dashboard/view-product" className="list-group-item " >view products</NavLink>
                    

                </ul>
            </div>
        </>
    )
}

export default Menu