import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav.jsx';

function Layout() {
  return (
    <>
      <Nav />
      <div className='max-w-5xl mx-auto my-2'>
        <Outlet></Outlet>
      </div>
      <div className='p-2 pb-4 text-center text-zinc-600'>
        <span>copyright &copy; all rights reserved</span>
      </div>
    </>
  );
}

export default Layout;
