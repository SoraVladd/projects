from __future__ import unicode_literals
from datetime import datetime
from django.db import models
import re

class UserManager(models.Manager):
    def basic_validator(self,postData):
        errors = {}
        if len(postData['first_name']) < 2:
            errors["first_name"] = "First name should be at least 2 characters"
        if len(postData['last_name']) < 2:
            errors["last_name"] = "Last name should be at least 3 characters"
        if len(postData['email']) < 10:
            errors["email"] = "Email address is not valid"
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postData['email']):
            errors['email'] = "Email address must be valid"
        if (postData['password']) != (postData['confirm_pw']):
            errors["password"] = "Passwords must match"
        x = User.objects.filter(email=(postData['email']))
        if len(x)>0:
            errors["email"] = "Email is already taken, choose a new email address"
        if (postData['birthdate']) > str(datetime.today()):
            errors["birthdate"] = "Birthdate must be in the past, time traveler *rolls eyes*"
        return errors
    def login_validator(self,postData):
        errors = {}
        if len(postData['email']) < 10:
            errors["email"] = "Email address is not valid"
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postData['email']):
            errors['email'] = "Email address must be valid"
        x = User.objects.filter(email=postData['email'])
        if not x:
            errors['email'] = "That email address is not on file"
        return errors

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    birthday = models.DateTimeField(null=True,blank=True)
    password = models.CharField(max_length=255)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
    def __repr__(self):
        return f"<User object: {self.first_name} ({self.email})>"