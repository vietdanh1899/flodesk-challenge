import type { Template } from "../types";

export const templates: Template[] = [
  {
    id: "template1",
    name: "Template 1",
    pageSettings: {
      backgroundColor: "#ffffff",
      contentWidth: "600px",
    },
    elements: [
      {
        id: "el1",
        type: "heading",
        settings: {
          text: "Welcome to Template 1",
          color: "#000000",
          fontSize: "32px",
          fontWeight: 700,
        },
      },
      {
        id: "el2",
        type: "paragraph",
        settings: {
          text: "This is a simple template.",
          color: "#333333",
          fontSize: "16px",
          fontWeight: 400,
        },
      },
      {
        id: "el3",
        type: "image",
        settings: {
          src: "https://placehold.jp/500x200.png",
          alt: "Placeholder Image",
        },
      },
    ],
  },
  {
    id: "template2",
    name: "Template 2",
    pageSettings: {
      backgroundColor: "#f0f0f0",
      contentWidth: "800px",
    },
    elements: [
      {
        id: "el4",
        type: "heading",
        settings: {
          text: "Discover Template 2",
          color: "#1a1a1a",
          fontSize: "48px",
          fontWeight: 700,
        },
      },
      {
        id: "el5",
        type: "image",
        settings: {
          src: "https://placehold.jp/700x300.png",
          alt: "Placeholder Image",
        },
      },
      {
        id: "el6",
        type: "paragraph",
        settings: {
          text: "A different layout with more content width.",
          color: "#555555",
          fontSize: "18px",
          fontWeight: 400,
        },
      },
    ],
  },
];
