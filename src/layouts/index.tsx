import * as React from "react";

import { rhythm } from "../utils/typography";
import 'semantic-ui-css/semantic.min.css';


const MainLayout: React.SFC = ({ children }) => (
  <div>
    {children}
  </div>
);

export default MainLayout;
