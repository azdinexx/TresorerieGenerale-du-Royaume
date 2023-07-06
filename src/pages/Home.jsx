import Columns from '../components/Columns.jsx';

function Home() {
  return (
    <div className='min-h-screen '>
      <div className=' min-w-full flex  gap-4 bg-gray-100 p-4 rounded-md'>
        <div className=' mr-auto'>
          <span className='text-orange-500'>Recherche</span>
          <input
            type='text'
            className='mx-4 rounded-sm border pl-2'
            placeholder='chercher'
          />
        </div>
        <div className=''>
          <span className='text-orange-500'>Choisir</span>

          <select name='' id=''>
            <option value=''>Tous</option>
            <option value=''>Tous</option>
            <option value=''>Tous</option>
          </select>
        </div>
        <div className=''>
          <span className='text-orange-500'>Choisir</span>

          <select name='' id=''>
            <option value=''>Tous</option>
            <option value=''>Tous</option>
            <option value=''>Tous</option>
          </select>
        </div>
      </div>
      <img
        src='https://www.tgr.gov.ma/wps/wcm/connect/5bc33ef8-ac3b-44aa-9909-ad7ae5d0e8b6/banner-home.jpg?MOD=AJPERES&ContentCache=NONE&CACHEID=71c51966-39ce-4b92-a4bf-9f6d964e9d9a'
        alt=''
        className='w-full p-2 rounded-[1.5rem]'
      />
      <Columns />
      <div className='min-h-screen bg-gray-100 flex items-center justify-center uppercase aspect-square rounded-full my-20'>
        <h1>en cours de developement</h1>
      </div>
    </div>
  );
}

export default Home;
