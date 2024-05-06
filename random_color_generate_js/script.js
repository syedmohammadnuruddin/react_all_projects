// Define randomColorUtility function
function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  
  // Define handleCreateRandomHexColor function
  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
  
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    return hexColor;
  }
  
  // Define handleCreateRandomRgbColor function
  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
  
    return `rgb(${r},${g}, ${b})`;
  }
  
  // Initial state
  let typeOfColor = "hex";
  let color = "#000000";
  
  // Render function
  function render() {
    const appDiv = document.getElementById("app");
    appDiv.innerHTML = `
      <div class="container" style="background-color: ${color};">
        <div class="button-container">
          <button class="button" onclick="handleClickCreateHexColor()">Create HEX Color</button>
          <button class="button" onclick="handleClickCreateRgbColor()">Create RGB Color</button>
          <button class="button" onclick="handleClickGenerateRandomColor()">Generate Random Color</button>
        </div>
        <div class="color-display">
          <h3>${typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
          <h1>${color}</h1>
        </div>
      </div>
    `;
  }
  
  // useEffect function (mocked)
  function useEffect(callback, dependencies) {
    callback();
  }
  
  // useState function (mocked)
  function useState(initialValue) {
    let state = initialValue;
    function setState(newState) {
      state = newState;
      render();
    }
    return [state, setState];
  }
  
  // useEffect hook (mocked)
  useEffect(() => {
    if (typeOfColor === "rgb") {
      color = handleCreateRandomRgbColor();
    } else {
      color = handleCreateRandomHexColor();
    }
  }, []);
  
  // Event handlers
  function handleClickCreateHexColor() {
    typeOfColor = "hex";
    color = handleCreateRandomHexColor();
    render();
  }
  
  function handleClickCreateRgbColor() {
    typeOfColor = "rgb";
    color = handleCreateRandomRgbColor();
    render();
  }
  
  function handleClickGenerateRandomColor() {
    if (typeOfColor === "hex") {
      color = handleCreateRandomHexColor();
    } else {
      color = handleCreateRandomRgbColor();
    }
    render();
  }
  
  // Initial render
  render();
  