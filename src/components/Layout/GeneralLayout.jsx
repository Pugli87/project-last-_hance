import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderNavbar from '../Header/HeaderNavbar/HeaderNavbar';
import HeaderNavbarLogin from '../auth/HeaderNavbar/HeaderNavbarLogin';
import FruitsLogin from '../auth/Fruits/FruitsLogin';
import Fruits from '../Fruits/Fruits';
import { useDeviceDetect } from '../../hooks/deviceDetect/useDeviceDetect';
import './_GeneralLayout.scss';

const GeneralLayout = ({ children }) => {
  const location = useLocation();
  const { isMobile } = useDeviceDetect();

  const ROUTES_WHERE_NOT_SHOWN_HEADER_AUTH = [
    //rutas donde nos se ven el headerLogin
    '/diary',
    '/calculator',
  ];

  const showComponent = useMemo(() => {
    const shouldHide = ROUTES_WHERE_NOT_SHOWN_HEADER_AUTH.some(route => {
      return location.pathname === route;
    });

    return !shouldHide;
  }, [location.pathname]);

  return (
    <div className="GeneralLayout containerDefault">
      {showComponent ? (
        <>
          <div className="contentLayout">
            <HeaderNavbarLogin />
          </div>
          {!isMobile && <FruitsLogin />}
        </>
      ) : (
        <>
          <div className="contentLayout">
            <HeaderNavbar />
          </div>
        </>
      )}
      <div className="contentLayout appLayout">{children}</div>
      {!showComponent && <Fruits />}
    </div>
  );
};
export default GeneralLayout;
