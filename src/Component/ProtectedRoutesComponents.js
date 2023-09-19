import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
export const ProtectedRoutesComponents = () => {
 const auth = false;

 return auth ? <Outlet/> : <Navigate to="/login"/>;
}

export default ProtectedRoutesComponents