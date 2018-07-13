import React from 'react';
import { Nav, NavItem, TabContent, TabPane, Tabs } from 'patternfly-react';
import { PointingSession } from './PointingSession';
import { JiraLogin } from './JiraLogin';

export class Session extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: window.localStorage.getItem('userName')
    }
  }

  render() {
    return( 
      <div className="session-container">
        <header className="text-center">
          <h2> Welcome {this.state.userName} </h2>
          Copy the link in your browser and send it to other pointers
        </header>
        <div className="col-md-12">
          <Tabs id="basic-tabs-pf" defaultActiveKey={1}>
            <div>
              <Nav bsClass="nav nav-tabs nav-tabs-pf nav-justified">
                <NavItem eventKey={1}> Pointing </NavItem>
                <NavItem eventKey={2}> JIRA </NavItem>
                <NavItem eventKey={3}> Issues </NavItem>
              </Nav>

              <div className="PaddedContainer">
                <TabContent>
                  <TabPane eventKey={1}>
                    <PointingSession />
                  </TabPane>
                  <TabPane eventKey={2}>
                    <JiraLogin />
                  </TabPane>
                  <TabPane eventKey={3}>
                  {/* Issues Content */}
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    );
  }
}