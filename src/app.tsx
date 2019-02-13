import * as React from 'react';
import ReactPlayer from 'react-player';

export class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <div>
        <h2>Welcome to React with Typescript!</h2>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=loScxSrs7Y8'
          className='react-player'
          playing
          muted
          width='100%'
          height='100%'
        />
      </div>
    );
  }
}
