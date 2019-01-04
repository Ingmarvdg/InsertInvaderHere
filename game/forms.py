from django import forms

from .models import Game

class GameForm(forms.ModelForm):

    class Meta:
        model = Game
        fields = ('invader_name', 'defender', 'invader')
        widgets = {'invader_name': forms.TextInput(attrs={'placeholder': 'Write invader name..', 'autocomplete': 'off'}),
                    'defender': forms.FileInput(attrs={'onchange': 'get_add_filename(0)'}),
                    'invader': forms.FileInput(attrs={'onchange': 'get_add_filename(1)'})
        }
