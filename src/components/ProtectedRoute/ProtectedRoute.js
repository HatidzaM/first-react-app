import React from 'react'

export default function ProtectedRoute({children}){
    const token=localStorage.getItem("token");
    
    return(
        <div>ProtectedRoute</div>
    )
}