import React from 'react';
import { Alert, Avatar, Button, Logo, Slider, Heading, BackgroundImage, Badge } from './fusion';
import { ThemeProvider } from 'styled-components';
import { primaryTheme, secondaryTheme } from './styles';

class App extends React.Component {
  render() {

    return(
      <ThemeProvider theme={primaryTheme}>
        <div>
          <Alert type='info'>Success</Alert>
          <Avatar
            picUrl="https://images.unsplash.com/photo-1422065649003-cf6684a31468"
            alt="JESUS Saves"
            width={40}
            height={400}
          />
          <Button disabled={false} onClick={() => console.log("Click Event")}>Normal</Button>
          <ThemeProvider theme={secondaryTheme}>
            <Button disabled={false} onClick={() => console.log("Click Event")}>secondaryTheme Button</Button>
          </ThemeProvider>
          <Heading tag="h2" href="#">Heading</Heading>
          <Logo width={200} />
          <Heading>Heading<Badge>Badge</Badge></Heading>
          <Slider name="will" min={1} max={10} defaultValue={1} disabled={false} onChange={() => console.log("Change Event")} />
          <BackgroundImage size="cover" position="center"/>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
