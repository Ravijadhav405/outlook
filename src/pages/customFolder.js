import React, { PureComponent } from 'react'
import data from '../dataModel/custom.json'

export default class CustomFolder extends PureComponent {
  render() {
    return data.map((data) => {
      return (
        <div>
          {data.unread && <a className="Readonly" href={'/icustom/' + data.mId} onclick="event.preventDefault()">{data.subject}</a>}
          {!data.unread &&
            <div className="outer">
              <div class="inner"><a className="unRead" href={'/icustom/' + data.mId} onclick="event.preventDefault()">{data.subject}</a>
              </div>
            </div>
          }

        </div>
      );
    });
  }
}
