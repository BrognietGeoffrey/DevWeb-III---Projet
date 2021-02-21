from flask import Flask
import swapi
from urllib import request

app = Flask(__name__)


@app.route('/')
def home():
	return "Bienvenue sur votre nouveau gestionnaire de notes"


@app.route('/login')
def login():
	return "Vous êtes bien connecté"


@app.route('/logout')
def logout():
	return "Vous êtes bien déconnecté"


@app.route('/signup')
def signup():
	return "Votre inscription à bien été prise en compte"


@app.route('/notes/<note>')
def notes(note):
	return f"Votre note contient : \n {note}"


@app.route('/notes/<note>/share/<person>')
def share_notes(note, person):
	return f"Votre note {note} à bien été partagée avec {person}"


@app.route('/swapi/<resource>/<ordre>')
def swapi(resource, ordre):
	if resource == "people":
		req = request.Request(f'https://swapi.dev/api/people/{ordre}')
	if resource == "planets":
		req = request.Request(f'https://swapi.dev/api/planets/{ordre}')
	if resource == "starships":
		req = request.Request(f'https://swapi.dev/api/starships/{ordre}')
	if resource == "films":
		req = request.Request(f'https://swapi.dev/api/films/{ordre}')
	if resource == "vehicles":
		req = request.Request(f'https://swapi.dev/api/vehicles/{ordre}')
	if resource == "species":
		req = request.Request(f'https://swapi.dev/api/species/{ordre}')
	with request.urlopen(req) as response:
		html = response.read()
	return html


if __name__ == "__main__":
	app.run(debug="TRUE")
