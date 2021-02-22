from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def init():
    return "Bienvenue sur le site de prise de note!"

# Page de connexion
@app.route('/connexion')
def connexion():
    return render_template("connexion.html")

# Page d'acceuil
@app.route('/acceuil')
def acceuil():
    return "Page d'acceuil"

# Page d'une note
@app.route('/notes/<note>')
def page_note(note):
    return "Page de note: %s" % note


if __name__ == "__main__":
    app.run()
