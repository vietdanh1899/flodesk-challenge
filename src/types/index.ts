export interface ElementSettings {
  [key: string]: any;
}

export interface PageElement {
  id: string;
  type: "heading" | "paragraph" | "image";
  settings: ElementSettings;
}

export interface Template {
  id: string;
  name: string;
  pageSettings: {
    backgroundColor: string;
    contentWidth: string;
  };
  elements: PageElement[];
}

export interface BuilderState {
  selectedTemplateId: string | null;
  pageSettings: {
    backgroundColor: string;
    contentWidth: string;
  } | null;
  elements: PageElement[];
  selectedElementId: string | null;
}
