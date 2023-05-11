import React from 'react'

export default function ProtectedRoute({children}){
    const token=localStorage.getItem("token");
    if(token){
        return <>{children}</>
    }
    else{
        return(
            <div className='route'>da biste pristupili sajtu morate da se ulogujete.</div>
        )
    }
}