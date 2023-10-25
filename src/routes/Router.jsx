import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Inicio } from '../views/Home/Inicio';
import { Box, ThemeProvider, createTheme, CircularProgress, Typography } from '@mui/material';

export const Router = () => {
  return (
    // <Typography >Hello</Typography > 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};
