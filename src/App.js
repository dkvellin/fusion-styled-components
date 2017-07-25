import React from 'react';
import { Text, Progress, Panel, PanelFooter, PanelHeader, Row, Column, Alert, Avatar, Button, Logo, Slider, Heading, BackgroundImage, Badge, Banner, Link, Blockquote, Card, Code } from './fusion';
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
          <Text
          	align="center"
          	weight="bold"
            size={20}
          	children="Hello"
          />
          <Progress
          	value={1/3}
          />
          <Button disabled={false} onClick={() => console.log("Click Event")}>Normal</Button>
          <ThemeProvider theme={secondaryTheme}>
            <div>
              <Button disabled={false} onClick={() => console.log("Click Event")}>secondaryTheme Button</Button>
            </div>
          </ThemeProvider>

          <Code children="
            <html>
              <body></body>
            </html>
          ">
          </Code>
          <Row>
            <Column>Column 1</Column>
            <Column>Column 2</Column>
          </Row>
          <Panel color='blue'>
        	<PanelHeader
        		color='white'
        		bg='blue'>
        		Hello
        	</PanelHeader>
        	  Hello Boss
        	<PanelFooter color='blue'>
        		Footer
        	</PanelFooter>
        </Panel>
          <Heading tag="h2" href="#">Heading</Heading>
          <Link href="http://google.com">Google Link</Link>
          <Blockquote>"Lors asdjfkl asdfjlw llspwuh"</Blockquote>
          <Logo width={200} />
          <Card width={30}><BackgroundImage size="cover" position="center"/><Heading>Card Title</Heading></Card>
          <Heading>Heading<Badge>Badge</Badge></Heading>
          <Banner><Heading tag="h1">Banner Title</Heading></Banner>
          <Slider name="will" min={1} max={10} defaultValue={1} disabled={false} onChange={() => console.log("Change Event")} />
          <BackgroundImage size="cover" position="center"/>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
