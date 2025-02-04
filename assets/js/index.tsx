import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Youtube } from '@components/Pages/Youtube';
import { Tiktok } from '@components/Pages/Tiktok';
import { Instagram } from '@components/Pages/Instagram';
import { Home } from '@components/Home'
import theme from '@components/theme'

const element = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(element);

root.render(
  <ChakraProvider theme={theme} >
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download/youtube" element={<Youtube />} />
        <Route path="/download/tiktok" element={<Tiktok />} />
        <Route path="/download/instagram" element={<Instagram />} />
      </Routes>
    </Router>
  </ChakraProvider>
);
