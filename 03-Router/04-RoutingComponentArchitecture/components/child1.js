const Child1 = (props) => (
    <div>
        <h2>Child 1</h2>
        <h4>{props.message}</h4>
        <p>{JSON.stringify(props.match)}</p>
        <button onClick={() => props.notify('1')}>Notify!</button>
    </div>
);
