/**
 * Breadcrumbs components.
 * @module components/theme/Breadcrumbs/Breadcrumbs
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Breadcrumb, Container, Image } from 'semantic-ui-react';

import homeIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/home-icon.svg';

const Breadcrumbs = ({ root, sections = [], icon }) => {
  return (
    <Container role="navigation" aria-label={'breadcrumbs'}>
      <Breadcrumb>
        <Link to={root || '/'} className="section" title={'Home'}>
          <Image src={homeIcon} alt="home" />
        </Link>
        {sections.length > 0 &&
          sections.map((item, index, items) => [
            <Breadcrumb.Divider icon={icon} key={`divider-${item.href}`} />,
            index < items.length - 1 ? (
              <Link key={item.key} to={item.href} className="section">
                {item.title}
              </Link>
            ) : (
              <Breadcrumb.Section key={item.key} active>
                {item.title}
              </Breadcrumb.Section>
            ),
          ])}
      </Breadcrumb>
    </Container>
  );
};

Breadcrumbs.propTypes = {
  root: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
      key: PropTypes.string,
    }),
  ).isRequired,
};

export const BreadcrumbsComponent = Breadcrumbs;

export default Breadcrumbs;
