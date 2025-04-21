fetch('plants.json')
    .then(response => response.json())
    .then(data => { 
        const plantList = document.getElementById('plants');

        for (const plant of data) {
            const namesList = plant.common?.map(name => name.name).join(", ") || "None";
            const animalsList = plant.animals?.map(animal => animal).join(", ") || "None";
            const symptomsList = plant.symptoms?.map(symptom => symptom.name).join(", ") || "None";
            

            plantList.innerHTML += `<div class="plant">
                <h2>${plant.name}</h2>
                <div class="plant-info" style="display: none;">
                    <img src="${plant.images[0].source_url}" style="width: 200px; height: 200px;"/>
                    <p><strong>Plant Family:</strong> ${plant.family}</p>
                    <p><strong>Common Names:</strong> ${namesList}</p>
                    <p><strong>Danger Severity:</strong> ${plant.severity.label}</p>
                    <p><strong>Symptoms:</strong> ${symptomsList}</p>
                    <p><strong>Animals Affected By Plant:</strong> ${animalsList}</p>
                    <a href="${plant.wikipedia_url}" target="_blank">Learn More On Wikipedia</a>
                </div>
                <button class="toggle-info">Show Plant Info</button>
            </div>`;
        }
     
    })
    .catch(error => console.error('Error fetching data:', error));

