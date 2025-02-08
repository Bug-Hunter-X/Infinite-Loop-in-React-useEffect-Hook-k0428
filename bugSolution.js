```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: only update count once on mount
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);  //update every 1 sec
    return () => clearInterval(interval); //cleanup function
  }, []); // Empty dependency array: useEffect runs only once on mount

  return <div>Count: {count}</div>;
}
```