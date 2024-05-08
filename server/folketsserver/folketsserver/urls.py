from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("api/", include("folkets_app.urls")),
    path("admin/", admin.site.urls),
]