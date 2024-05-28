import atom from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";

function Header() {
  return (
    <header>
      <img src={atom} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

/*
function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt="atom image" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
*/

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt="atom image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
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
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
