import React, { Suspense, lazy } from 'react'
import  ReactDOM  from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
// import Grocery from './components/Grocery';

const Grocery = lazy(()=> import('./components/Grocery'))

const AppLayout = () => {
    return (<Provider store={appStore}>
        <div className='app'>
            <Header/>
            <div className="out-body">
                <Outlet />
            </div>
        </div>
    </Provider>)
   
}


const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout></AppLayout>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/grocery',
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path:'/restaurant/:resId',
                element:<RestaurantMenu/>
            },
            {
                path:'/cart',
                element:<Cart/>
            }
        ],
        errorElement: <Error/>
    },
    
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)