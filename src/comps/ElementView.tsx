import React from "react";
import type { PageElement } from "../types";
import { comps } from "./index.ts";
import ElementWrapper from "./element-wrapper/ElementWrapper.tsx";

const ElementView: React.FC<{ element: PageElement }> = ({ element }) => {
  const Comp = comps[element.type];
  if (!Comp) {
    return null;
  }
  return (
    <ElementWrapper elementId={element.id}>
      <Comp.View element={element} />
    </ElementWrapper>
  );
};

export default ElementView;
