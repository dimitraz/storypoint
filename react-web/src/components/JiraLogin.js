import React from 'react';
import { Alert } from 'patternfly-react';
import { JiraLoginForm } from './JiraLoginForm'

export class JiraLogin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return( 
      <div>
        <header className="text-center">
          <h1>Link to Jira</h1>
        </header>

        <div className="Container">
            <Alert type="info">
            Username and password are never stored. They are only used to generate a session token.
            </Alert>

            <JiraLoginForm btnContext='Link to Jira' />
        </div>
      </div>
    );
  }
}