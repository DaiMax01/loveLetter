const selectElement = document.getElementById("mySelect");

const options = [
  { value: "option1", label: "Tu casa ;)" },
  { value: "option2", label: "Cena romántica :D" },
  { value: "option3", label: "Desayuno de señoras" },
  { value: "option4", label: "Pelicula juntos uwuwu" },
  { value: "option5", label: "Todas las anteriores pq te las mereces uwuwuwuwu" },
];

options.forEach((optionData) => {
  const option = document.createElement("option");
  option.value = optionData.value;
  option.textContent = optionData.label;
  selectElement.appendChild(option);
});