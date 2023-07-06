import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import News from './pages/News.jsx';
import Article from './pages/Article.jsx';
import EnCours from './pages/EnCours.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/'>
          <Route element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='news'>
              <Route index element={<News />} />
              <Route path=':id' element={<Article />} />
            </Route>
            <Route path='informations-pratiques' element={<EnCours />}></Route>
            <Route path='faq' element={<EnCours />}></Route>
            <Route path='reclamations' element={<EnCours />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
