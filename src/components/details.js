import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import inbox from '../dataModel/inbox .json';
import spam from '../dataModel/spam.json';
import idelete from '../dataModel/delete.json';
import icustom from '../dataModel/custom.json';
import isent from '../dataModel/send.json'
import imgno from '../images/empty.png';
export default class details extends Component {

  render() {
    let id = window.location.pathname.split('/');
    let isShowimg = false;
    let res = {};
    if (id[1] === 'inbox') {
      isShowimg = false;
      res = inbox.find(item => {
        return item.mId === id[2]
      })
    } else if (id[1] === 'spam') {
      isShowimg = false;
      res = spam.find(item => {
        return item.mId === id[2]
      })
    } else if (id[1] === 'idelete') {
      isShowimg = false;
      res = idelete.find(item => {
        return item.mId === id[2]
      })
    } else if (id[1] === 'icustom') {
      isShowimg = false;
      res = icustom.find(item => {
        return item.mId === id[2]
      })
    } else if (id[1] === 'isent') {
      isShowimg = false;
      res = isent.find(item => {
        return item.mId === id[2]
      })
    }
    else {
      isShowimg = true;
    }



    return (
      <div>
        {isShowimg &&
          <Image src={imgno} fluid />
        }
        {res &&
          <><h3>{res.subject}</h3>
            <p>{res.content}</p></>
        }



      </div>
    )
  }
}
