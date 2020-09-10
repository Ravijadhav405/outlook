import React, { PureComponent } from 'react';
import data from '../dataModel/spam.json'

export default class Spam extends PureComponent {
  render() {
    return data.map((data) => {
      return (
        <div>
          <a href={'/spam/' + data.mId} onclick="event.preventDefault()">{data.subject}</a>
        </div>
      );
    });
  }
}
