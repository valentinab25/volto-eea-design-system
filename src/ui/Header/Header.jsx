/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React from 'react'; // , { Component }
import cx from 'classnames';
import { Container, Image, Menu, Grid, Dropdown } from 'semantic-ui-react'; // Dropdown,

import closeIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/close-line.svg';
import searchIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/search-line.svg';
import burgerIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/menu-line.svg';

import HeaderSearchPopUp from './HeaderSearchPopUp';
import HeaderMenuPopUp from './HeaderMenuPopUp';

// import eeaFlag from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/eea.png';
// import globeIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/global-line.svg';
// import Logo from '../Logo/Logo';
// import PropTypes from 'prop-types';

function Header({ children }) {
  return <div className="eea header">{children}</div>;
}

const TopHeader = ({ children }) => (
  <div className="top bar">
    <Container>{children}</Container>
  </div>
);

const TopItem = ({ children, className = 'header-top-item', id }) => (
  <div className={cx('item', 'header-top-item', className)} id={id}>
    {children}
  </div>
);

const TopDropdownMenu = ({
  children,
  id,
  className,
  text,
  mobileText,
  icon,
}) => {
  // TODO: in original implementation "wrapper" class was also available with
  // "content" class
  const Component = ({ mobileText }) => (
    <Dropdown
      id={id}
      className={cx(className, {
        'mobile or lower hidden': !mobileText,
        'mobile only': !!mobileText,
      })} // !!mobileText
      text={text}
      icon={icon || 'chevron down'}
      aria-label="dropdown"
    >
      <Dropdown.Menu role="group">
        <div className="wrapper">{children}</div>
      </Dropdown.Menu>
    </Dropdown>
  );
  return (
    <>
      <Component />
      {mobileText && <Component mobileText={mobileText} />}
    </>
  );
};

const Main = ({ logo, menuItems }) => {
  const [activeItem, setActiveItem] = React.useState('');
  const [menuIsActive, setMenuIsActive] = React.useState(false);
  const [searchIsActive, setSearchIsActive] = React.useState(false);
  const [burger, setBurger] = React.useState('');

  const menuOnClick = (e, x) => {
    if (searchIsActive === true) {
      setSearchIsActive(false);
    }
    setActiveItem(x.name);
    setMenuIsActive(true);
  };

  const searchOnClick = (e, x) => {
    if (menuIsActive === true) {
      setBurger('');
      setMenuIsActive(false);
    }
    setSearchIsActive(!searchIsActive);
    setActiveItem('');
  };

  const mobileBurgerOnClick = () => {
    if (searchIsActive === true) {
      setSearchIsActive(false);
    }

    if (burger === '') {
      setBurger('open');
      setMenuIsActive(true);
    } else {
      setBurger('');
      setMenuIsActive(false);
    }
  };

  const desktopBurgerOnClick = () => {
    setMenuIsActive(false);
    setActiveItem('');
  };

  React.useEffect(() => {
    if (searchIsActive || burger === 'open' || menuIsActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [searchIsActive, burger, menuIsActive]);

  return (
    <div className="main bar">
      <Container>
        <Grid>
          <Grid.Column mobile={8} tablet={8} computer={4}>
            {logo}
          </Grid.Column>
          <Grid.Column mobile={4} tablet={4} computer={8}>
            <div className="main-menu">
              {!menuIsActive && menuItems && (
                <Menu className="eea-main-menu tablet or lower hidden" text>
                  {menuItems.map((item) => (
                    <Menu.Item
                      name={item['@id'] || item.url}
                      onClick={menuOnClick}
                      active={activeItem === item.key}
                      key={item['@id'] || item.url}
                    >
                      {item.title}
                    </Menu.Item>
                  ))}
                </Menu>
              )}
              {menuIsActive && (
                <Header.BurgerAction
                  className="desktop"
                  onClick={desktopBurgerOnClick}
                >
                  {/* <Icon name="close" /> */}
                  <Image src={closeIcon} alt="menu close icon" />
                </Header.BurgerAction>
              )}
              <div
                className="search-action"
                onClick={searchOnClick}
                role="none"
              >
                {/* <Icon name={!state.activeSearch ? 'search' : 'close'} /> */}
                <Image
                  src={!searchIsActive ? `${searchIcon}` : `${closeIcon}`}
                  alt="search button open/close"
                />
              </div>
              <Header.BurgerAction
                className={`mobile ${burger}`}
                onClick={mobileBurgerOnClick}
              >
                {/* <Icon
                  name={this.state.burger === 'open' ? 'close' : 'bars'}
                ></Icon> */}
                <Image
                  src={burger === 'open' ? `${closeIcon}` : `${burgerIcon}`}
                  alt="menu icon open/close"
                />
              </Header.BurgerAction>
            </div>
          </Grid.Column>
        </Grid>
      </Container>
      {searchIsActive && <HeaderSearchPopUp />}
      {menuIsActive && <HeaderMenuPopUp menuItems={menuItems} />}
    </div>
  );
};

const BurgerAction = (props) => (
  <div
    className={`burger-action ${props.className}`}
    role="none"
    onClick={props.onClick}
  >
    {props.children}
  </div>
);

Header.BurgerAction = BurgerAction;
Header.Main = Main;
Header.TopDropdownMenu = TopDropdownMenu;
Header.TopHeader = TopHeader;
Header.TopItem = TopItem;

export default Header;

//      <Header.Main
//        activeSearch={this.state.activeSearch}
//        activeMenu={this.state.activeMenu}
//        menuItems={this.props.menuItems}
//      >
//        <Grid>
//          <Grid.Column mobile={8} tablet={8} computer={4}>
//            <Logo id="logo"></Logo>
//          </Grid.Column>
//          <Grid.Column mobile={4} tablet={4} computer={8}>
//            <div className="main-menu">
//              {!this.state.activeMenu && this.props.menuItems && (
//                <Menu className="eea-main-menu tablet or lower hidden" text>
//                  {this.props.menuItems.map((item) => (
//                    <Menu.Item
//                      name={item['@id'] || item.url}
//                      onClick={this.menuOnClick}
//                      active={this.state.activeItem === item.key}
//                      key={item['@id'] || item.url}
//                    >
//                      {item.title}
//                    </Menu.Item>
//                  ))}
//                </Menu>
//              )}
//              {this.state.activeMenu && (
//                <Header.BurgerAction
//                  className="desktop"
//                  onClick={this.desktopBurgerOnClick}
//                >
//                  {/* <Icon name="close" /> */}
//                  <Image src={closeIcon} alt="menu close icon" />
//                </Header.BurgerAction>
//              )}
//              <div
//                className="search-action"
//                onClick={this.searchOnClick}
//                role="none"
//              >
//                {/* <Icon name={!this.state.activeSearch ? 'search' : 'close'} /> */}
//                <Image
//                  src={
//                    !this.state.activeSearch
//                      ? `${searchIcon}`
//                      : `${closeIcon}`
//                  }
//                  alt="search button open/close"
//                />
//              </div>
//              <Header.BurgerAction
//                className={`mobile ${this.state.burger}`}
//                onClick={this.mobileBurgerOnClick}
//              >
//                {/* <Icon
//                  name={this.state.burger === 'open' ? 'close' : 'bars'}
//                ></Icon> */}
//                <Image
//                  src={
//                    this.state.burger === 'open'
//                      ? `${closeIcon}`
//                      : `${burgerIcon}`
//                  }
//                  alt="menu icon open/close"
//                />
//              </Header.BurgerAction>
//            </div>
//          </Grid.Column>
//        </Grid>
//      </Header.Main>
