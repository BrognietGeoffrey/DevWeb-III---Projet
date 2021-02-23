from flask import Flask, render_template, jsonify

app = Flask(__name__)

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
