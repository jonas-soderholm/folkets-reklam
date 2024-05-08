from django.http import HttpResponse, JsonResponse
from .models import OngoingCommercial
from django.core.serializers import serialize

def ongoing_commercials(request):
    ongoing_commercials = OngoingCommercial.objects.all().values()
    return JsonResponse(list(ongoing_commercials), safe=False)

