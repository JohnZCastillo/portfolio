import { Footer } from 'flowbite-react';

export default function Bottom() {
  return (
    <Footer container className=' bg-[#0e0d11] rounded-none'>
      <div className="w-full text-center ">
        <Footer.Divider className=' border-[#19191c] ' />
        <Footer.Copyright href="#" by="John Castillo" year={2024} />
      </div>
    </Footer>
  );
}
