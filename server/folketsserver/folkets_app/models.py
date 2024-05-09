from django.db import models

class OngoingCommercial(models.Model):
    name = models.CharField(max_length=100)
    current_donation_amount = models.IntegerField(null=True) 
    max_donation_amount = models.IntegerField(null=True)  
    info = models.CharField(max_length=100)
    amount_of_donations = models.IntegerField(null=True) 
    status = models.CharField(max_length=100, default='active')