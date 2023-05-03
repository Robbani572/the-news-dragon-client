import {Navigate, createBrowserRouter} from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import Category from '../pages/Home/Category/Category';
import NewsLayout from '../layouts/NewsLayout';
import News from '../pages/News/News/News';
import Authentication from '../layouts/Authentication';
import Login from '../pages/Authentication/Login/Login';
import Register from '../pages/Authentication/Register/Register';
import PrivetRoutes from './PrivetRoutes';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Authentication></Authentication>,
        children: [
            {
                path: '/',
                element: <Navigate to={'category/0'}></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://the-news-dragon-server-robbani572.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivetRoutes><News></News></PrivetRoutes>,
                loader: ({params}) => fetch (`https://the-news-dragon-server-robbani572.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;