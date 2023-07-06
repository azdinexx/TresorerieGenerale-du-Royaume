import { Link } from 'react-router-dom';

const article = {
  title: 'Scientists Discover New Species of Exotic Fish',
  source: 'National Geographic',
  author: 'John Smith',
  date: '2023-06-28',
  description:
    'A team of marine biologists has discovered a new species of fish in the depths of the Pacific Ocean...',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae fringilla tellus. Aliquam lobortis leo vitae lectus dignissim, at molestie dui rutrum. Integer id mauris eget ante tristique tincidunt. Nullam hendrerit erat nec volutpat elementum. Vivamus in urna ultrices, lacinia mi vel, tincidunt justo. Donec malesuada, mauris in ultrices congue, est tellus varius nisl, sit amet fermentum turpis purus sit amet tortor. Etiam congue odio id velit lobortis rhoncus. Sed vitae efficitur metus. Sed viverra arcu ac tortor rhoncus ultrices. Morbi vel metus sed mauris elementum elementum. Nulla sit amet posuere tellus...',
};

function Article() {
  return (
    <div className=' p-4 sm:max-w-2xl sm:mx-auto min-h-screen mb-8'>
      <div className='flex items-center gap-4'>
        <Link to={-1}>
          <button
            className='px-4 py-2 border text-sm rounded-s-full
        border-orange-200 text-orange-600 hover:bg-orange-400 
        hover:text-white transition-colors duration-400
        '
          >
            Back
          </button>
        </Link>
        <div className='text-gray-400 flex gap-4'>
          <span className='hover:text-orange-500 cursor-pointer'>
            Activitées
          </span>
          &gt;
          <span className='hover:text-orange-500 cursor-pointer'>Article</span>
        </div>
      </div>
      <h1 className='text-2xl my-6 text-center'>{article.title}</h1>

      <div className=' flex gap-2 justify-center text-xs mb-6'>
        <span className='text-orange-400'>{article.source}</span>
        <span>{article.author}</span>
        <span className='text-orange-400'>{article.date}</span>
      </div>
      <article className='flex flex-col gap-4 text-justify'>
        <p>{article.content}</p>
        <p>{article.content}</p>
        <p>{article.content}</p>
        <p>{article.content}</p>
      </article>
    </div>
  );
}

export default Article;
