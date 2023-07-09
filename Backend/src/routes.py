from flask import Blueprint, jsonify, request
import sqlite3
from models import Ley, Inventario

ley_routes = Blueprint('ley_routes', __name__)

DATABASE = 'database.db'

inventario = Inventario()

def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

@ley_routes.route('/leyes', methods=['GET'])
def obtener_leyes():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT codigo, descripcion FROM leyes")
    leyes = [{'codigo': codigo, 'descripcion': descripcion} for codigo, descripcion in cursor.fetchall()]
    cursor.close()
    conn.close()
    return jsonify(leyes)

@ley_routes.route('/leyes', methods=['POST'])
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

@ley_routes.route('/leyes/<codigo>', methods=['PUT'])
def actualizar_ley(codigo):
    ley_actualizada = request.get_json()
    conn = get_db_connection()
    cursor = conn.cursor()
    try:
        cursor.execute("UPDATE leyes SET descripcion = ? WHERE codigo = ?", (ley_actualizada['descripcion'], codigo))
        conn.commit()
        return jsonify({'mensaje': 'Ley actualizada correctamente'})
    except Exception as e:
        return jsonify({'error': str(e)})
    
@ley_routes.route('/leyes/<codigo>', methods=['DELETE'])
def eliminar_ley(codigo):
    conn = get_db_connection()
    cursor = conn.cursor()
    try:
        cursor.execute("DELETE FROM leyes WHERE codigo = ?", (codigo,))
        conn.commit()
        return jsonify({'mensaje': 'Ley eliminada correctamente'})
    except Exception as e:
        return jsonify({'error': str(e)})