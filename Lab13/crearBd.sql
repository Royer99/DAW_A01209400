/*
Materiales (Clave, Descripción, Costo)
Proveedores (RFC, RazonSocial)
Proyectos (Numero, Denominacion)
Entregan (Clave, RFC, Numero, Fecha, Cantidad)
 */

/*
drop table Entregan
drop table Materiales
drop table Proyectos
drop table Proveedores
*/

if exists(select * from INFORMATION_SCHEMA.TABLES where TABLE_NAME='Materiales')
drop table Materiales
create table Materiales(
    Clave numeric(5) not null,
    Descripcion varchar(50),
    Costo numeric (8,2)
)

if exists(select * from INFORMATION_SCHEMA.TABLES where TABLE_NAME='Proveedores')
drop table Proveedores
create table Proveedores(
    RFC char(13) not null,
    RazonSocial varchar(50)
)

if exists(select * from INFORMATION_SCHEMA.TABLES where TABLE_NAME='Proyectos')
drop table Proyectos
create table Proyectos(
    Numero numeric(5) not null,
    Denominacion varchar(50)
)

if exists(select * from INFORMATION_SCHEMA.TABLES where TABLE_NAME='Entregan')
drop table Entregan
create table Entregan(
    Clave numeric(5) not null,
    RFC char(13) not null,
    Numero numeric(5) not null,
    Fecha datetime not null,
    Cantidad numeric (8,2)
)

bulk insert a1209400.a1209400.[Materiales]
from 'e:\wwwroot\rcortese\materiales.csv'
with(
    codepage='ACP',
    fieldterminator=',',
    rowterminator='\n'
)

bulk insert a1209400.a1209400.[Proveedores]
from 'e:\wwwroot\rcortese\proveedores.csv'
with(
    codepage='ACP',
    fieldterminator=',',
    rowterminator='\n'
)

bulk insert a1209400.a1209400.[Proyectos]
from 'e:\wwwroot\rcortese\proyectos.csv'
with(
    codepage='ACP',
    fieldterminator=',',
    rowterminator='\n'
)
set dateformat dmy
bulk insert a1209400.a1209400.[Entregan]
from 'e:\wwwroot\rcortese\entregan.csv'
with(
    codepage='ACP',
    fieldterminator=',',
    rowterminator='\n'
)
/*
INSERT INTO Materiales values(1000, 'xxx', 1000)
select * from Materiales where Materiales.Clave=1000
Delete from Materiales where Clave = 1000 and Costo = 1000
*/

ALTER TABLE Materiales add constraint llaveMateriales PRIMARY KEY (Clave)
--INSERT INTO Materiales values(1000, 'xxx', 1000)
--sp_helpconstraint materiales
ALTER TABLE Proveedores add constraint llaveProvedores PRIMARY KEY (RFC)
ALTER TABLE Proyectos add constraint  llaveProyectos PRIMARY KEY (Numero)
ALTER TABLE Entregan add constraint  llaveEntregan PRIMARY KEY (Clave,RFC,Numero,Fecha)
--sp_helpconstraint Entregan
select * from Materiales
select * from Proveedores
select * from Proyectos
INSERT INTO Entregan values (0,'xxx',0,'1-jan-02',0)
Delete from Entregan where Clave = 0
ALTER TABLE Entregan add constraint fkEntreganclave foreign key (Clave) references  Materiales(Clave)
--INSERT INTO Entregan values (0,'xxx',0,'1-jan-02',0)
ALTER TABLE Entregan add constraint fkEntreganrfc foreign key (RFC) references  Proveedores(RFC)
ALTER TABLE Entregan add constraint fkEntregannumero foreign key (Numero) references  Proyectos(Numero)
--sp_helpconstraint Entregan
INSERT INTO Entregan values (1000, 'AAAA800101', 5000, GETDATE(), 0);
--select * from  Entregan where Entregan.Clave=1000
Delete from Entregan where Clave = 1000 and Cantidad = 0
--select * from  Entregan where Entregan.Clave=1000
ALTER TABLE Entregan add constraint cantidad check (Cantidad>0)
INSERT INTO Entregan values (1000, 'AAAA800101', 5000, GETDATE(), 0);
