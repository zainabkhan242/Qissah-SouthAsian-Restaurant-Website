import stripe
from rest_framework import generics
from .models import MenuItem, Reservation, Product
from .serializers import MenuItemSerializer, ReservationSerializer, ProductSerializer
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.conf import settings
from rest_framework.response import Response
from rest_framework.decorators import api_view
import json

stripe.api_key = settings.STRIPE_SECRET_KEY

def home(request):
    return JsonResponse({"message": "Welcome to Aldas backend API!"})

@api_view(['GET'])
def product_list(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

class MenuList(generics.ListAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer

class ReservationCreate(generics.CreateAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

  # add your Secret key here

@csrf_exempt
def create_checkout_session(request):
    if request.method == 'POST':
        YOUR_DOMAIN = "http://localhost:3000"  # React frontend

        try:
            checkout_session = stripe.checkout.Session.create(
                payment_method_types=['card'],
                line_items=[
                    {
                        'price_data': {
                            'currency': 'usd',
                            'unit_amount': 2000,  # $20.00
                            'product_data': {
                                'name': 'T-shirt',
                            },
                        },
                        'quantity': 1,
                    },
                ],
                mode='payment',
                success_url=YOUR_DOMAIN + '/success',
                cancel_url=YOUR_DOMAIN + '/cancel',
            )
            return JsonResponse({'url': checkout_session.url})
        except Exception as e:
            return JsonResponse({'error': str(e)})