import React from 'react';
import { Button, Icon, Segment } from 'semantic-ui-react';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    label: { description: 'button label' },
    disabled: {
      description: 'button disabled',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    animated: {
      options: [false, true, 'fade', 'vertical'],
      control: { type: 'inline-radio' },
    },
    variant: {
      options: ['default', 'eeaPrimaryButton', 'eeaSecondaryButton'],
      control: { type: 'inline-radio' },
    },
  },
};

//Primary button
export const Primary = (args) => {
  return (
    <Button primary disabled={args.disabled}>
      {args.label}
    </Button>
  );
};
Primary.args = {
  label: 'Primary Button',
  disabled: false,
};
Primary.parameters = {
  controls: { exclude: ['animated', 'variant'] },
  hideNoControlsWarning: true,
};

//secondary Button
export const Secondary = (args) => {
  return (
    <Button secondary disabled={args.disabled}>
      {args.label}
    </Button>
  );
};
Secondary.args = {
  label: 'Secondary Button',
  disabled: false,
};
Secondary.parameters = {
  controls: { exclude: ['animated', 'variant'] },
  hideNoControlsWarning: true,
};

//secondary Button with icon
export const SecondaryWithIcon = (args) => {
  return (
    <Button
      secondary
      disabled={args.disabled}
      icon={<Icon className={args.icon}></Icon>}
      labelPosition={args.labelPosition}
      content={args.label}
    />
  );
};
SecondaryWithIcon.args = {
  label: 'Secondary Button',
  disabled: false,
  icon: 'ri-chat-3-line',
  labelPosition: 'left',
};

SecondaryWithIcon.argTypes = {
  labelPosition: {
    options: ['left', 'right'],
    control: { type: 'inline-radio' },
    description: 'button icon position',
    table: {
      defaultValue: { summary: '' },
    },
  },
  icon: {
    name: 'button icon',
    type: { name: 'string', required: false },
    defaultValue: 'chevron  right',
    options: ['ri-chat-1-line', 'ri-chat-2-line', 'ri-chat-3-line'],
    control: { type: 'select' },
    description: 'button icon',
    table: {
      defaultValue: { summary: 'ri-chat-3-line' },
    },
  },
};
SecondaryWithIcon.parameters = {
  controls: { exclude: ['animated', 'variant'] },
  hideNoControlsWarning: true,
};

//secondary Button Inverted
export const SecondaryInverted = (args) => {
  return (
    <Segment inverted compact>
      <Button secondary inverted disabled={args.disabled}>
        {args.label}
      </Button>
    </Segment>
  );
};
SecondaryInverted.args = {
  label: 'Secondary Button',
  disabled: false,
};
SecondaryInverted.parameters = {
  controls: { exclude: ['animated', 'variant'] },
  hideNoControlsWarning: true,
};

//Call to action button
export const CallToAction = (args) => {
  return (
    <Button
      icon
      labelPosition="right"
      className="action"
      disabled={args.disabled}
    >
      {args.label}
      <Icon name={args.icon} />
    </Button>
  );
};
CallToAction.args = {
  label: 'CALL TO ACTION BUTTON',
  icon: 'chevron right',
  disabled: false,
};
CallToAction.parameters = {
  controls: { exclude: ['animated', 'variant'] },
  hideNoControlsWarning: true,
};
CallToAction.argTypes = {
  label: {
    name: 'button label',
    type: { name: 'string', required: true },
  },
  icon: {
    name: 'button icon',
    type: { name: 'string', required: false },
    defaultValue: 'chevron  right',
    options: [
      'chevron right',
      'arrow right',
      'sign-in',
      'sign-out',
      'play',
      'stop',
      'pause',
      'download',
      'upload',
      'print',
      'copy',
      'edit',
      'ellipsis',
    ],
    control: { type: 'select' },
    description: 'button icon',
    table: {
      defaultValue: { summary: 'chevron right' },
    },
  },
};

//Text Button - can also play with text class
export const Text = (args) => {
  return (
    <Button as="p" disabled={args.disabled}>
      {args.label}
    </Button>
  );
};
Text.args = {
  label: 'Text Button',
  disabled: false,
};
Text.parameters = {
  controls: { exclude: ['animated', 'variant'] },
  hideNoControlsWarning: true,
};

//Cancel Button
export const Cancel = (args) => {
  return <Button disabled={args.disabled}>{args.label}</Button>;
};
Cancel.args = {
  label: 'Cancel Button',
  disabled: false,
};
Cancel.parameters = {
  controls: { exclude: ['animated', 'variant'] },
  hideNoControlsWarning: true,
};
