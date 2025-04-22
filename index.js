fetch('plants.json')
    .then(response => response.json())
    .then(data => { 

        const generateButton = document.getElementById('info-generator');
        const infoDiv = document.getElementById('info-div');
        generateButton.addEventListener("click", () => {
            let plant = data[Math.floor(Math.random() * data.length)];
            const namesList = plant.common?.map(name => name.name).join(", ") || "None";
            const animalsList = plant.animals?.map(animal => animal).join(", ") || "None";
            const symptomsList = plant.symptoms?.map(symptom => symptom.name).join(", ") || "None";
            

            infoDiv.innerHTML = `<div class="plant">
                <h2>${plant.name}</h2>
                <img src="${plant.images[0].source_url}" style="width: 200px; height: 200px;"/>
                <p><strong>Plant Family:</strong> ${plant.family}</p>
                <p><strong>Common Names:</strong> ${namesList}</p>
                <p><strong>Danger Severity:</strong> ${plant.severity.label}</p>
                <p><strong>Symptoms:</strong> ${symptomsList}</p>
                <p><strong>Animals Affected By Plant:</strong> ${animalsList}</p>
                <a href="${plant.wikipedia_url}" target="_blank">Learn More On Wikipedia</a>
            </div>`;
        });
        
     
    })
    .catch(error => console.error('Error fetching data:', error));

