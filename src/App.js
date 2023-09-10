import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  useParams,
} from 'react-router-dom';
import ErrorPage from './routes/error-page';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './components/Categories/Categories';
import MusicList from './components/MusicList/MusicList';

function App() {
  const GetMusiList = () => {
    const { id } = useParams();
    return <MusicList category={id} />;
  };

  const View = () => (
    <div className="App">
      <Navbar />
      <div className="container body">
        <Outlet />
      </div>
      <footer>
        <p>Copyright &copy; 2023 Chudisoft. All rights reserved.</p>
      </footer>
    </div>
  );

  const router = createBrowserRouter([
    {
      path: '/',
      element: <View />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Categories />,
        },
        {
          path: '/Music/:id',
          element: <GetMusiList />,
          // element: <MusicList category="pop-music" />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
