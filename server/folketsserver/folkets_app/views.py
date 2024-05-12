from django.http import HttpResponse, JsonResponse
from .models import OngoingCommercial
from django.core.serializers import serialize
from folkets_app.mongo_connection import dbname, collection
from django_ratelimit.decorators import ratelimit

@ratelimit(key='ip', rate='50/m', block=True)
def ongoing_commercials(request):
    # Fetch users from MongoDB collection
    commercial = collection.find({})

    # Convert ObjectId instances to strings
    commercial_list = [{**commercial, "_id": str(commercial["_id"])} for commercial in commercial]

    # Return JSON response
    return JsonResponse(commercial_list, safe=False)