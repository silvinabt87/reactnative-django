FROM python:3.8-slim-buster
ENV PYTHONBUFFERED=1
# RUN mkdir /api
# WORKDIR /api
# ADD . /api/
WORKDIR /backend
RUN pip install django django-cors-headers djangorestframework
COPY . .
EXPOSE 8000