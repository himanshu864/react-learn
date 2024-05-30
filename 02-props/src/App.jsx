import componentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import {
  default as CoreConcept,
  Fundamental,
} from "./components/CoreConcept.jsx";

export default function App() {
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
      </main>
    </div>
  );
}
