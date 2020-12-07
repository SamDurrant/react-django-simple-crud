# Generated by Django 3.1.4 on 2020-12-06 16:49

from django.db import migrations

def create_data(apps, schema_editor):
    Student = apps.get_model('students', 'Student')
    Student(name="Sam Durrant", email="sam@email.com", document="22345423", phone="5551238877").save()

class Migration(migrations.Migration):

    dependencies = [
        ('students', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data)
    ]