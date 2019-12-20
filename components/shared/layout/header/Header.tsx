import * as React from 'react';
import Top from './top/Top';
import Navbar from './navbar/Navbar';
import NavbarMobile from './navbar/NavbarMobile';
import { useRouter } from 'next/router';
import { SportsEnum } from '../../../../common/sportenum';

const Header: React.FunctionComponent = () => {
  const { pathname } = useRouter();
  const href = pathname.split('/')[1];
  const sport = href === SportsEnum.BASKETBALL || href === SportsEnum.ESPORTS || href === SportsEnum.SOCCER ? href : SportsEnum.SOCCER;

  return (
    <header>
      <Top />
      <Navbar sport={sport} />
      <NavbarMobile sport={sport} />
    </header>
  );
};

export default Header;
