import { Banner, Navbar } from 'flowbite-react';

export default function Nav() {
    return (
      <Navbar fluid rounded className='bg-[#19191c] navigation sticky top-0 rounded-none py-4'>
        <Navbar.Brand href="https://flowbite-react.com">
        John Castillo
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className='text-xl text-white' href="#" >Home</Navbar.Link>
          <Navbar.Link className='text-xl text-white' href="#">About</Navbar.Link>
          <Navbar.Link className='text-xl text-white' href="#">Projects</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }