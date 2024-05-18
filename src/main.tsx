
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import Ombor from './Ombor.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={Ombor}>
    <App />
    </Provider>
  
)
