// ================================================
// SISTEMA: MotoCare
// Archivo 1: creación de la base de datos y carga
// ================================================

// Seleccionar la base de datos
use("motocare");

// Eliminar la colección anterior para poder ejecutar
// este archivo varias veces sin duplicar documentos.
db.motocicletas.drop();

// Crear la colección principal
db.createCollection("motocicletas");

// Insertar los 12 documentos iniciales
db.motocicletas.insertMany([
  {
    _id: "MOTO001",
    marca: "Yamaha",
    modelo: "MT-03",
    cilindraje: 321,
    anio: 2024,
    ciudad: "Medellin",
    estado: "Activa",
    propietario: { nombre: "Carlos Perez", telefono: "3001112233", correo: "carlos@email.com" },
    mantenimientos: [
      { tipo: "Cambio de aceite", fecha: ISODate("2026-07-10"), costo: 85000 },
      { tipo: "Revision de frenos", fecha: ISODate("2026-09-15"), costo: 120000 }
    ],
    garantia: { vigente: true, meses: 24 },
    fecha_registro: ISODate("2026-01-10")
  },
  {
    _id: "MOTO002",
    marca: "Honda",
    modelo: "CB190R",
    cilindraje: 184,
    anio: 2023,
    ciudad: "Envigado",
    estado: "Activa",
    propietario: { nombre: "Laura Gomez", telefono: "3002223344", correo: "laura@email.com" },
    mantenimientos: [
      { tipo: "Cambio de aceite", fecha: ISODate("2026-07-12"), costo: 75000 },
      { tipo: "Cambio de filtros", fecha: ISODate("2026-08-20"), costo: 65000 }
    ],
    garantia: { vigente: true, meses: 12 },
    fecha_registro: ISODate("2026-01-15")
  },
  {
    _id: "MOTO003",
    marca: "Suzuki",
    modelo: "Gixxer 250",
    cilindraje: 249,
    anio: 2025,
    ciudad: "Medellin",
    estado: "En mantenimiento",
    propietario: { nombre: "Andres Torres", telefono: "3003334455", correo: "andres@email.com" },
    mantenimientos: [
      { tipo: "Revision de frenos", fecha: ISODate("2026-08-01"), costo: 150000 },
      { tipo: "Cambio de aceite", fecha: ISODate("2026-09-01"), costo: 90000 }
    ],
    garantia: { vigente: true, meses: 24 },
    fecha_registro: ISODate("2026-02-02")
  },
  {
    _id: "MOTO004",
    marca: "Bajaj",
    modelo: "Dominar 400",
    cilindraje: 373,
    anio: 2024,
    ciudad: "Sabaneta",
    estado: "Activa",
    propietario: { nombre: "Daniel Restrepo", telefono: "3004445566", correo: "daniel@email.com" },
    mantenimientos: [
      { tipo: "Cambio de filtros", fecha: ISODate("2026-07-18"), costo: 70000 },
      { tipo: "Revision general", fecha: ISODate("2026-09-22"), costo: 180000 }
    ],
    garantia: { vigente: true, meses: 24 },
    fecha_registro: ISODate("2026-02-10")
  },
  {
    _id: "MOTO005",
    marca: "KTM",
    modelo: "Duke 200",
    cilindraje: 199,
    anio: 2023,
    ciudad: "Envigado",
    estado: "Activa",
    propietario: { nombre: "Santiago Ruiz", telefono: "3005556677", correo: "santiago@email.com" },
    mantenimientos: [
      { tipo: "Cambio de aceite", fecha: ISODate("2026-08-05"), costo: 95000 },
      { tipo: "Revision de frenos", fecha: ISODate("2026-09-12"), costo: 130000 }
    ],
    garantia: { vigente: false, meses: 12 },
    fecha_registro: ISODate("2026-03-01")
  },
  {
    _id: "MOTO006",
    marca: "Kawasaki",
    modelo: "Ninja 400",
    cilindraje: 399,
    anio: 2025,
    ciudad: "Medellin",
    estado: "Activa",
    propietario: { nombre: "Julian Marquez", telefono: "3006667788", correo: "julian@email.com" },
    mantenimientos: [
      { tipo: "Cambio de aceite", fecha: ISODate("2026-08-10"), costo: 110000 },
      { tipo: "Revision general", fecha: ISODate("2026-10-01"), costo: 200000 }
    ],
    garantia: { vigente: true, meses: 36 },
    fecha_registro: ISODate("2026-03-15")
  },
  {
    _id: "MOTO007",
    marca: "Yamaha",
    modelo: "FZ25",
    cilindraje: 249,
    anio: 2022,
    ciudad: "Sabaneta",
    estado: "Inactiva",
    propietario: { nombre: "Miguel Angel Diaz", telefono: "3007778899", correo: "miguel@email.com" },
    mantenimientos: [
      { tipo: "Revision de frenos", fecha: ISODate("2026-07-25"), costo: 115000 },
      { tipo: "Cambio de filtros", fecha: ISODate("2026-09-05"), costo: 60000 }
    ],
    fecha_registro: ISODate("2026-04-01")
  },
  {
    _id: "MOTO008",
    marca: "Honda",
    modelo: "XR190L",
    cilindraje: 184,
    anio: 2024,
    ciudad: "Medellin",
    estado: "En mantenimiento",
    propietario: { nombre: "Felipe Cardona", telefono: "3008889900", correo: "felipe@email.com" },
    mantenimientos: [
      { tipo: "Cambio de aceite", fecha: ISODate("2026-08-15"), costo: 80000 },
      { tipo: "Revision general", fecha: ISODate("2026-10-05"), costo: 160000 }
    ],
    garantia: { vigente: true, meses: 12 },
    fecha_registro: ISODate("2026-04-12")
  },
  {
    _id: "MOTO009",
    marca: "BMW",
    modelo: "G310R",
    cilindraje: 313,
    anio: 2025,
    ciudad: "Envigado",
    estado: "Activa",
    propietario: { nombre: "Andres Mejia", telefono: "3009990011", correo: "andresm@email.com" },
    mantenimientos: [
      { tipo: "Cambio de filtros", fecha: ISODate("2026-08-18"), costo: 90000 },
      { tipo: "Revision de frenos", fecha: ISODate("2026-10-08"), costo: 145000 }
    ],
    garantia: { vigente: true, meses: 24 },
    fecha_registro: ISODate("2026-05-01")
  },
  {
    _id: "MOTO010",
    marca: "TVS",
    modelo: "Apache RTR 200",
    cilindraje: 197,
    anio: 2023,
    ciudad: "Sabaneta",
    estado: "Activa",
    propietario: { nombre: "David Castano", telefono: "3010001122", correo: "david@email.com" },
    mantenimientos: [
      { tipo: "Cambio de aceite", fecha: ISODate("2026-08-22"), costo: 70000 },
      { tipo: "Revision general", fecha: ISODate("2026-10-10"), costo: 125000 }
    ],
    fecha_registro: ISODate("2026-05-15")
  },
  {
    _id: "MOTO011",
    marca: "Hero",
    modelo: "Xpulse 200",
    cilindraje: 199,
    anio: 2024,
    ciudad: "Medellin",
    estado: "Activa",
    propietario: { nombre: "Juan David Lopez", telefono: "3011112233", correo: "juandavid@email.com" },
    mantenimientos: [
      { tipo: "Cambio de filtros", fecha: ISODate("2026-09-01"), costo: 65000 },
      { tipo: "Cambio de aceite", fecha: ISODate("2026-10-12"), costo: 85000 }
    ],
    garantia: { vigente: true, meses: 18 },
    fecha_registro: ISODate("2026-06-01")
  },
  {
    _id: "MOTO012",
    marca: "Kawasaki",
    modelo: "Versys 650",
    cilindraje: 649,
    anio: 2025,
    ciudad: "Envigado",
    estado: "Activa",
    propietario: { nombre: "Sebastian Arango", telefono: "3012223344", correo: "sebastian@email.com" },
    mantenimientos: [
      { tipo: "Revision general", fecha: ISODate("2026-09-10"), costo: 220000 },
      { tipo: "Revision de frenos", fecha: ISODate("2026-10-15"), costo: 135000 }
    ],
    garantia: { vigente: true, meses: 36 },
    fecha_registro: ISODate("2026-07-15")
  }
]);

// Verificar que se hayan insertado los 12 documentos
print("Total de motocicletas iniciales: " + db.motocicletas.countDocuments());
