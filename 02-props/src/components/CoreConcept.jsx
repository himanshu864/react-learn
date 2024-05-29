import "./CoreConcept.css";

/*
export default function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt="atom image" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
*/

export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt="Image not found" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export function Fundamental(props) {
  return <li>{props.children}</li>;
}
