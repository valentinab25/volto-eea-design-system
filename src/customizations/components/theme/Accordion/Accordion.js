import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

import PropTypes from 'prop-types';

export function AccordionEEA({ content, variant, ...args }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleOpenAccordion = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex2 } = activeIndex;
    const newIndex = activeIndex2 === index ? -1 : index;

    setActiveIndex(index);
  };

  return (
    <Accordion className={variant}>
      {content.map((item, index) => (
        <div>
          <Accordion.Title
            active={activeIndex === index}
            index={index}
            onClick={toggleOpenAccordion}
          >
            <Icon name="dropdown" />
            {item.title}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === index}>
            <p>{item.content}</p>
          </Accordion.Content>
        </div>
      ))}
    </Accordion>
  );
}
