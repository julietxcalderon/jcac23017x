import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

class Config:
    # Configuración de la base de datos
    DATABASE = os.path.join(BASE_DIR, 'database.db')
    SQLALCHEMY_DATABASE_URI = f'sqlite:///{DATABASE}'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # Configuración de la aplicación
    DEBUG = True
    SECRET_KEY = 'tu_clave_secreta'

    # Configuración de Flask-CORS
    # CORS_ORIGINS = [
    #    'http://localhost:8080', 
    #]
    CORS_METHODS = ['GET', 'POST', 'PUT', 'DELETE']
    CORS_ALLOW_HEADERS = ['Content-Type', 'Authorization']