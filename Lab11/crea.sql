/*
Materiales(Clave,Descripción,Costo)
Proveedores(RFC,RazonSocial)
Proyectos(Numero,Denominacion)
Entregan(Clave,RFC,Numero,Fecha,Cantidad)
*/
CREATE TABLE Materiales(
	Clave numeric(5),
	Descripcion varchar(50),
	Costo numeric(8,2)
)

CREATE TABLE Proveedores(
	RFC char(13),
	RazonSocial varchar(50)
)
CREATE TABLE Proyectos(
	Numero numeric(5),
	Denominacion varchar(50)
)
CREATE TABLE Entregan(
	Clave numeric(5),
	RFC char(13),
	Numero numeric(5),
	Fecha datetime,
	Cantidad numeric(8,2)
)

DROP TABLE Materiales
DROP TABLE Provedores
DROP TABLE Proyectos
DROP TABLE Entregan