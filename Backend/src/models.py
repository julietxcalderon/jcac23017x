class Ley:
    def __init__(self, codigo, descripcion):
        self.codigo = codigo
        self.descripcion = descripcion
        
class Inventario:
    def __init__(self):
        self.leyes = []
    def agregar_ley(self, ley):
        self.leyes.append(ley)
    def obtener_leyes(self):
        return self.leyes
    
class Carrito:
    def __init__(self):
        self.leyes = []
    def agregar_ley(self, ley):
        self.leyes.append(ley)
    def obtener_leyes(self):
        return self.leyes