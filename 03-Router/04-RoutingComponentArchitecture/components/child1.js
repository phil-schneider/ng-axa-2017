const Child1 = (props) => (
    <div>
        <h2>Child 1</h2>
        <h4>{props.message}</h4>
        <button onClick={() => props.notify('1')}>Notify!</button>
    </div>
);
