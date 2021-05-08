from app import db
from datetime import datetime
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash


class User(UserMixin, db.Model):
	__tablename__ = "users"

	uId = db.Column(db.Integer, primary_key=True)
	uEmail = db.Column(db.String(100), unique=True, nullable=False)
	uFirstName = db.Column(db.String(50), nullable=False)
	uLastname = db.Column(db.String(50), nullable=False)
	uPassword = db.Column(db.String(200), nullable=False)
	uCreated_on = db.Column(db.DateTime, index=False, unique=False, nullable=True)
	uLast_login = db.Column(db.DateTime, index=False, unique=False, nullable=True)
	isAuthenticated = db.Column(db.Boolean, default=False)

	def __init__(self, email, firstname, lastname, password):
		self.uEmail = email
		self.uFirstName = firstname
		self.uLastname = lastname
		self.uPassword = password

	def __repr__(self):
		return '<User {}>'.format(self.uEmail)

	def set_password(self, password):
		"""Create hashed password."""
		self.uPassword = generate_password_hash(password, method='sha256')

	def check_password(self, password):
		"""Check hashed password."""
		return check_password_hash(self.uPassword, password)

	def is_active(self):
		"""True, as all users are active."""
		return True

	def get_id(self):
		"""Return the email address to satisfy Flask-Login's requirements."""
		return self.email

	def is_authenticated(self):
		"""Return True if the user is authenticated."""
		return self.authenticated

	def is_anonymous(self):
		"""False, as anonymous users aren't supported."""
		return False


class Note(db.Model):
	__tablename__ = 'notes'
	nId = db.Column(db.Integer, primary_key=True)
	nTitle = db.Column(db.String(50), nullable=False)
	nOwner = db.Column(db.Integer, db.ForeignKey('users.uId'))
	nDate_created = db.Column(db.DateTime, default=datetime.now)

	def __init__(self, title, readers):
		self.nTitle = title
		self.nReaders = readers

	def __repr__(self):
		return '<id {}>'.format(self.nId)


class Profil(db.Model):
	__tablename__ = 'profils'

	pId = db.Column(db.Integer, primary_key=True)
	pName = db.Column(db.String(20))

	def __init__(self, name):
		self.pName = name

	def __repr__(self):
		return '<id {}>'.format(self.pId)


class Tag(db.Model):
	__tablename__ = 'tags'

	tId = db.Column(db.Integer, primary_key=True)
	tName = db.Column(db.String(50))

	def __init__(self, name):
		self.tName = name

	def __repr__(self):
		return '<id {}>'.format(self.tId)


class Categorie(db.Model):
	__tablename__ = 'categories'

	cId = db.Column(db.Integer, primary_key=True)
	cName = db.Column(db.String(50))

	def __init__(self, name):
		self.cName = name

	def __repr__(self):
		return '<id {}>'.format(self.cId)


class UserProfil(db.Model):
	__tablename__ = 'userprofils'

	uId = db.Column(db.Integer, db.ForeignKey('users.uId'), primary_key=True)
	pId = db.Column(db.Integer, db.ForeignKey('profils.pId'), primary_key=True)


class NoteUser(db.Model):
	__tablename__ = 'noteusers'

	nId = db.Column(db.Integer, db.ForeignKey('notes.nId'), primary_key=True)
	uId = db.Column(db.Integer, db.ForeignKey('users.uId'), primary_key=True)


class NoteTag(db.Model):
	__tablename__ = 'notetags'

	nId = db.Column(db.Integer, db.ForeignKey('notes.nId'), primary_key=True)
	tId = db.Column(db.Integer, db.ForeignKey('tags.tId'), primary_key=True)


class NoteCategorie(db.Model):
	__tablename__ = 'notecategories'

	nId = db.Column(db.Integer, db.ForeignKey('notes.nId'), primary_key=True)
	cId = db.Column(db.Integer, db.ForeignKey('categories.cId'), primary_key=True)