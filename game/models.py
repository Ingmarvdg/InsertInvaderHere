from django.db import models
from django.utils.crypto import get_random_string
from datetime import datetime, timedelta, timezone
from django.db import models
from PIL import Image
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill
from colorfield.fields import ColorField
from django.db.models.signals import post_delete
from django.dispatch import receiver

def get_remove_date():
    return datetime.now() + timedelta(days=1)

class Game(models.Model):
    def pkgen():
        pk = get_random_string(length=10)
        return pk
    pk = pkgen()
    images_location = 'media/games/'+pk
    gameref = models.CharField(max_length=10, primary_key=True, default=pk)

    invader_name = models.CharField(max_length=100)
    dateCreated = models.DateTimeField(auto_now_add=True)
    is_public = models.BooleanField(blank=True, default=True)
    is_nsfw = models.BooleanField(blank=True, default=True)

    remove_date = models.DateTimeField(blank=True, default=get_remove_date)
    created_by = models.CharField(max_length=100, blank=True)
    highscores = models.CharField(max_length=250, blank=True)
    projectile_color = ColorField(default='#ffffff')

    # images for characters in the game
    defender = ProcessedImageField(upload_to=images_location,
                                        blank=False,
                                        default='',
                                        processors=[ResizeToFill(100, 100)],
                                        format='PNG',
                                        options={'quality': 60})

    invader = ProcessedImageField(upload_to=images_location,
                                    blank=False,
                                    default='',
                                    processors=[ResizeToFill(100, 100)],
                                    format='PNG',
                                    options={'quality':60})

    def __str__(self):
        return self.invader_name + " ref: " + self.gameref

@receiver(post_delete, sender=Game)
def submission_delete(sender, instance, **kwargs):
    instance.defender.delete(False)
    instance.invader.delete(False)
