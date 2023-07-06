import { Link } from 'react-router-dom';

const articles = [
  {
    title: 'Scientists Discover New Species of Exotic Fish',
    source: 'National Geographic',
    author: 'John Smith',
    date: '2023-06-28',
    description:
      'A team of marine biologists has discovered a new species of fish in the depths of the Pacific Ocean...',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae fringilla tellus. Aliquam lobortis leo vitae lectus dignissim, at molestie dui rutrum. Integer id mauris eget ante tristique tincidunt. Nullam hendrerit erat nec volutpat elementum. Vivamus in urna ultrices, lacinia mi vel, tincidunt justo. Donec malesuada, mauris in ultrices congue, est tellus varius nisl, sit amet fermentum turpis purus sit amet tortor. Etiam congue odio id velit lobortis rhoncus. Sed vitae efficitur metus. Sed viverra arcu ac tortor rhoncus ultrices. Morbi vel metus sed mauris elementum elementum. Nulla sit amet posuere tellus...',
  },
  {
    title: 'New Study Shows Benefits of Exercise on Mental Health',
    source: 'Healthline',
    author: 'Jane Doe',
    date: '2023-06-29',
    description:
      'A recent study conducted by researchers at a leading university has found a strong correlation between regular exercise and improved mental well-being...',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae fringilla tellus. Aliquam lobortis leo vitae lectus dignissim, at molestie dui rutrum. Integer id mauris eget ante tristique tincidunt. Nullam hendrerit erat nec volutpat elementum. Vivamus in urna ultrices, lacinia mi vel, tincidunt justo. Donec malesuada, mauris in ultrices congue, est tellus varius nisl, sit amet fermentum turpis purus sit amet tortor. Etiam congue odio id velit lobortis rhoncus. Sed vitae efficitur metus. Sed viverra arcu ac tortor rhoncus ultrices. Morbi vel metus sed mauris elementum elementum. Nulla sit amet posuere tellus...',
  },
  {
    title: 'New Study Shows Benefits of Exercise on Mental Health',
    source: 'Healthline',
    author: 'Jane Doe',
    date: '2023-06-29',
    description:
      'A recent study conducted by researchers at a leading university has found a strong correlation between regular exercise and improved mental well-being...',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae fringilla tellus. Aliquam lobortis leo vitae lectus dignissim, at molestie dui rutrum. Integer id mauris eget ante tristique tincidunt. Nullam hendrerit erat nec volutpat elementum. Vivamus in urna ultrices, lacinia mi vel, tincidunt justo. Donec malesuada, mauris in ultrices congue, est tellus varius nisl, sit amet fermentum turpis purus sit amet tortor. Etiam congue odio id velit lobortis rhoncus. Sed vitae efficitur metus. Sed viverra arcu ac tortor rhoncus ultrices. Morbi vel metus sed mauris elementum elementum. Nulla sit amet posuere tellus...',
  },
  {
    title: 'New Study Shows Benefits of Exercise on Mental Health',
    source: 'Healthline',
    author: 'Jane Doe',
    date: '2023-06-29',
    description:
      'A recent study conducted by researchers at a leading university has found a strong correlation between regular exercise and improved mental well-being...',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae fringilla tellus. Aliquam lobortis leo vitae lectus dignissim, at molestie dui rutrum. Integer id mauris eget ante tristique tincidunt. Nullam hendrerit erat nec volutpat elementum. Vivamus in urna ultrices, lacinia mi vel, tincidunt justo. Donec malesuada, mauris in ultrices congue, est tellus varius nisl, sit amet fermentum turpis purus sit amet tortor. Etiam congue odio id velit lobortis rhoncus. Sed vitae efficitur metus. Sed viverra arcu ac tortor rhoncus ultrices. Morbi vel metus sed mauris elementum elementum. Nulla sit amet posuere tellus...',
  },
  {
    title: 'New Study Shows Benefits of Exercise on Mental Health',
    source: 'Healthline',
    author: 'Jane Doe',
    date: '2023-06-29',
    description:
      'A recent study conducted by researchers at a leading university has found a strong correlation between regular exercise and improved mental well-being...',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae fringilla tellus. Aliquam lobortis leo vitae lectus dignissim, at molestie dui rutrum. Integer id mauris eget ante tristique tincidunt. Nullam hendrerit erat nec volutpat elementum. Vivamus in urna ultrices, lacinia mi vel, tincidunt justo. Donec malesuada, mauris in ultrices congue, est tellus varius nisl, sit amet fermentum turpis purus sit amet tortor. Etiam congue odio id velit lobortis rhoncus. Sed vitae efficitur metus. Sed viverra arcu ac tortor rhoncus ultrices. Morbi vel metus sed mauris elementum elementum. Nulla sit amet posuere tellus...',
  },
  {
    title: 'New Study Shows Benefits of Exercise on Mental Health',
    source: 'Healthline',
    author: 'Jane Doe',
    date: '2023-06-29',
    description:
      'A recent study conducted by researchers at a leading university has found a strong correlation between regular exercise and improved mental well-being...',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae fringilla tellus. Aliquam lobortis leo vitae lectus dignissim, at molestie dui rutrum. Integer id mauris eget ante tristique tincidunt. Nullam hendrerit erat nec volutpat elementum. Vivamus in urna ultrices, lacinia mi vel, tincidunt justo. Donec malesuada, mauris in ultrices congue, est tellus varius nisl, sit amet fermentum turpis purus sit amet tortor. Etiam congue odio id velit lobortis rhoncus. Sed vitae efficitur metus. Sed viverra arcu ac tortor rhoncus ultrices. Morbi vel metus sed mauris elementum elementum. Nulla sit amet posuere tellus...',
  },
];

function News() {
  return (
    <div className='min-h-screen p-4  grid-cols-1 md:grid md:grid-cols-2 md:gap-4 mb-10'>
      {articles.map((article, index) => {
        return (
          <div className='p-4 my-4 bg-white rounded-md  ' key={index}>
            <h2 className='text-2xl font-semibold mb-2 py-2'>
              {article.title}
            </h2>
            <div className='flex gap-4 mb-2 p-2 '>
              <span
                className='text-orange-500
              border px-4 rounded-full border-orange-300
              '
              >
                {article.source}
              </span>
              <span className='text-slate-500'>{article.author}</span>
              <span className='text-orange-300'>{article.date}</span>
            </div>
            <p className='text-slate-500 mb-2 text-justify'>
              {article.description}
            </p>
            <Link to='article'>
              <button className='hover:bg-orange-100 px-4 py-2  border rounded-full border-orange-400'>
                Read More
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default News;
