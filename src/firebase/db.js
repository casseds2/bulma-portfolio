import { App } from "./app";
import "firebase/firestore";

const database = App.firestore();

// eslint-disable-next-line import/prefer-default-export
export const Db = database;
