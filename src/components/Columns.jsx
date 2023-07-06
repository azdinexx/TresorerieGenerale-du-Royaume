const cols = [
  {
    image:
      'https://www.tgr.gov.ma/wps/wcm/connect/af8daeab-fe56-4eac-a981-11e2f469972a/photo.jpg?MOD=AJPERES&CACHEID=af8daeab-fe56-4eac-a981-11e2f469972a',
    title:
      'Signature d’une convention de coopération entre la Trésorerie Générale du Royaume et l’Ordre National des Notaires du Maroc',
    date: '2021-06-28',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae fringilla tellus. Aliquam lobortis leo vitae lectus dignissim, at molestie dui rutrum. Integer id mauris eget ante tristique tincidunt. Nullam hendrerit erat nec volutpat elementum. Vivamus in urna ultrices, lacinia mi vel, tincidunt justo. Donec malesuada, mauris in ultrices congue, est tellus varius nisl, sit amet fermentum turpis purus sit amet tortor. Etiam congue odio id velit lobortis rhoncus. Sed vitae efficitur metus. Sed viverra arcu ac tortor rhoncus ultrices. Morbi vel metus sed mauris elementum elementum. Nulla sit amet posuere tellus...',
  },
  {
    image:
      'https://www.tgr.gov.ma/wps/wcm/connect/edeec15d-e9ed-4500-a7e6-f76208f770dd/small.png?MOD=AJPERES&CACHEID=edeec15d-e9ed-4500-a7e6-f76208f770dd',
    title:
      'Signature d’une convention de coopération entre la Trésorerie Générale du Royaume et l’Ordre National des Notaires du Maroc',
    date: '2021-06-28',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae fringilla tellus. Aliquam lobortis leo vitae lectus dignissim, at molestie dui rutrum. Integer id mauris eget ante tristique tincidunt. Nullam hendrerit erat nec volutpat elementum. Vivamus in urna ultrices, lacinia mi vel, tincidunt justo. Donec malesuada, mauris in ultrices congue, est tellus varius nisl, sit amet fermentum turpis purus sit amet tortor. Etiam congue odio id velit lobortis rhoncus. Sed vitae efficitur metus. Sed viverra arcu ac tortor rhoncus ultrices. Morbi vel metus sed mauris elementum elementum. Nulla sit amet posuere tellus...',
  },
  {
    image:
      'https://www.tgr.gov.ma/wps/wcm/connect/0dd92c7a-f59e-482f-addc-386d27b4d597/Small.PNG?MOD=AJPERES&CACHEID=0dd92c7a-f59e-482f-addc-386d27b4d597',
    title:
      'Signature d’une convention de coopération entre la Trésorerie Générale du Royaume et l’Ordre National des Notaires du Maroc',
    date: '2021-06-28',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae fringilla tellus. Aliquam lobortis leo vitae lectus dignissim, at molestie dui rutrum. Integer id mauris eget ante tristique tincidunt. Nullam hendrerit erat nec volutpat elementum. Vivamus in urna ultrices, lacinia mi vel, tincidunt justo. Donec malesuada, mauris in ultrices congue, est tellus varius nisl, sit amet fermentum turpis purus sit amet tortor. Etiam congue odio id velit lobortis rhoncus. Sed vitae efficitur metus. Sed viverra arcu ac tortor rhoncus ultrices. Morbi vel metus sed mauris elementum elementum. Nulla sit amet posuere tellus...',
  },
];

function Columns() {
  return (
    <div className='bg-orange-100'>
      <div className='w-full bg-orange-500 px-2 text-white'>A la une</div>
      <div>
        {cols.map((col, index) => {
          return (
            <div
              className='flex gap-4 my-4 first:border first:py-4 first:m-4 first:border-orange-400 first:bg-orange-200'
              key={index}
            >
              <div className='w-20 mx-4'>
                <img src={col.image} alt='' />
              </div>
              <div className='w-2/3'>
                <h2 className='text-lg text-zinc-800'>{col.title}</h2>
                <p className='text-orange-500'>{col.date}</p>
                <p className='text-zinc-500'>
                  {col.description.substring(0, 100)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <button className='text-orange-600 p-4 '>Voir Plus...</button>
    </div>
  );
}

export default Columns;
