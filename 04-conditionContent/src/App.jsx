import { useState } from "react";
import componentImg from "./assets/components.png";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header.jsx";
import { CoreConcept, Fundamental } from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              title="My baby"
              description="The girl in the world"
              image={componentImg}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <Fundamental>
              <img src={CORE_CONCEPTS[3].image} alt="Cool image" />
              <h3>{CORE_CONCEPTS[3].title}</h3>
              <p>{CORE_CONCEPTS[3].description}</p>
            </Fundamental>
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => setSelectedTopic("components")}>
              Component
            </TabButton>
            <TabButton onSelect={() => setSelectedTopic("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => setSelectedTopic("props")}>
              Props
            </TabButton>
            <TabButton onSelect={() => setSelectedTopic("state")}>
              State
            </TabButton>
          </menu>
          {/* {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : (
            <p>Please select a topic</p>
          )} */}

          {/* {!selectedTopic && <p>Please select a topic</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

          {tabContent}
        </section>
      </main>
    </div>
  );
}
