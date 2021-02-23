from flask import Flask, render_template, jsonify
from urllib import request

app = Flask(__name__)


@app.route('/')
def init():
	return "Bienvenue sur le site de prise de note!"


# Page de connexion
@app.route('/connexion')
def connexion():
	return render_template("connexion.html")


# Page de déconnexion
@app.route('/deconnexion')
def logout():
	return "Vous êtes bien déconnecté"


# Page d'inscription
@app.route('/signup')
def signup():
	return "Votre inscription à bien été prise en compte"


# Page d'une note
@app.route('/notes/<note>')
def page_note(note):
	return " de note: {}".format(note)


# Partage d'une note
@app.route('/notes/<note>/share/<person>')
def share_notes(note, person):
	return "Votre note {} à bien été partagée avec {}".format(note, person)


# Utilisation de SWAPI
@app.route('/swapi/<resource>/<ordre>')
def swapi(resource, ordre):
	base_url = "https://swapi.dev/api/"
	req = request.Request(base_url + resource + "/" + ordre)
	with request.urlopen(req) as response:
		html = response.read()
	return html


if __name__ == "__main__":
	app.run(debug="TRUE")
