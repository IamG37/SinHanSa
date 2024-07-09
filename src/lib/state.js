import { writable } from 'svelte/store';

const state = writable(0);
const Title = writable(0);
const RES = writable(0);

export { state, Title, RES };