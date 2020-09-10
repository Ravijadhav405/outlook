import React, { PureComponent } from 'react'
import data from '../dataModel/delete.json'

export default class DeleteItem extends PureComponent {
  render() {
    return data.map((data) => {
      return (
        <div>
          {data.unread && <a className="Readonly" href={'/idelete/' + data.mId} onclick="event.preventDefault()">{data.subject}</a>}
          {!data.unread &&
            <div className="outer">
              <div class="inner"><a className="unRead" href={'/idelete/' + data.mId} onclick="event.preventDefault()">{data.subject}</a>
              </div>
            </div>
          }

        </div>
      );
    });
  }
}
