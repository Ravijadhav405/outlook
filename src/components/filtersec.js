import React, { PureComponent } from 'react'
import { ButtonGroup, Button, DropdownButton, Dropdown } from 'react-bootstrap'

export default class filtersec extends PureComponent {
  render() {
    return (
      <div>
        <ButtonGroup>
          <Button>Focus</Button>
          <Button>Other</Button>

          <DropdownButton as={ButtonGroup} title="Filter" id="bg-nested-dropdown">
            <Dropdown.Item eventKey="1">All</Dropdown.Item>
            <Dropdown.Item eventKey="2">Unread</Dropdown.Item>
            <Dropdown.Item eventKey="2">To me</Dropdown.Item>
            <Dropdown.Item eventKey="2">Flagged</Dropdown.Item>
            <Dropdown.Item eventKey="2">Mentions</Dropdown.Item>
            <Dropdown.Item eventKey="2">Attachments</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
      </div>
    )
  }
}
