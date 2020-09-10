import React, { PureComponent } from 'react';
import data from '../dataModel/inbox .json';

export default class Inbox extends PureComponent {
  render() {
    return data.map((data) => {
      return (
        <div>
          {data.unread && <a className="Readonly" href={'/inbox/' + data.mId} onclick="event.preventDefault()">{data.subject}</a>}
          {!data.unread &&
            <div className="outer">
              <div class="inner"><a className="unRead" href={'/inbox/' + data.mId} onclick="event.preventDefault()">{data.subject}</a>
              </div>
            </div>
          }

        </div>
      );
    });
  }
}
