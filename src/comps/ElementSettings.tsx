import React from "react";
import type { PageElement } from "../types";
import { comps } from "./index.ts";

const ElementSettings: React.FC<{ element: PageElement }> = ({ element }) => {
  const Comp = comps[element.type];
  return Comp ? <Comp.Settings element={element} /> : null;
};

export default ElementSettings;
