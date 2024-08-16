
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapClient from './components/BootstrapClient';



export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body data-bs-theme="dark" className="text-white">
        <BootstrapClient/>
        {children}</body>
    </html>
  );
}
