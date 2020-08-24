import React from 'react';
import { Redirect } from "react-router-dom";
import Mine from '@/pages/mine/mine';
import Find from '@/pages/find/find';
import Friend from '@/pages/friend/friend';
const routes = [
    {
        path: '/',
        exact: true,
        component:Find,
    },{
        path: '/friend',
        exact: true,
        component:Friend,
    },
    {
        path: '/mine',
        exact: true,
        component:Mine,
    }
];

export default routes;