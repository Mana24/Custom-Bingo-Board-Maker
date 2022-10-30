import { h, render } from "preact";
import App from "./App.jsx"
import '../styles/main.scss';

render(h(App, null), document.getElementById('app'));