import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css'
import DangerButton from '../dangerButton/dangerButton';


export default function Sidebar()
{
    const location = useLocation();
    const [path, setPath] = useState('/addProduct')

    useEffect(()=> {
        setPath(location.pathname);
    }, [location])

    return <div className="sidebar-container">
        <div className="sidebar-navigation-container">
            <h4 className='adminpanel-title'>Seen Beauty 💄 </h4>

            <Link className='linkButton' 
                style={path == "/addProduct" ? selectedButtonStyle : null} to={"/addProduct"}>Add Product</Link>

            <Link className='linkButton' 
                style={path == "/updateProduct" ? selectedButtonStyle : null} to={"/updateProduct"}>Update Product</Link>

            <Link className='linkButton' 
                style={path == "/currentOrders" ? selectedButtonStyle : null} to={"/currentOrders"}>Current Orders</Link>

            <Link className="linkButton" 
                style={path == "/completedOrders" ? selectedButtonStyle : null} to={"/completedOrders"}>Completed Orders</Link>

        </div>
        <div className="sidebar-authorization-container">
            <h3 className='user-display-name'>Yasir</h3>
            <DangerButton>Logout</DangerButton>
        </div>
    </div>
}

const selectedButtonStyle = {
    color: "white",
    backgroundColor: "rgb(0, 123, 255)"
}