# Generated by Django 5.1.7 on 2025-03-22 08:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0004_alter_milkentry_total_amount'),
    ]

    operations = [
        migrations.DeleteModel(
            name='MilkEntry',
        ),
    ]
