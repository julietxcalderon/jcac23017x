import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

class Config:
    # Ruta de la base de datos SQLite
    DATABASE = os.path.join(BASE_DIR, 'database.db')

    # Otras configuraciones opcionales
    DEBUG = True