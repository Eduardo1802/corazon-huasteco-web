import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CssBaseline } from '@mui/material';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <>
        <CssBaseline />
        <App />
    </>
);