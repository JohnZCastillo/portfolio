import { Button, Navbar } from 'flowbite-react';

export default function Nav() {
    return (
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
        John Castillo
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Projects</Navbar.Link>
          <Navbar.Link href="#">Skill</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }