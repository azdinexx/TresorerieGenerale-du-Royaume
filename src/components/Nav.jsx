import { Link } from 'react-router-dom';
import { useState } from 'react';
function Nav() {
  const [active, setActive] = useState(1);

  let styles = 'hover:bg-slate-100 cursor-pointer py-2 px-4';

  return (
    <header className='p-4 flex flex-col relative'>
      {/* image wrapper  */}
      <Link to='/'>
        <img
          src='https://formation.tgr.gov.ma/static/tgr/images/logo.8da7f9d459a3.png'
          alt=''
          width='180px'
          height='180px'
          className='mx-auto'
        />
      </Link>
      <nav className='p-2 mx-auto text-zinc-700 hidden sm:block  '>
        <ul className='flex gap-6'>
          <li
            className={styles}
            style={{ color: active === 0 ? '#fbbf24' : null }}
            onClick={() => setActive(0)}
          >
            <Link to='news'>Activitées</Link>
          </li>
          <li
            className={styles}
            style={{ color: active === 1 ? '#fbbf24' : null }}
            onClick={() => setActive(1)}
          >
            <Link to='/'>Documentation et publications</Link>
          </li>
          <li
            className={styles}
            style={{ color: active === 2 ? '#fbbf24' : null }}
            onClick={() => setActive(2)}
          >
            <Link to='informations-pratiques'>Informations pratiques</Link>
          </li>
          <li
            className={styles}
            style={{ color: active === 3 ? '#fbbf24' : null }}
            onClick={() => setActive(3)}
          >
            <Link to='reclamations'>Réclamations en ligne</Link>
          </li>
          <li
            className={styles}
            style={{ color: active === 4 ? '#fbbf24' : null }}
            onClick={() => setActive(4)}
          >
            <Link to='fxaq'>FAQ</Link>
          </li>
        </ul>
      </nav>

      <div className='absolute sm:right-10 sm:top-14 '>
        <Link to='/login'>
          <button className='hover:bg-slate-100 px-4 py-2 rounded-sm border'>
            se connecter
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Nav;
