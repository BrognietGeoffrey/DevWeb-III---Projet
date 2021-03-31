from flask import Flask, render_template, jsonify, request
import psycopg2

app = Flask(__name__)

database = psycopg2.connect(
    host="localhost",
    database="postgres",
    user="postgres",
    password="postgres"
)

cur = database.cursor()
# Page d'acceuil
@app.route('/')
def init():
    return render_template("init.html")


# Page de connexion
@app.route('/connexion', methods=['GET', 'POST'])
def connexion():
    if request.method == 'POST':
        username = request.form.get("username", None)
        return render_template('connexion.html', username=username)
    else:
        return render_template('connexion.html')

@app.route('/notes')
def notes():
    return render_template("notes.html")


# Page d'une note
@app.route('/notes/<note>')
def page_page(note):
    return f"Page de note: {note}"


# Page de partage d'une note
@app.route('/notes/<note>/share/<person>')
def share_note(note, person):
    return f"Votre note {note} à bien été partagée avec {person}"


if __name__ == "__main__":
    app.run(debug=True)
