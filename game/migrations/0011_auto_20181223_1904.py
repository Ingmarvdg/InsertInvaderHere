# Generated by Django 2.1.4 on 2018-12-23 19:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0010_auto_20181221_1755'),
    ]

    operations = [
        migrations.RenameField(
            model_name='game',
            old_name='title',
            new_name='defender_name',
        ),
        migrations.AlterField(
            model_name='game',
            name='defender',
            field=models.FileField(blank=True, null=True, upload_to='media/games/bDsZx5VcIB'),
        ),
        migrations.AlterField(
            model_name='game',
            name='gameref',
            field=models.CharField(default='bDsZx5VcIB', max_length=10, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='game',
            name='invader',
            field=models.FileField(blank=True, null=True, upload_to='media/games/bDsZx5VcIB'),
        ),
        migrations.AlterField(
            model_name='game',
            name='projectile',
            field=models.FileField(blank=True, null=True, upload_to='media/games/bDsZx5VcIB'),
        ),
    ]
