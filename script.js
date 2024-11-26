const slider = document.getElementById("slider");
const sliderValue = document.getElementById("sliderValue");
const bubbleSortBtn = document.getElementById("bubble-sort-btn");
const container = document.getElementById("container");

// n ===> number of elements
let n = 5;
const max_height = 20;

let grid = [2, 1, 4, 5, 3];

// this is for initial grid visualization
for (let i = 0; i < n; i++) {
	let div = document.createElement("div");
	div.classList.add("element", `x-${i}`);
	div.textContent = grid[i];
	div.style.height = `${grid[i] * 5}%`;
	if (n > 15) {
		div.style.width = "30px";
	}

	container.appendChild(div);
}

slider.addEventListener("input", () => {
	container.innerHTML = "";
	sliderValue.textContent = slider.value;
	n = parseInt(slider.value);
	grid = Array.from({ length: n }, () =>
		Math.floor(Math.random() * max_height + 1)
	);
	// Main chart
	for (let i = 0; i < n; i++) {
		const div = document.createElement("div");
		div.classList.add("element", `x-${i}`);
		div.textContent = grid[i];
		div.style.height = `${grid[i] * 5}%`;

		container.appendChild(div);
	}
});

bubbleSortBtn.addEventListener(() => {});
