import React, { PureComponent } from 'react';
import data from '../dataModel/send.json'

export default class sent extends PureComponent {
  render() {
    return data.map((data) => {
      return (
        <div>
          {data.unread && <a className="Readonly" href={'/sent/' + data.mId} onclick="event.preventDefault()">{data.subject}</a>}
          {!data.unread &&
            <div className="outer">
              <div class="inner"><a className="unRead" href={'/sent/' + data.mId} onclick="event.preventDefault()">{data.subject}</a>
              </div>
            </div>
          }

        </div>
      );
    });
  }
}
