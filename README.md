# Props in react
1. what do props help us to accomplish?
    - help us to make components more reusable
2. How to pass props to  a component?
    - example <SomeCompoent title="???">
3. can i pass a custom prop (e.g blablabla={true}) to a native dom
    element? (e.g <div blahblah=true> why or why not)
    no, b/c they are converted to real dom 
4. How do i receive props in component?
function Navbar(props) {
    console.log(props.any)
    return (
        <header >
        .....
        </header>
    )
}
