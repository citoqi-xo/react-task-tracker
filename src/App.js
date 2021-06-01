function App() {

  const name = "Arifika"
  const x = false
  
  return (
    <div className="Container">
      <h1>Hallo From React</h1>
      <h2>Hallo {x ? 'Yes': 'No'}</h2>
    </div>
  );
}

export default App;
