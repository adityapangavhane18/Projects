from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect
# Create your views here.
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Login , CowEntry , MilkEntry
from django.contrib.auth.hashers import check_password
from django.shortcuts import render, get_object_or_404, redirect
from django.http import JsonResponse


@csrf_protect 
def register_farmer(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        full_name = request.POST.get('name')
        city = request.POST.get('city')
        farmer_id = request.POST.get('username')
        password = request.POST.get('password')

        if Login.objects.filter(email=email).exists():
            messages.error(request, "Email already exists!")
        elif Login.objects.filter(farmer_id=farmer_id).exists():
            messages.error(request, "Farmer ID already taken!")
        else:
            farmer = Login(email=email, full_name=full_name, city=city, farmer_id=farmer_id, password=password)
            farmer.save()
            messages.success(request, "Registration successful!")
            return redirect('customer')

    return render(request, 'register.html')

def customer(request):
    if request.method == 'POST':
        farmer_id = request.POST.get('farmer_id')
        password = request.POST.get('password')

        try:
            # Check if the farmer exists in the Login table
           user = Login.objects.get(farmer_id=farmer_id)  # Fetch user by ID
           if check_password(password, user.password):  # Check password securely
    
            
            return render(request, 'home.html')  # Redirect to home.html if login is successful
           messages.success(request, "Login successful!")
        except Login.DoesNotExist:
            messages.error(request, "Invalid Farmer ID or Password!")
            return redirect('customer')  # Redirect back to login page if credentials are incorrect

    return render(request, 'index.html')  # Render the login page



def user_admin_selection(request):
    return render(request, 'user_admin_selection.html')

def user_authentication(request):
    return render(request, 'user_authentication.html')

def register(request):
    template = loader.get_template('register.html')
    return HttpResponse(template.render())


# Home Page View
def home_view(request):
    return render(request, 'home.html')

# Cow Entry Form View
#def cow_entry_view(request):
 #   return render(request, 'cow_entries.html')

# Check Record View
def check_record_view(request):
    return render(request, 'check_record.html')

# Order Cow Food View
def order_view(request):
    return render(request, 'order.html')


def cow_entries(request):
    if request.method == "POST":
        farmer_id = request.POST['farmer_id']
        cow_id = request.POST['cow_id']
        cow_name = request.POST['cow_name']
        cow_color = request.POST['cow_color']
        breeding_data = request.POST.get('breeding_data', '')

        # Save to database
        CowEntry.objects.create(
            farmer_id=farmer_id,
            cow_id=cow_id,
            cow_name=cow_name,
            cow_color=cow_color,
            breeding_data=breeding_data
        )

        return redirect('cow_entries')  # Redirect back to the form page after saving

    return render(request, 'cow_entries.html')


def check_cows(request):
    cows = CowEntry.objects.all()  # Fetch all cow entries
    return render(request, 'check_cows.html', {'cows': cows})



# View to show all cows
# def check_cows(request):
  #   cows = CowEntry.objects.all()
    # return render(request, 'check_cows.html', {'cows': cows})

# View to delete a cow entry
def delete_cow(request, cow_id):
    if request.method == "POST":
        cow = get_object_or_404(CowEntry, id=cow_id)
        cow.delete()
        return JsonResponse({"success": True})
    return JsonResponse({"success": False}, status=400)

# View to edit a cow entry
def edit_cow(request, cow_id):
    cow = get_object_or_404(CowEntry, id=cow_id)
    
    if request.method == "POST":
        cow.farmer_id = request.POST.get("farmer_id")
        cow.cow_id = request.POST.get("cow_id")
        cow.cow_name = request.POST.get("cow_name")
        cow.cow_color = request.POST.get("cow_color")
        cow.breeding_data = request.POST.get("breeding_data")
        cow.save()
        return redirect("/check_cows/")

    return render(request, "edit_cow.html", {"cow": cow})




def check_amount(request):
    farmer_id = request.GET.get('farmer_id', None)
    records = []
    
    if farmer_id:
        records = MilkEntry.objects.filter(farmer_id=farmer_id)

    return render(request, 'check_records.html', {'records': records, 'farmer_id': farmer_id})

def search_results(request):
    farmer_id = request.GET.get('farmer_id', '').strip()  # Get Farmer ID
    records = None  # Default to None

    if farmer_id:
        records = MilkEntry.objects.filter(farmer_id=farmer_id)  # Fetch records

    return render(request, 'search_results.html', {'records': records, 'farmer_id': farmer_id})
