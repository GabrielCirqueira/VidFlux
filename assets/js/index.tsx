import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { DownloadForm } from './components/DownloadForm'

const element = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(element);

root.render(
  <ChakraProvider>
    <DownloadForm/>
  </ChakraProvider>
);
