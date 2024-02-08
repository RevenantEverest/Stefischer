import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { store, persistor } from '@@store/index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { _HomeRoutes } from '@@navigation/_Routes';

import { NavigationContainer } from '@@containers/index';

const router = createBrowserRouter(
    _HomeRoutes.map((route): RouteObject => ({
        path: route.path,
        element: <NavigationContainer container={route.container} />
    }))
);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={router} />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
