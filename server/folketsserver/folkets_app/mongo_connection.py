from pymongo.mongo_client import MongoClient
import pymongo
import os
from dotenv import load_dotenv

load_dotenv()
mongodb_uri = os.getenv('MONGODB_URI')

client = pymongo.MongoClient(mongodb_uri)

#Define DB Name
dbname = client['folketsdb']

#Define Collection
collection = dbname['commercials']

commercial={
    "name": "Sammy",
    "current_donation_amount" : 2000,
    "max_donation_amount" : 5000,
    "info" : "Shark",
    "amount_of_donations" : 48,
    "status" : "active",
    "img" : "email@example.com"
}

collection.insert_one(commercial)

user_details = collection.find({})
