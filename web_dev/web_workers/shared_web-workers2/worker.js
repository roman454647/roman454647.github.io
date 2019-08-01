// this object is a state that will be cloned into every window
let crossWindowState = {
    counter: 0
};
// wait for a connection
onconnect = (e) => {
    // we take the caller port
    const port = e.ports[0];

    // on message we expect a json that will tell the worker what to do
    port.onmessage = ({data}) => {
        const {action, state} = data;

        if (action === 'getState') {
            port.postMessage(crossWindowState);
        } else if (action === 'setState') {
            crossWindowState = state;
            port.postMessage(crossWindowState);
        }
    };
};
