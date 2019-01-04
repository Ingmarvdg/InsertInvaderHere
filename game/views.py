from django.shortcuts import render, get_object_or_404, redirect
from .forms import GameForm
from django.utils import timezone
from .models import Game
from django.core.files.storage import FileSystemStorage

def home(request):
    games = Game.objects.all().order_by('dateCreated')
    return render(request, 'game/homepage.html', {'title': 'Home', 'games': games})

def create(request):
    if request.method == "POST":
        form = GameForm(request.POST, request.FILES)
        if form.is_valid():
            game = form.save(commit=False)
            game.dateCreated = timezone.now()
            game.clean()
            game.save()
            return redirect('game_play', pk=game.pk)
        else:
            form = GameForm();

    form = GameForm
    return render(request, 'game/create.html', {'title': 'Create', 'form': form})

def play(request, pk):
    game_object = get_object_or_404(Game, pk = pk)
    return render(request, 'game/play.html', {'title': 'Play', 'game': game_object})

def overview(request):
    return render(request, 'game/overview.html', {'title': 'Overview'})

def donate(request):
    return render(request, 'game/donate.html', {'title': 'Donate'})
