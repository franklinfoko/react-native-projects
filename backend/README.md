### create database
python
>>> from app import app, db
>>> app.app_context().push()
>>> db.create_all()
$ flask shell
>>> db.create_all()
