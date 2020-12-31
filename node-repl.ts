import * as repl from 'repl';
import * as pyRepl from './repl';

const importObject = {
  imports: {
    imported_func: (arg : any) => {
      console.log("Logging from WASM: ", arg);
    }
  }
};
const r = new pyRepl.BasicREPL(importObject);

function myEval(cmd : string, context : any, filename : string, callback : any) {
  r.run(cmd).then((r) => callback(null, r)).catch((e) => console.error(e));
}

repl.start({ prompt: ">>>", eval: myEval });