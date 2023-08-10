import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.sass'
import { ConfigProvider } from './config-provider.jsx'

const application = <React.StrictMode>
  <ConfigProvider>
    <App />
  </ConfigProvider>
</React.StrictMode>

ReactDOM.createRoot(document.getElementById('root')).render(
  application,
)
