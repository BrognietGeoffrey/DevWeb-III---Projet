import os
from flask import Flask, jsonify, redirect, request, url_for, Response, flash
from flask_login import login_required, logout_user, current_user, login_user, LoginManager
from flask_cors import cross_origin, CORS
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv

load_dotenv('.env')

app = Flask(__name__)
app.config.from_object(os.environ.get('APP_SETTINGS'))
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
cors = CORS(app)

login_manager = LoginManager()
login_manager.login_view = 'login'
login_manager.init_app(app)

from models import *


@app.route("/", methods=["GET"])
@cross_origin()
def get_example():
    """GET in server"""
    response = jsonify(message="Simple server is running")
    return response


@app.route("/", methods=["POST"])
@cross_origin()
def post_example():
    """POST in server"""
    return jsonify(message="POST request returned")


@app.route("/api/signup", methods=['GET', 'POST'])
@cross_origin()
def signup():
    req_data = request.get_json()
    email = req_data['email']
    firstname = req_data['firstname']
    lastname = req_data['lastname']

    existing_user = User.query.filter_by(uEmail=email).first()
    if existing_user is None:
        user = User(
            email=email,
            firstname=firstname,
            lastname=lastname,
            password=""
        )
        user.set_password(password=req_data['pwd'])
        db.session.add(user)
        db.session.commit()
        login_user(user)
        print(req_data)
        return Response(status=201)
    else:
        return Response(status=409)


@app.route('/api/login', methods=['GET', 'POST'])
@cross_origin()
def login():
    req_data = request.get_json()
    if current_user.is_authenticated:
        return redirect("http://127.0.0.1:3000/")
    if req_data:
        email = req_data['email']
        pwd = req_data['pwd']
        user = User.query.filter_by(uEmail=email).first()
        print(user)
        if user and user.check_password(password=pwd):
            login_user(user)
        return Response(status=401)


@login_manager.user_loader
def load_user(user_id):
    # since the user_id is just the primary key of our user table, use it in the query for the user
    return User.query.get(int(user_id))


if __name__ == '__main__':
    app.run(debug=True)
