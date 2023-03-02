import './App.css';
import Home from './componant/Home/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainNavber from './componant/Navber/MainNavber/MainNavber';
import LayOut from './componant/LayOut/LayOut';
import Explor from './componant/Explor/Explor';
import Allsevices from './componant/Home/Service/Allservices/Allsevices';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceDetail from './componant/ServiceDetails/ServiceDetail';
import Reviw from './componant/Reviw/Reviw';
import Login from './componant/Login&Registition/Login/Login';
import Registition from './componant/Login&Registition/Registition/Registition';
import ManageAccout from './componant/Reviw/AllreviewItems/ManageAccount/ManageAccout';
import Myorders from './componant/Reviw/AllreviewItems/Myorders/Myorders';
import Myreviews from './componant/Reviw/AllreviewItems/MyReviews/Myreviews';
import Mywishlist from './componant/Reviw/AllreviewItems/Mywishlist/Mywishlist';
import Likeandcommint from './componant/Reviw/AllreviewItems/LikeAndCommint/Likeandcommint';
import Cancellations from './componant/Reviw/AllreviewItems/Cancellations/Cancellations';
import Page404 from './componant/Page404/Page404';


function App() {
  AOS.init();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/services",
          element: <Allsevices></Allsevices>

        },
        {
          path: "/explor",
          element: <Explor></Explor>
        },
        {
          path: "/servicesDetails",
          element: <ServiceDetail></ServiceDetail>

        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Registition></Registition>
        },
        {
          path: "/reviw",
          element: <Reviw></Reviw>,
          children: [
            {
              path: "/reviw",
              element: <ManageAccout></ManageAccout>
            },
            {
              path: "/reviw/order",
              element: <Myorders></Myorders>
            },
            {
              path: "/reviw/reviews",
              element: <Myreviews></Myreviews>
            },
            {
              path: "/reviw/wishlist",
              element: <Mywishlist></Mywishlist>
            },
            {
              path: "/reviw/likecommint",
              element: <Likeandcommint></Likeandcommint>
            },
            {
              path: "/reviw/cancellation",
              element: <Cancellations></Cancellations>
            }
          ]
        },


      ]
    },
    {
      path: "*",
      element: <Page404></Page404>
    }

  ]);

  return (
    <div className='container'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
