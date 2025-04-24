from django.urls import path
from . import views
from .views import register_farmer, customer 
from .views import home_view, cow_entries, check_record_view, order_view, check_cows,delete_cow, edit_cow, check_amount, search_results
from . import views
urlpatterns = [
    path('login/', views.customer, name='customer'),
    path('register_farmer/', views.register_farmer, name='register_farmer'),

    path('', views.user_admin_selection, name='user_admin_selection'),  # Selection page
    path('user-auth/', views.user_authentication, name='user_authentication'),  # User authentication page
    path('register/', views.register_farmer, name='register'),
   # path('login/', customer, name='customer'),  # Login page (renders index.html)
   # path('dashboard/', your_dashboard_view, name='dashboard'),  # Redirect here after registration
    #path('cow_entries/', cow_entry_view, name='cow_entries'),
    path('check_record/', check_record_view, name='check_record'),
    path('order/', order_view, name='order'),
    path('home/', views.home_view, name='home'),
    path('cow_entries/', cow_entries, name='cow_entries'),
    path('check_cows/', views.check_cows, name='check_cows'),
    path('delete_cow/<int:cow_id>/', views.delete_cow, name='delete_cow'),
    path('edit_cow/<int:cow_id>/', views.edit_cow, name='edit_cow'),
    path('check_amount/', check_amount, name='check_amount'),
    path('search_results/', search_results, name='search_results'),  # New search results page

]