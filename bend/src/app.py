from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3
from models import Ley, Inventario, Carrito
from routes import ley_routes
from config import Config

app = Flask(__name__)
CORS(app)
app.config.from_object(Config)
app.register_blueprint(ley_routes)

DATABASE = 'database.db'

def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

def create_table():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS leyes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        codigo TEXT NOT NULL,
        descripcion TEXT NOT NULL
        ) ''')
    conn.commit()
    cursor.close()
    conn.close()
    
def create_database():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='leyes'")
    table_exists = cursor.fetchone()
    if not table_exists:
        create_table()
    cursor.close()
    conn.close()

create_database()

inventario = Inventario()
carrito = Carrito()

@app.route('/')
def index():
    return 'API de Leyes'

@app.route('/leyes', methods=['GET'])
def obtener_leyes():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT codigo, descripcion FROM leyes")
    leyes = [{'codigo': codigo, 'descripcion': descripcion} for codigo, descripcion in cursor.fetchall()]
    cursor.close()
    conn.close()
    return jsonify(leyes)

@app.route('/leyes', methods=['POST'])
def agregar_ley():
    ley_data = request.get_json()
    ley = Ley(codigo=ley_data['codigo'], descripcion=ley_data['descripcion'])
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO leyes (codigo, descripcion) VALUES (?, ?)", (ley.codigo, ley.descripcion))
    conn.commit()
    cursor.close()
    conn.close()
    inventario.agregar_ley(ley)
    return jsonify({'mensaje': 'Ley agregada correctamente'})

@app.route('/leyes/<codigo>', methods=['PUT'])
def actualizar_ley(codigo):
    ley_actualizada = request.get_json()
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("UPDATE leyes SET descripcion = ? WHERE codigo = ?", (ley_actualizada['descripcion'], codigo))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'mensaje': 'Ley actualizada correctamente'})

@app.route('/leyes/<codigo>', methods=['DELETE'])
def eliminar_ley(codigo):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM leyes WHERE codigo = ?", (codigo,))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'mensaje': 'Ley eliminada correctamente'})

if __name__ == '__main__':
    app.run()
