import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';

function MainLayout() {
    const location = useLocation();
    const pageName = location.pathname.substring(1) || 'Home';
    return (

        <div style={layoutStyle}>
            <div style={{ display: 'flex', flex: 1 }}>
                <main style={mainStyle}>
                <h2>{pageName.charAt(0).toUpperCase() + pageName.substring(1)}</h2>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor:' rgb(144, 240, 186)'
};

const mainStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column'
}
    ;

export default MainLayout;
