# Generated by Django 2.1.5 on 2019-01-07 13:21

from django.db import migrations, models
import imagekit.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0018_auto_20190107_1315'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='defender',
            field=imagekit.models.fields.ProcessedImageField(default='', upload_to='media/games/8dKu12JFKW'),
        ),
        migrations.AlterField(
            model_name='game',
            name='gameref',
            field=models.CharField(default='8dKu12JFKW', max_length=10, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='game',
            name='invader',
            field=imagekit.models.fields.ProcessedImageField(default='', upload_to='media/games/8dKu12JFKW'),
        ),
    ]
