import json
import random

experiments = {}

nomes = [
    "Bússola",
    "Flores coloridas",
    "Pulmão humano",
    "Arrepiando cabelos",
    "Plate sua árvore",
    "Crie seu vulcão",
]

durations = random.sample(range(5, 50), 6)

materials = ["Prato", "Água", "Agulha", "Ímã", "Tampa de refrigerante"]

steps = [
    "Pegue uma bacia de plástico e encha-a com água.",
    "Esfregue um ímã numa agulha de aço, sempre em um mesmo sentido, para direcionar seu magnetismo.",
    "Faça duas fendas opostas na parte lateral da tampinha plástica de uma garrafa de refrigerante.",
    "Encaixe a agulha imantada na tampinha da garrafa de modo firme.",
    "Coloque o dispositivo para flutuar na bacia com água e sua bússola estará pronta.",
]

bird_story = {}

story = {
    "name": "Marrie Currie",
    "photo": "url_link",
    "text": "Era uma vez blablablablablablablablabla",
}

bird_story[0] = story

for index, item in enumerate(nomes):
    if index == 0:
        experiments[0] = {
            "name": item,
            "duration": 5,
            "materials": materials,
            "how_to": steps,
            "photos": ["test_url1", "test_url2"],
        }
    else:
        experiments[index] = {"name": item, "duration": durations[index]}


data = {"experiments": experiments, "bird_stories": bird_story}

curio_data = json.dumps(data)

print(curio_data)
