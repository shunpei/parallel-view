import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Button, Welcome } from '@storybook/react/demo';
import ControllPanel from '../app/components/ControllPanel';
import DropZone from '../app/components/DropZone';
import Video from '../app/components/Video';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Components', module)
  .add('ControllPanel', () => (
    <MuiThemeProvider>
      <ControllPanel />
    </MuiThemeProvider>
  ))
  .add('DropZone', () => (
    <MuiThemeProvider>
      <DropZone quantity={1} />
    </MuiThemeProvider>
  ))
  .add('Video', () => (
    <MuiThemeProvider>
      <Video src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </MuiThemeProvider>
  ));
