import { createBrowserHistory } from 'history';

const isServer = process.browser;

let history;
if(isServer) {
    history = {};
} else {
    history = createBrowserHistory();
}

export default history;
export const { push } = history;