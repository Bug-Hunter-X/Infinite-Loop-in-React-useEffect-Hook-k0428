# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop caused by incorrect usage of the `useEffect` hook.  The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected version.

The bug arises from including the state variable `count` in the dependency array of `useEffect`. This creates a loop where every update to `count` triggers another render, leading to infinite rerenders and potential application crashes.