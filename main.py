from flask import Flask, render_template, url_for
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
#Intialization of db below
#app.config['SQLALACHEMY_DATABASE_URI'] =
# db = SQLAlchemy(app)
#
# class reservation(db.model):
#     #guestId =
#     firstName = db.Column(db.String(25), nullable=False)
#     lastName =db.column(db.String(25), nullable=False)
#     phoneNumber = db.column(db.Integer, nullable=False)
#     email = db.column(db.VARCHAR, nullable=False)
#     #restID =
#     partySize = db.column(db.Integer, nullable=False)
#     dateReserved = db.column(db.Date, nullable=False)
#     timeReserved = db.column(db.Time, nullable=False)
#     dateCreated = db.column(db.DateTime, dafault=datetime.utcnow)


@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)