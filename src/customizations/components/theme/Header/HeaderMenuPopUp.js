import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';

function HeaderMenuPopUp() {
  const [firstLevelHoverActive, setFirstLevelHoverActive] = useState(-1);
  const [firstLevelClickActive, setFirstLevelClickActive] = useState(-1);
  const [secondLevelHoverActive, setSecondLevelHoverActive] = useState(-1);
  const [secondLevelClickActive, setSecondLevelClickActive] = useState(-1);

  const onMenuItemClick = (e) => {
    e.preventDefault();
  };

  // const onMenuListItemClick = (level,itemIndex,sectionIndex) => {
  //   console.log(level);
  //   console.log(itemIndex);
  //   console.log(sectionIndex);
  //   // if (level === 1) {
  //   //   setFirstLevelClickActive(firstLevelClickActive === index ? -1 : index);
  //   // } else {
  //   //   setSecondLevelClickActive(secondLevelClickActive === index ? -1 : index);
  //   // }
  // }

  const onMenuLevelOneClick = (index) => {
    setFirstLevelClickActive(index);
  };

  const onMenuLevelTwoClick = (index) => {
    setSecondLevelClickActive(index);
  };

  const items = [
    {
      name: 'Item 1',
      sections: [
        { name: 'Section 1', pages: ['Page 1', 'Page 2', 'Page 3'] },
        { name: 'Section 2', pages: ['Page 1', 'Page 2', 'Page 3', 'Page 4'] },
        { name: 'Section 3', pages: [] },
      ],
    },
    {
      name: 'Item 2',
      sections: [
        { name: 'Section 1', pages: [] },
        { name: 'Section 2', pages: [] },
      ],
    },
    {
      name: 'Item 3',
      sections: [
        { name: 'Section 1', pages: [] },
        { name: 'Section 2', pages: [] },
      ],
    },
    { name: 'Item 4', sections: [] },
    { name: 'Item 5', sections: [] },
  ];

  return (
    <div id="eea-mega-menu-wrap">
      <Container>
        <nav className="eea-nav">
          <ul className="menu menu-bar">
            <li>
              <a
                href="/#"
                className="menu-link menu-bar-link"
                aria-haspopup="true"
                id="trigger"
                onClick={onMenuItemClick}
              >
                Mobile trigger
              </a>
              <ul
                className="mega-menu mega-menu--multiLevel"
                id="first-section-link"
              >
                {items.length > 0 &&
                  items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={
                        firstLevelHoverActive === itemIndex ||
                        firstLevelClickActive === itemIndex
                          ? 'active-level'
                          : null
                      }
                      onMouseEnter={() => {
                        setFirstLevelHoverActive(itemIndex);
                      }}
                      onMouseLeave={() => setFirstLevelHoverActive(-1)}
                      onTouchStart={() => onMenuLevelOneClick(itemIndex)}
                    >
                      <a
                        href="/#"
                        className="menu-link mega-menu-link mega-menu-first-level"
                        aria-haspopup={item.sections.length > 0}
                        onClick={onMenuItemClick}
                      >
                        {item.name}
                      </a>
                      {item.sections.length > 0 && (
                        <ul className="menu menu-list">
                          {item.sections.map((section, sectionIndex) => (
                            <li
                              key={sectionIndex}
                              className={
                                secondLevelHoverActive === sectionIndex ||
                                secondLevelClickActive === sectionIndex
                                  ? 'active-level'
                                  : null
                              }
                              onMouseEnter={() =>
                                setSecondLevelHoverActive(sectionIndex)
                              }
                              onMouseLeave={() => setSecondLevelHoverActive(-1)}
                              onTouchStart={() =>
                                onMenuLevelTwoClick(sectionIndex)
                              }
                            >
                              <a
                                href="/#"
                                className="menu-link menu-list-link mega-menu-second-level"
                                aria-haspopup={section.pages.length > 0}
                                onClick={onMenuItemClick}
                              >
                                {section.name}
                              </a>
                              {section.pages.length > 0 && (
                                <ul className="menu menu-list">
                                  {section.pages.map((page, pageIndex) => (
                                    <li key={pageIndex}>
                                      <a
                                        href="/#"
                                        className="menu-link menu-list-link mega-menu-third-level"
                                        onClick={onMenuItemClick}
                                      >
                                        {page}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                <br />
                <br />
                <br />
              </ul>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
}

export default HeaderMenuPopUp;
