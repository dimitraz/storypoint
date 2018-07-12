import React from 'react';
import { PointSelector } from './pointSelector';

export class PointingSession extends React.Component {

  constructor(props) {
    super(props);

    this.pointSelected = this.pointSelected.bind(this);
  }

  pointSelected(value) {
    // Handle point value
  }

  render() {
    return( 
      <div className="pointing-session-container">
        <PointSelector onPointSelected={this.pointSelected}></PointSelector>
      </div>
    );
  }
}