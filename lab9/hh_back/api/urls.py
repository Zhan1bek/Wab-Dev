from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.company_list, name='company_list'),
    path('companies/<int:id>/', views.company_detail(), name='product_detail'),

]