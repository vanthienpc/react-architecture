import { combineEpics } from 'redux-observable';

const epics = [
  // list out epics in here
].filter(Boolean);

const rootEpic = combineEpics(...epics);

export default rootEpic;

export type RootEpic = ReturnType<typeof rootEpic>;
