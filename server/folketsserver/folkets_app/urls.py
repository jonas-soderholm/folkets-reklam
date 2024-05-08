from django.urls import path

from . import views

urlpatterns = [
    path("ongoing_commercials/", views.ongoing_commercials, name="ongoing_commercials"),
]