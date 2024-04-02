from flask import Flask, jsonify
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['test']  
collection = db['test_collection']  

@app.route('/api/commercials')
def get_commercials():
    mycollection_data = list(collection.find())
    # Convert ObjectId objects to strings
    for doc in mycollection_data:
        doc['_id'] = str(doc['_id'])
    return jsonify(mycollection_data)

@app.route('/')
def hello():
    return "hello from backend"

if __name__ == '__main__':
    app.run(debug=True)
