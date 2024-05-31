import Concept from "./Concept.jsx";
import { CORE_CONCEPTS } from "../data.js";
import Section from "./Section.jsx";
import "./CoreConcepts.css";

export default function CoreConcepts() {
  return (
    <Section title="Time to get started!" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <Concept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
}
