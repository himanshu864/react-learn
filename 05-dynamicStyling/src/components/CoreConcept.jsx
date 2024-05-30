import "./CoreConcept.css";

export function CoreConcept({ image, title, description }) {
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
