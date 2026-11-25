from rest_framework import serializers
from .models import MenuItem, Reservation, Product  # ✅ Make sure Product exists

class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = '__all__'

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):   # ✅ This is what’s missing
    class Meta:
        model = Product
        fields = '__all__'
