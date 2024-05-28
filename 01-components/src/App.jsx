const dudes = ["Himanshu", "Malik", "Angel"];
function getRandIdx(size) {
  return Math.floor(Math.random() * size);
}

function Extra() {
  const name = dudes[getRandIdx(dudes.length)];
  return (
    <div>
      <h3>My name is {name}</h3>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, provident?
    </div>
  );
}

export default function App() {
  return (
    <>
      <h1>Hello Moto</h1>
      <Extra />
    </>
  );
}
