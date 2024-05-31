import Concept from "./Concept.jsx";
import { CORE_CONCEPTS } from "../data.js";
import "./CoreConcepts.css";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <Concept key={conceptItem.title} {...conceptItem} />
        ))}

        {/* {CORE_CONCEPTS.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt="Cool image" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))} */}
      </ul>
    </section>
  );
}
