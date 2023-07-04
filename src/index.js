import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import InfoPage from './pages/Infopage';
import ErrorPage from './pages/ErrorPage';
import Scenario,{loader as ScenarioLoader} from './components/Scenario/Scenario';
import Goals, {loader as GoalLoader} from './components/Goals';
import Theory, {loader as TheoryLoader} from './components/Theory';

import ScenariosPage, {loader as ScenariosLoader} from './pages/ScenariosPage';
import Home from './components/Home';


const router = createBrowserRouter([
  { 
    path: '/', 
    element: <InfoPage />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: '/home',
        element: <Home />,

      },
      {
        path: '/doelstellingen',
        element: <Goals />,
        loader: GoalLoader

      },{
        path: '/theorie',
        element: <Theory />,
        loader: TheoryLoader
      },{
        path: '/scenarios',
        element: <ScenariosPage />,
        loader: ScenariosLoader,
        children: [
          {
            path: '/scenarios/:id',
            element: <Scenario />,
            loader: ScenarioLoader,
          }
        ]
      }

    ]
  }
], {
  basename: '/',
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);