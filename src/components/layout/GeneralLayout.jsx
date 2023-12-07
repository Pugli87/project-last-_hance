import HeaderNavbar from "components/HeaderNavbar/HeaderNavbar";
import HeaderNavbarLogin from "components/auth/HeaderNavbar/HeaderNavbarLogin";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import './_GeneralLayout.scss'
import FruitsLogin from "components/auth/Fruits/FruitsLogin";

const GeneralLayout = ({ children }) => {
    const location = useLocation();

    const ROUTES_WHERE_NOT_SHOWN_HEADER_AUTH = [ //rutas donde nos se ven el headerLogin 
        "/diary",
        "/calculator",
    ];


    const showComponent = useMemo(() => {
        const shouldHide = ROUTES_WHERE_NOT_SHOWN_HEADER_AUTH.some((route) => {
            return location.pathname === route;
        });

        return !shouldHide;
    }, [location.pathname]);

    return (
        <div className="GeneralLayout">
            {showComponent ?    
                <>
                    <div className='contentLayout'>
                        <HeaderNavbarLogin />
                    </div>
                    <FruitsLogin />
                </> : 
                <>
                    <div className='contentLayout'>
                        <HeaderNavbar />
                    </div>
                </>}
            <div className='contentLayout'>{ children }</div>
        </div>
    );
};
export default GeneralLayout;
