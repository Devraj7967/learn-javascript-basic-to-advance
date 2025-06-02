//What is Async : JavaScript runs one thing at a time, but some things (like fetching data) take time. We use async code to wait without freezing the page.

//Synchronous : This means code runs one line at a time, in order — it doesn't skip ahead.

// Single-threaded : JavaScript runs on one thread — it can only do one task at a time.
// No multitasking like in some other languages (e.g., Java with threads).
//But it can simulate multitasking using asynchronous code.

//What is an Execution Context? It's the environment where JavaScript code is executed and evaluated.
//Every time a function runs, or the program starts, JavaScript creates an execution context.
//Types of Execution Contexts
//1.Global Execution Context (GEC)
//-Created when the page first loads.
//-that’s not inside any function runs here.

//2.Function Execution Context (FEC)
//-Created every time a function is called.
//-Each function gets its own execution context.
//-Contains arguments, local variables, etc.

//3. Eval Execution Context (rarely used)
//Created when eval() is used to execute code from a string.