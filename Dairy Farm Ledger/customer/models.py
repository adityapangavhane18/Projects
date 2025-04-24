from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError

class Login(models.Model):  # Table name is `login`
    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    farmer_id = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=255)  # Store password securely

    def save(self, *args, **kwargs):
        self.password = make_password(self.password)  # Hash password before saving
        super().save(*args, **kwargs)

    def __str__(self):
        return self.full_name


class CowEntry(models.Model):
    farmer_id = models.CharField(max_length=50)
    cow_id = models.CharField(max_length=50, unique=True)  # Unique tag number
    cow_name = models.CharField(max_length=100)
    cow_color = models.CharField(max_length=50)
    breeding_data = models.TextField(blank=True, null=True)  # Optional field
    created_at = models.DateTimeField(auto_now_add=True)  # Auto timestamp

    def __str__(self):
        return f"{self.cow_name} ({self.cow_id})"
    
class MilkEntry(models.Model):
    farmer_id = models.CharField(max_length=10)  # Store farmer ID as a string
    date = models.DateField()
    litre = models.FloatField()
    price_per_litre = models.FloatField()
    fat = models.FloatField()
    total_amount = models.FloatField()

    def save(self, *args, **kwargs):
        self.total_amount = self.litre * self.price_per_litre  # Auto-calculate total amount
        super(MilkEntry, self).save(*args, **kwargs)

    def __str__(self):
        return f"Farmer ID: {self.farmer_id} - {self.date}"
