import { useState } from "react";
import TabButton from "./TabButton.jsx";
import TabContent from "./TabContent.jsx";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import "./Examples.css";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    tabContent = <TabContent {...EXAMPLES[selectedTopic]} />;
  }

  const examples = ["components", "jsx", "props", "state"];

  return (
    <Section title="Examples" id="examples">
      <menu>
        {examples.map((topic) => {
          return (
            <TabButton
              isActive={selectedTopic === topic}
              onClick={() => setSelectedTopic(topic)}
            >
              {topic.charAt(0).toUpperCase() + topic.slice(1)}
            </TabButton>
          );
        })}
        {/* <TabButton
          isActive={selectedTopic === "components"}
          onClick={() => setSelectedTopic("components")}
        >
          Component
        </TabButton>
        <TabButton
          isActive={selectedTopic === "jsx"}
          onClick={() => setSelectedTopic("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isActive={selectedTopic === "props"}
          onClick={() => setSelectedTopic("props")}
        >
          Props
        </TabButton>
        <TabButton
          isActive={selectedTopic === "state"}
          onClick={() => setSelectedTopic("state")}
        >
          State
        </TabButton> */}
      </menu>
      {tabContent}
    </Section>
  );
}
