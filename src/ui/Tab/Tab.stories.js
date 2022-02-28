import React from 'react';
import { Tab } from 'semantic-ui-react';

export default {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    panes: {
      description: 'tab names and content array',
      table: {
        type: {
          summary: 'object',
        },
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
  },
};

function TabContent({
  panes,
  text,
  attached,
  borderless,
  vertical,
  fluid,
  grid,
}) {
  return (
    <Tab
      panes={panes}
      className="eea-tab"
      renderActiveOnly={false}
      menu={{
        secondary: true,
        pointing: true,
        vertical: vertical,
        fluid: fluid,
      }}
      grid={grid}
    ></Tab>
  );
}

const Template = (args) => <TabContent {...args}></TabContent>;

export const Default = Template.bind({});
Default.args = {
  panes: [
    {
      menuItem: 'Tab 1',
      pane: 'Tab 1 Content',
    },
    {
      menuItem: 'Tab 2',
      pane: 'Tab 2 Content',
    },
    {
      menuItem: 'Tab 3',
      pane: 'Tab 3 Content',
    },
    {
      menuItem: 'Tab 4',
      pane: 'Tab 4 Content',
    },
  ],
};

export const Vertical = Template.bind({});
Vertical.args = {
  vertical: true,
  fluid: true,
  grid: { paneWidth: 9, tabWidth: 2 },
  panes: [
    {
      menuItem: 'Tab 1',
      pane: 'Tab 1 Content',
    },
    {
      menuItem: 'Tab 2',
      pane: 'Tab 2 Content',
    },
    {
      menuItem: 'Tab 3',
      pane: 'Tab 3 Content',
    },
    {
      menuItem: 'Tab 4',
      pane: 'Tab 4 Content',
    },
  ],
};

Vertical.argTypes = {
  vertical: {
    description: 'vertical tab',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
  },
  fluid: {
    description: 'fluid tabs',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
  },
  grid: {
    description:
      'Shorthand props for the Grid. Only applicable to vertical menus',
    table: {
      type: {
        summary: 'object',
      },
      defaultValue: {
        summary: '{ paneWidth: 12, tabWidth: 4 }',
      },
    },
  },
};
