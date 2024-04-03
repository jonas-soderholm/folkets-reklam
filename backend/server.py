# server.py
from flask import Flask, jsonify, request
from pymongo import MongoClient
from bson import ObjectId
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

@app.route('/api/addDonation', methods=['POST'])
def add_donation():
    data = request.json
    commercial_id = data.get('commercial_id')
    amount = data.get('amount')

    # Find the commercial document by its _id and update the amount_of_donations and current_amount_raised fields
    collection.update_one({'_id': ObjectId(commercial_id)}, {'$inc': {'amount_of_donations': 1, 'current_amount_raised': amount}})

    return jsonify({'message': 'Donation added successfully'}), 200



@app.route('/')
def hello():
    return "hello from backend"

if __name__ == '__main__':
    app.run(debug=True)
