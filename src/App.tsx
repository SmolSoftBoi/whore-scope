import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Block } from '@smolpack/react-bootstrap-extensions';
import Scope from './components/Scope';
import data, { Data } from './data.json';
import photo from './photo.jpg';
import './App.scss';

function App() {
  const [scope, setScope] = React.useState<{
    key: string;
    data: Data;
  } | undefined>();

  React.useEffect(() => {

  }, [scope])

  function handleClick(key: string) {
    setScope({
      key: key,
      data: data[key]
    });
  }

  return (
    <div className="app">
      <Block variant="dark">
        <div className="block-xs-bottom">
          <Block.Foreground>
            <Container>
              <Block.Title>Whore-Scopes</Block.Title>
              <Row>
                {Object.keys(data).map(key => (
                  <Col key={key} xs="6" sm="4" md="3" xl="2">
                    <Button variant={key} onClick={() => handleClick(key)}>{key}</Button>
                  </Col>
                ))}
              </Row>
              <small className="text-muted">remember: you don't need any resolutions when you're a bad b*tch 😉 #whorescopes 🔮</small><br/>
              <small className="text-muted">📝 written by <a href="https://MajorPhilebrity.com">Phillip</a></small><br/>
              <small className="text-muted">📸 photo by <a href="https://jjgeigerphotos.com">JJ Geiger</a></small><br/>
              <small className="text-muted">👨🏻‍💻 developed by <a href="https://github.com/SmolSoftBoi">Kristian</a></small>
            </Container>
          </Block.Foreground>
        </div>
        <Block.Background>
          <Image className="opacity-25" src={photo} fluid />
        </Block.Background>
      </Block>
      <Block className={scope?.key && `bg-${scope.key}`} variant="dark">
        <Container>
          {scope ? (
            <Scope title={scope.key} data={scope.data} />
          ) : null}
        </Container>
      </Block>
    </div>
  );
}

export default App;
