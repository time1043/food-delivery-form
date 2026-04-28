export default function RenderCount() {
  let count = 0;

  return () => {
    count++;
    return <div className="m-4">Render Count: {count}</div>;
  };
}
