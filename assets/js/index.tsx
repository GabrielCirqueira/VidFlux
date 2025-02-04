import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { YoutubePage } from '@components/Pages/YoutubePage';
import { TiktokPage } from '@components/Pages/TiktokPage';
import { InstagramPage } from '@components/Pages/InstagramPage';
import { Home } from '@components/Home'
import theme from '@components/theme'

const element = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(element);

root.render(
  <ChakraProvider theme={theme} >
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download/youtube" element={<YoutubePage />} />
        <Route path="/download/tiktok" element={<TiktokPage />} />
        <Route path="/download/instagram" element={<InstagramPage />} />
      </Routes>
    </Router>
  </ChakraProvider>
);
