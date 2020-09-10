import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { Container, Tab, Row, Col, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import Inbox from './pages/inbox';
import Sent from './pages/sent';
import Spam from './pages/spam';
import DeleteItem from './pages/deleteItem';
import Custom from './pages/customFolder'
import idata from './dataModel/inbox .json';
import sentdata from './dataModel/send.json'
import spamdata from './dataModel/spam.json';
import dltdata from './dataModel/delete.json';
import cstdata from './dataModel/custom.json';
import Detais from './components/details';
import Filtersec from './components/filtersec';


class App extends React.Component {
  render() {
    const inb_count = idata.length;
    const snt_count = sentdata.length;
    const spn_count = spamdata.length;
    const dlt_count = dltdata.length;
    const cst_count = cstdata.length;
    return (
      <div>
        <Container>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home"><i className="fa fa-th"></i> Outlook</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home"></Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar>
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home"><i className="fa fa-align-justify"></i></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#new"><i className="fa fa-plus"></i> New Message</Nav.Link>
              <Nav.Link eventKey="fourth"><i className="fa fa-trash"></i> Delete</Nav.Link>
              <Nav.Link href="#Archive"> <i className="fa fa-inbox"></i> Archive</Nav.Link>
            </Nav>
          </Navbar>
          <Row>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Col sm={3}>
                <div className="sideBar">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">
                        <i className="fa fa-inbox"></i> Inbox <span className="badge pull-right">{inb_count}</span>
                      </Nav.Link>

                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"><i className="fa fa-chevron-right"></i> Sent Items <span className="badge pull-right">{snt_count}</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third"><i className="fa fa-archive "></i> Spam <span className="badge pull-right">{spn_count}</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth"><i className="fa fa-trash"></i> Delete Items <span className="badge pull-right">{dlt_count}</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth"><i className="fa fa-envelope"></i> Custom Folder <span className="badge pull-right">{cst_count}</span></Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </Col>
              <Col sm={3}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Filtersec />
                    <Inbox />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Filtersec />
                    <Sent />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Filtersec />
                    <Spam />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <Filtersec />
                    <DeleteItem />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <Filtersec />
                    <Custom />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
              <Col sm={6}>
                <Detais />
              </Col>
            </Tab.Container>
          </Row>
        </Container>



      </div>
    );
  }
}

export default App;
