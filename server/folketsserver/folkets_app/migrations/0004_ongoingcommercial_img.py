# Generated by Django 4.1 on 2024-05-09 14:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('folkets_app', '0003_ongoingcommercial_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='ongoingcommercial',
            name='img',
            field=models.CharField(default='img', max_length=100),
        ),
    ]
