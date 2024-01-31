from django.views.generic import TemplateView


class DashBoardView(TemplateView):
    template_name = "dashboard.html"