from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://user:password@host:port/dbname"
db = SQLAlchemy(app)

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)

class APIKey(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    key = db.Column(db.String(255), unique=True, nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'), nullable=False)
    project = db.relationship('Project', backref=db.backref('api_keys', lazy=True))

@app.route('/api/api-keys', methods=['GET'])
def get_api_keys():
    api_keys = APIKey.query.all()
    result = []
    for key in api_keys:
        result.append({
            'api_key': key.key,
            'project': key.project.name
        })
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)