import React from "react";
import type { PageElement } from "../types";
import { HeadingView, HeadingSettings } from "./elements/Heading";
import { ParagraphView, ParagraphSettings } from "./elements/Paragraph";
import { ImageView, ImageSettings } from "./elements/Image";

interface Comp {
  View: React.FC<{ element: PageElement }>;
  Settings: React.FC<{ element: PageElement }>;
}

export const comps: Record<string, Comp> = {
  heading: {
    View: HeadingView,
    Settings: HeadingSettings,
  },
  paragraph: {
    View: ParagraphView,
    Settings: ParagraphSettings,
  },
  image: {
    View: ImageView,
    Settings: ImageSettings,
  },
};
