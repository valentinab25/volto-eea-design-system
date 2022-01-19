import React from 'react';
import { Image } from 'semantic-ui-react';

export default {
  title: 'Components/Media Container/Image',
  component: Image,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: [
        'mini',
        'tiny',
        'small',
        'medium',
        'large',
        'big',
        'huge',
        'massive',
      ],
      description: 'an image can vary in size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ' "" ' },
      },
    },
    spaced: {
      control: { type: 'inline-radio' },
      options: ['left', 'right'],
      description:
        'an image can specify that it needs an additional spacing to separate it from nearby content',
      table: {
        type: { summary: 'bool|enum' },
        defaultValue: { summary: ' "" ' },
      },
    },
    floated: {
      control: { type: 'inline-radio' },
      options: ['left', 'right'],
      description: 'an image can sit to the left or right of other content',
      table: {
        type: { summary: 'enum' },
        defaultValue: { summary: ' "" ' },
      },
    },
    src: {
      description: 'Path or Url of the image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ' "" ' },
      },
    },
  },
};

export const Default = (args) => <Image {...args} />;

Default.args = {
  src: 'https://www.eea.europa.eu/logo.jpg',
};

export const Link = (args) => <Image {...args} />;

Link.args = {
  src: 'https://www.eea.europa.eu/logo.jpg',
  size: 'small',
  as: 'a',
  href: 'https://www.eea.europa.eu/logo.jpg',
  hidden: false,
  disabled: false,
  avatar: false,
  bordered: false,
  fluid: false,
  rounded: false,
  circular: false,
  centered: false,
  spaced: false,
  floated: 'left',
};

Link.argTypes = {
  hidden: {
    description: 'an image can be hidden',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  disabled: {
    description: 'an image can show that it is disabled and cannot be selected',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  avatar: {
    description: 'Path or Url of the image',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: ' "" ' },
    },
  },
  bordered: {
    description:
      'an image may include a border to emphasize the edges of white or transparent content',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  fluid: {
    description: 'an image can take up the width of its container',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  rounded: {
    description: 'an image may appear rounded',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  circular: {
    description: 'an image may appear circular',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  centered: {
    description: 'an image can appear centered in a content block',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  as: {
    description: 'an element type to render as (string or function)',
    table: {
      type: { summary: 'elementType' },
      defaultValue: { summary: 'img' },
    },
  },
  href: {
    description: 'renders the Image as an <a> tag with this href',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: ' "" ' },
    },
  },
};

Link.storyName = 'Link Image';

export const Playground = (args) => <Image {...args} />;

Playground.args = {
  src: 'https://www.eea.europa.eu/logo.jpg',
  size: 'small',
  hidden: false,
  disabled: false,
  avatar: false,
  bordered: false,
  fluid: false,
  rounded: false,
  circular: false,
  centered: false,
  spaced: false,
  floated: 'left',
};

Playground.argTypes = {
  hidden: {
    description: 'an image can be hidden',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  disabled: {
    description: 'an image can show that it is disabled and cannot be selected',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  avatar: {
    description: 'Path or Url of the image',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: ' "" ' },
    },
  },
  bordered: {
    description:
      'an image may include a border to emphasize the edges of white or transparent content',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  fluid: {
    description: 'an image can take up the width of its container',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  rounded: {
    description: 'an image may appear rounded',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  circular: {
    description: 'an image may appear circular',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  centered: {
    description: 'an image can appear centered in a content block',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
};
