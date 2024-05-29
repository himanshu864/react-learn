import componentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import {
  default as CoreConcept,
  Fundamental,
} from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

export default function App() {
  function handleSelect(tab) {
    if (tab == 1) {
      console.log("Components");
    } else if (tab == 2) {
      console.log("JSX");
    } else if (tab == 3) {
      console.log("Props");
    } else {
      console.log("State");
    }
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
              <p>{CORE_CONCEPTS[3].descriphandleSelecttion}</p>
            </Fundamental>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect(1)}>Component</TabButton>
            <TabButton onSelect={() => handleSelect(2)}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect(3)}>Props</TabButton>
            <TabButton onSelect={() => handleSelect(4)}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}
