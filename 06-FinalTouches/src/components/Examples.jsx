import { useState } from "react";
import TabButton from "./TabButton.jsx";
import TabContent from "./TabContent.jsx";
import { EXAMPLES } from "../data.js";
import "./Examples.css";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    tabContent = <TabContent {...EXAMPLES[selectedTopic]} />;
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          onSelect={() => setSelectedTopic("components")}
          isActive={selectedTopic === "components"}
        >
          Component
        </TabButton>
        <TabButton
          onSelect={() => setSelectedTopic("jsx")}
          isActive={selectedTopic === "jsx"}
        >
          JSX
        </TabButton>
        <TabButton
          onSelect={() => setSelectedTopic("props")}
          isActive={selectedTopic === "props"}
        >
          Props
        </TabButton>
        <TabButton
          onSelect={() => setSelectedTopic("state")}
          isActive={selectedTopic === "state"}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
