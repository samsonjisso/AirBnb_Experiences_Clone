export default function Jokes(props) {
  return (
    <ul>
      <li>
        <h3>setup: {props.setup}</h3>
      </li>
      <h4>puchline: {props.punchline}</h4>
    </ul>
  );
}
