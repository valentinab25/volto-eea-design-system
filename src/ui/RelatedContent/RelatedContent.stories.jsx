import React from 'react';
import RelatedContent from './RelatedContent';
import { Container, Tab } from 'semantic-ui-react';

export default {
  title: 'Components/Related Content',
  component: RelatedContent,
  argTypes: {},
};

const Template = (args) => (
  <Container>
    <RelatedContent>
      <RelatedContent.Grid
        publicationCards={args.publicationCards}
      ></RelatedContent.Grid>
      <RelatedContent.Button showButton={args.showButton}>
        {args.buttonText}
      </RelatedContent.Button>
    </RelatedContent>
  </Container>
);

export const DefaultEven = Template.bind({});
DefaultEven.args = {
  publicationCards: [
    {
      tag: 'Publication',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      href: '/#',
    },
    {
      tag: 'Publication',
      description: 'Leo fermentum sollicitudin suspendisse iaculis feugiat.',
      href: '/#',
    },
    {
      tag: 'Publication',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. ',
      href: '/#',
    },
    {
      tag: 'Publication',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. ',
      href: '/#',
    },
  ],
  buttonText: 'See All',
  showButton: true,
};

DefaultEven.argTypes = {
  publicationCards: {
    description: 'publication cards data',
    table: {
      type: {
        summary: 'Object',
      },
      defaultValue: {
        summary: '',
      },
    },
  },
  buttonText: {
    description: 'related content button text',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: '',
      },
    },
  },
  showButton: {
    description: 'show/hide related content button',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: 'false',
      },
    },
  },
};

export const DefaultOdd = Template.bind({});
DefaultOdd.args = {
  publicationCards: [
    {
      tag: 'Publication',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      href: '/#',
    },
    {
      tag: 'Publication',
      description: 'Leo fermentum sollicitudin suspendisse iaculis feugiat.',
      href: '/#',
    },
    {
      tag: 'Publication',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. ',
      href: '/#',
    },
  ],
  buttonText: 'See All',
  showButton: true,
};

DefaultOdd.argTypes = {
  publicationCards: {
    description: 'publication cards data',
    table: {
      type: {
        summary: 'Object',
      },
      defaultValue: {
        summary: '',
      },
    },
  },
  buttonText: {
    description: 'related content button text',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: '',
      },
    },
  },
  showButton: {
    description: 'show/hide related content button',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: 'false',
      },
    },
  },
};

const TabTemplate = (args) => (
  <RelatedContent>
    <RelatedContent.Grid
      publicationCards={args.publicationCards}
    ></RelatedContent.Grid>
    <RelatedContent.Button showButton={args.showButton}>
      {args.buttonText}
    </RelatedContent.Button>
  </RelatedContent>
);

function TabWithRelatedContent({ panes }) {
  let panesToUse = [];
  if (panes) {
    panesToUse = panes.map((pane) => {
      let args = {
        publicationCards: pane.publicationCards,
        buttonText: pane.buttonText,
        showButton: pane.showButton,
      };
      return {
        menuItem: pane.menuItem,
        render: () => <Tab.Pane>{TabTemplate(args)}</Tab.Pane>,
      };
    });
  }

  return (
    <Container>
      <Tab
        panes={panesToUse}
        menu={{
          secondary: true,
          pointing: true,
        }}
      />
    </Container>
  );
}

export const RelatedContentInTab = (args) => (
  <TabWithRelatedContent {...args}></TabWithRelatedContent>
);
RelatedContentInTab.args = {
  panes: [
    {
      menuItem: 'Briefings',
      publicationCards: [
        {
          tag: 'Publication',
          description:
            'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
          href: '/#',
        },
      ],
      buttonText: 'See All',
      showButton: true,
    },
    {
      menuItem: 'News and articles',
      publicationCards: [
        {
          tag: 'Publication',
          description:
            'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
          href: '/#',
        },
        {
          tag: 'Publication',
          description:
            'Leo fermentum sollicitudin suspendisse iaculis feugiat.',
          href: '/#',
        },
      ],
      buttonText: 'See All',
      showButton: true,
    },
    {
      menuItem: 'Publications',
      publicationCards: [
        {
          tag: 'Publication',
          description:
            'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
          href: '/#',
        },
        {
          tag: 'Publication',
          description:
            'Leo fermentum sollicitudin suspendisse iaculis feugiat.',
          href: '/#',
        },
        {
          tag: 'Publication',
          description:
            'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. ',
          href: '/#',
        },
      ],
      buttonText: 'See All',
      showButton: true,
    },
    {
      menuItem: 'See also',
      publicationCards: [
        {
          tag: 'Publication',
          description:
            'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
          href: '/#',
        },
        {
          tag: 'Publication',
          description:
            'Leo fermentum sollicitudin suspendisse iaculis feugiat.',
          href: '/#',
        },
        {
          tag: 'Publication',
          description:
            'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. ',
          href: '/#',
        },
        {
          tag: 'Publication',
          description:
            'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. ',
          href: '/#',
        },
      ],
      buttonText: 'See All',
      showButton: true,
    },
  ],
};

RelatedContentInTab.argTypes = {
  panes: {
    description: 'tab menu items and content data',
    table: {
      type: {
        summary: 'Object',
      },
      defaultValue: {
        summary: '',
      },
    },
  },
};
