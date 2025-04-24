from django.contrib import admin

# Register your models here.
from .models import Login , CowEntry , MilkEntry
from django.core.exceptions import ValidationError

class MilkEntryAdmin(admin.ModelAdmin):
    list_display = ('farmer_id', 'date', 'litre', 'price_per_litre', 'fat', 'total_amount')

    def save_model(self, request, obj, form, change):
        if not Login.objects.filter(farmer_id=obj.farmer_id).exists():
            raise ValidationError("Farmer ID does not exist in the Login table!")
        super().save_model(request, obj, form, change)


admin.site.register(Login)
admin.site.register(CowEntry)
admin.site.register(MilkEntry, MilkEntryAdmin)
