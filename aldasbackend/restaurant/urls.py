from django.urls import path
from .views import MenuList, ReservationCreate, create_checkout_session
from .import views

urlpatterns = [
    path('menu/', MenuList.as_view()),
    path('reserve/', ReservationCreate.as_view()),
    path ('products/', views.product_list, name='product_list'),
    path('', views.home),
    path('api/create-checkout-session/', create_checkout_session),
]


