import ReactDOM  from 'react-dom'
import App from './App'
import './index.css'
import {createRoot} from 'react-dom/client'

const rootElement=document.getElementById('root')
const root=createRoot(rootElement)
root.render(
    <div><App/></div>
);



