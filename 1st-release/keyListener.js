export default function createKeyListener(key) {
    const state = {
        observers: []
    };

    function subscribe(observerFunction) {
        state.observers.push(observerFunction);
    }

    function notifyAll() {
        for (const observerFunction of state.observers) {
            observerFunction();
        }
    }

    document.addEventListener('keydown', handleKeydown);

    function handleKeydown(event) {
        if (key === event.key) {
            notifyAll();
        }
    }

    return {
        subscribe
    };
}