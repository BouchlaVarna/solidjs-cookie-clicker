import { Component, createEffect, createSignal } from 'solid-js';
import { createLocalStore } from '../../hooks/createLocalStore';

const Home: Component = (props) => {
    const [cookies, setCookies] = createSignal(0);
    const [state, setState] = createLocalStore("cookies", { cookies: 0 });

    createEffect(() => {
        setCookies(state.cookies);
    })

    const addCookie = () => {
        setCookies(cookies => cookies + 1);
        setState("cookies", cookies);
    }

    return (
        <div>
            <h1>{cookies}</h1>
            <button onClick={() => addCookie()}>Click on me</button>
        </div>
    );
};

export default Home;