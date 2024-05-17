export default function Jokes(props) {
  return (
    <ul>

      {props.setup && <li>
        <h3>setup: {props.setup}</h3>
      </li>}
      <h4>puchline: {props.punchline}</h4>
      <hr />
    </ul>
  );
}
