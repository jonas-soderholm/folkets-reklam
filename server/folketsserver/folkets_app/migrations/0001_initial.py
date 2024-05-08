# Generated by Django 4.1 on 2024-05-08 13:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='OngoingCommercial',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('current_donation_amount', models.IntegerField()),
                ('max_donation_amount', models.IntegerField()),
                ('info', models.CharField(max_length=100)),
            ],
        ),
    ]
