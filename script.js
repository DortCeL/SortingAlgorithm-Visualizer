const slider = document.getElementById("slider");
const sliderValue = document.getElementById("sliderValue");
const bubbleSortBtn = document.getElementById("bubble-sort-btn");
const container = document.getElementById("container");

// n ===> number of elements
let n = 5;
const max_height = 90;
const height_multiplication_factor = 1;

let grid = [2, 1, 4, 5, 3];

// this is for initial grid visualization
for (let i = 0; i < n; i++) {
	let div = document.createElement("div");
	div.classList.add("element");

	//TODO: removed element number temporarily
	// div.textContent = grid[i];

	div.style.height = `${grid[i] * height_multiplication_factor}%`;

	div.style.width = "60px";

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

		// grid[i] or i ===> resolve : eita lagbei na.... amra height swap korbo children er array dhoira.
		div.classList.add("element");

		//removed element number temporarily
		// div.textContent = grid[i];

		div.style.height = `${grid[i] * height_multiplication_factor}%`;

		if (n < 25) {
			div.style.width = "50px";
		} else if (n < 50) {
			div.style.width = "30px";
		} else if (n < 70) {
			div.style.width = "20px";
		}

		container.appendChild(div);
	}
});

bubbleSortBtn.addEventListener("click", async () => {
	let swapped; // track if swap applies

	for (let i = 0; i < n - 1; i++) {
		swapped = false;

		for (let j = 0; j < n - i - 1; j++) {
			const cells = container.children;

			if (grid[j] > grid[j + 1]) {
				// swap heights
				const tempHeight = cells[j + 1].style.height;
				cells[j + 1].style.height = cells[j].style.height;
				cells[j].style.height = tempHeight;

				// swap grid elements
				[grid[j], grid[j + 1]] = [grid[j + 1], grid[j]];
				swapped = true;

				// pause
				await new Promise((resolve) => {
					setTimeout(resolve, 1);
				});

				// // visual feedback
				// ! i tried doing this but eikhane to corresponding div er height elomelo hoya jay since grid er index swap hoitese. so eita possible nah
				// let Acell = document.querySelector(`.x-${grid[i]}`);
				// let Bcell = document.querySelector(`.x-${grid[j]}`);
				// let tempHeight = parseInt(Bcell.style.height) / height_multiplication_factor;
				// Bcell.style.height = `${parseInt(Acell.style.height)}%`;
				// Acell.style.height = `${tempHeight * height_multiplication_factor}%`;
			}
		}
		if (!swapped) break;
	}
});
