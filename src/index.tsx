import * as React from "react";
import { render } from "react-dom";

import { App } from "./components/app";

import './sass/style.scss';

const app = document.getElementById("app");

render(<App />, app);