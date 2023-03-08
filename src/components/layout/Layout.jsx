import { Outlet } from "react-router-dom";
import { UserStatus } from "../games/UserStatus";
import './layout.css';

export const Layout = () => {
    return (
        <>
            <div className="app">
                <div className="layout">
                    <UserStatus />
                    <Outlet />
                </div>
            </div>
        </>
    );
};