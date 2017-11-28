const Child2 = (props) => (
    <div>
        <h2>Child 2</h2>
        <h4>{props.message}</h4>
        <p>{JSON.stringify(props.match)}</p>
        <button onClick={() => props.notify('2')}>Notify!</button>
    </div>
);
