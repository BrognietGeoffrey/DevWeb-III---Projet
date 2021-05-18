from app import db
from datetime import datetime
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash


class User(UserMixin, db.Model):
	__tablename__ = "users"

	uid = db.Column(db.Integer, primary_key=True)
	uemail = db.Column(db.String(100), unique=True, nullable=False)
	ufirstname = db.Column(db.String(50), nullable=False)
	ulastname = db.Column(db.String(50), nullable=False)
	upassword = db.Column(db.String(200), nullable=False)
	ucreated_on = db.Column(db.DateTime, index=False, unique=False, nullable=True)
	ulast_login = db.Column(db.DateTime, index=False, unique=False, nullable=True)
	isauthenticated = db.Column(db.Boolean, default=False)

	def __init__(self, email, firstname, lastname, password):
		self.uemail = email
		self.ufirstname = firstname
		self.ulastname = lastname
		self.upassword = password

	def __repr__(self):
		return '<User {}>'.format(self.uemail)

	def set_password(self, password):
		"""Create hashed password."""
		self.upassword = generate_password_hash(password, method='sha256')

	def check_password(self, password):
		"""Check hashed password."""
		return check_password_hash(self.upassword, password)

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
	nid = db.Column(db.Integer, primary_key=True)
	ntitle = db.Column(db.String(50), nullable=False)
	nowner = db.Column(db.Integer, db.ForeignKey('users.uid'))
	ndate_created = db.Column(db.DateTime, default=datetime.now)

	def __init__(self, title, readers):
		self.ntitle = title
		self.nreaders = readers

	def __repr__(self):
		return '<id {}>'.format(self.nid)


class Profil(db.Model):
	__tablename__ = 'profils'

	pid = db.Column(db.Integer, primary_key=True)
	pname = db.Column(db.String(20))

	def __init__(self, name):
		self.pname = name

	def __repr__(self):
		return '<id {}>'.format(self.pid)


class Tag(db.Model):
	__tablename__ = 'tags'

	tid = db.Column(db.Integer, primary_key=True)
	tname = db.Column(db.String(50))

	def __init__(self, name):
		self.tname = name

	def __repr__(self):
		return '<id {}>'.format(self.tid)


class Categorie(db.Model):
	__tablename__ = 'categories'

	cid = db.Column(db.Integer, primary_key=True)
	cname = db.Column(db.String(50))

	def __init__(self, name):
		self.cname = name

	def __repr__(self):
		return '<id {}>'.format(self.cid)


class UserProfil(db.Model):
	__tablename__ = 'userprofils'

	uid = db.Column(db.Integer, db.ForeignKey('users.uid'), primary_key=True)
	pid = db.Column(db.Integer, db.ForeignKey('profils.pid'), primary_key=True)


class NoteUser(db.Model):
	__tablename__ = 'noteusers'

	nid = db.Column(db.Integer, db.ForeignKey('notes.nid'), primary_key=True)
	uid = db.Column(db.Integer, db.ForeignKey('users.uid'), primary_key=True)


class NoteTag(db.Model):
	__tablename__ = 'notetags'

	nid = db.Column(db.Integer, db.ForeignKey('notes.nid'), primary_key=True)
	tid = db.Column(db.Integer, db.ForeignKey('tags.tid'), primary_key=True)


class NoteCategorie(db.Model):
	__tablename__ = 'notecategories'

	nid = db.Column(db.Integer, db.ForeignKey('notes.nid'), primary_key=True)
	cid = db.Column(db.Integer, db.ForeignKey('categories.cid'), primary_key=True)