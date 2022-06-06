import "../scss/app.scss";

/* Your JS Code goes here */

/* Demo JS */
import "./demo.js";
import { navToggle } from "./navToggle";

new navToggle();

import Accordion from "./accordion.mjs";
for (const el of document.querySelectorAll(".accordion")) new Accordion(el);
