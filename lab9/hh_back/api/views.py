from django.shortcuts import render
import json
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Company, Vacancy


@csrf_exempt
def company_list(request):
    if request.method == "GET":
        companies = Company.objects.all()
        companies_json = [c.to_json() for c in companies]
        return JsonResponse(companies_json, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        print(data)
        company = Company.objects.create(name=data.get("name"),
                                         description=data.get("description"),
                                         city=data.get("city"),
                                         address=data.get("address"))
        return JsonResponse(company.to_json())


def company_detail(request, id):
    company = get_object_or_404(Company, pk=id)
    if request.method == "GET":
        return JsonResponse(company.to_json())
    elif request.method == "PUT":
        data = json.loads(request.body)
        company.name = data.get("name"),
        company.description = data.get("description"),
        company.city = data.get("city"),
        company.address = data.get("address")
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == "DELETE":
        company.delete()
        return JsonResponse({'deleted': True})


def vacancy_list(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.all()
        return JsonResponse(vacancies.to_json())
    elif request.method == "POST":
        data = json.loads(request.body)
        print(data)
        vacancy = Vacancy.objects.create(name=data.get("name"),
                                         description=data.get("description"),
                                         salary=data.get("salary"),
                                         company=data.get("company"))
        return JsonResponse(vacancy.to_json())


def vacancy_detail(request, id):
    vacancy = get_object_or_404(Vacancy, pk=id)
    if request.method == "GET":
        return JsonResponse(vacancy.to_json())
    elif request.method == "PUT":
        ...
    elif request.method == "DELETE":
        ...


