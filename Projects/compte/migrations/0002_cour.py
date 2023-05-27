# Generated by Django 4.1.7 on 2023-05-27 11:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('compte', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='cour',
            fields=[
                ('name', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('description', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('price', models.FloatField()),
            ],
        ),
    ]
