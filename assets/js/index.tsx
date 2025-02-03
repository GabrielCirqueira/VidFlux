import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { Home } from '@components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DownloadForm } from "./components/DownloadForm";

const element = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(element);

root.render(
  <ChakraProvider >
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download/youtube" element={<DownloadForm />} />
      </Routes>
    </Router>
  </ChakraProvider>
);
