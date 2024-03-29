"""
Django settings for djangoProject project.

Generated by 'django-admin startproject' using Django 3.0.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""

import os
from datetime import timedelta
# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))



SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME' : timedelta(seconds=30),    # tiempo de duración del token
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),    # tiempo de duración del token refrescado
    'BLACKLIST_AFTER_ROTATION' : True,  # Mandar a la lista negra a la token ya generada
    'ALGORITHM': 'HS256',  #Cambiar el algoritmo de encriptación de la token --> HS256, HS384, HS512
    'SIGNING_KEY': 'clavedelatoken', #Cambiar la clave de encriptación de la token
    'VERIFYING_KEY': None,  #o sino 'clavedelatoken' , #Para verificar el contenido de la token generada  | Si nosotros ya tenemos un algoritmo definido line(22) , la verificación ya no se cumple o si tenemos la firma o clave de la otken por orden de prioridad va a ser usada la firma
    'AUDIENCE': None, # para incluir todas las token generadas o decodificadas. Cuando se pone su valor None, este campo excluye tdoas las oken y no se valida
    'AUTH_HEADER_TYPES': ('Bearer',), #'JWT
    'USER_ID_FIELD' : 'id', #TIPO DE VALIDACION DE LA TOKEN -> se recomienda es usar el id de usuario puesto que si ponemos el nombre
    'USER_ID_CLAIM': 'user_id' #Se usa para almacenar la identificacion del usuario , x ejemplo: user_id significa que los token generados incluyen el claim 'user_id'
}


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '@2#m2^(=k0n@!ncif%5zd)-1wza)pu2h_yhm@(c8(4$)vjwsr$'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'app_tienda',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'djangoProject.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'djangoProject.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'minimarket',
        'USER': 'root',
        'PASSWORD': 'root',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}


# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'es'

TIME_ZONE = 'America/Lima'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATIC_URL = '/static/'

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ]
}