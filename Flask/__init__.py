from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def init():
    return render_template("init.html")

# Page de connexion
@app.route('/connexion')
def connexion():
    return render_template("connexion.html")

# Page d'une note
@app.route('/notes/<note>')
def page_note(note):
    return "Page de note: %s" % note


if __name__ == "__main__":
    app.run()
