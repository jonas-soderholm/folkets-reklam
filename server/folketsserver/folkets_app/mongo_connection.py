from pymongo.mongo_client import MongoClient
import pymongo
import os
from dotenv import load_dotenv

load_dotenv()
mongodb_uri = os.getenv('MONGODB_URI')
mongodb_name = os.getenv('MONGO_DB_NAME')
mongodb_collection = os.getenv('MONGO_DB_COLLECTION')

client = pymongo.MongoClient(mongodb_uri)

#Define DB Name
dbname = client[mongodb_name]

#Define Collection
collection = dbname[mongodb_collection]

# commercial={
#     "name": "Sammy",
#     "current_donation_amount" : 2000,
#     "max_donation_amount" : 5000,
#     "info" : "Shark",
#     "amount_of_donations" : 48,
#     "status" : "active",
#     "img" : "email@example.com"
# }

# collection.insert_one(commercial)

# user_details = collection.find({})


