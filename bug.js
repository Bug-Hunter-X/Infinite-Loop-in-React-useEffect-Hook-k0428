```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: this will cause an infinite loop
    setCount(count + 1);
  }, [count]); // Dependency on count causes infinite rerenders

  return <div>Count: {count}</div>;
}
```