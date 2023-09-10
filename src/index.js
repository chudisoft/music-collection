import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './routes/error-page';
import store from './redux/store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './components/Categories/Categories';
// import MusicList from './components/MusicList/MusicList';

// const GetMusiList = () => {
//   const { id } = useParams();
//   return <MusicList category={id} />;
// };

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Categories />,
      },
      {
        path: '/Music/:id',
        element: <Categories />,
        // element: <GetMusiList />,
      },
      // {
      //   path: '/profile',
      //   element: <Profile />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
