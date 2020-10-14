/*
Materiales(Clave, Descripción, Costo, PorcentajeImpuesto)
Proveedores(RFC, RazonSocial)
Proyectos(Numero, Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad)
 */
--La suma de las cantidades e importe total de todas las entregas realizadas durante el 97
SET DATEFORMAT DMY
SELECT SUM(Cantidad) AS CantidadTotal,SUM(Costo*Cantidad)AS ImporteTotal
FROM Entregan,Materiales
WHERE Entregan.Clave=Materiales.Clave AND Entregan.Fecha BETWEEN '01/01/1997' AND '31/12/1997'

--Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas.
SELECT RazonSocial, SUM(Cantidad) AS CantidadTotal,SUM(Costo*Cantidad)AS ImporteTotal
FROM Entregan,Materiales,Proveedores
WHERE Entregan.RFC=Proveedores.RFC and Entregan.Clave=Materiales.Clave
GROUP BY RazonSocial

--Por cada material obtener la clave y descripción del material, la cantidad total entregada, la mínima cantidad entregada, la máxima cantidad entregada, el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada sea mayor a 400.
SELECT  Materiales.Clave,Materiales.Descripcion,SUM(Cantidad) AS CantidadTotal,MIN(Cantidad) AS MinCantidad,MAX(Cantidad) AS MaxCantidad,SUM(Costo*Cantidad)AS ImporteTotal
FROM Entregan,Materiales
WHERE Entregan.Clave=Materiales.Clave
GROUP BY Materiales.Clave,Materiales.Descripcion
HAVING AVG(Cantidad)>400

--Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, detallando la clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.
SELECT RazonSocial,AVG (Cantidad) AS Cantidad,Materiales.Clave,Materiales.Descripcion
FROM Entregan,Proveedores,Materiales
WHERE Entregan.RFC=Proveedores.RFC AND Entregan.Clave=Materiales.Clave
GROUP BY Materiales.Clave,Materiales.Descripcion,RazonSocial
HAVING AVG(Cantidad)>=500

--Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: aquellos para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio entregada sea mayor a 450.

SELECT RazonSocial,AVG (Cantidad) AS Cantidad,Materiales.Clave,Materiales.Descripcion
FROM Entregan,Proveedores,Materiales
WHERE Entregan.RFC=Proveedores.RFC AND Entregan.Clave=Materiales.Clave
GROUP BY Materiales.Clave,Materiales.Descripcion,RazonSocial
HAVING AVG(Cantidad)>0 AND AVG(Cantidad)<370 OR AVG(Cantidad)>450

--INSERTAR 5 MATERIALES
INSERT INTO Materiales values (1,'Arena',500);
INSERT INTO Materiales values (2,'Block',100);
INSERT INTO Materiales values (3,'Grava',2000);
INSERT INTO Materiales values (4,'Tubo PVC 1/2',20);
INSERT INTO Materiales values (5,'MDF',750);

--Clave y descripción de los materiales que nunca han sido entregados.
SELECT Clave,Descripcion
FROM  Materiales
WHERE Materiales.Clave NOT IN (SELECT Clave
                                FROM  Entregan
                                )
--Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'.
SELECT RazonSocial
FROM Proveedores
WHERE RFC IN (SELECT Entregan.RFC
                FROM  Entregan,Proyectos
                WHERE Entregan.Numero=Proyectos.Numero and Proyectos.Denominacion='Vamos México'
                UNION
                SELECT RFC
                FROM  Entregan,Proyectos
                WHERE Entregan.Numero=Proyectos.Numero AND Denominacion='Queretaro Limpio'
)
--Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'.
SELECT Descripcion
FROM Materiales
WHERE Materiales.Clave NOT IN (SELECT Entregan.Clave
                                FROM  Entregan, Proyectos
                                WHERE Entregan.Numero=Proyectos.Numero AND Denominacion='CIT Yucatan'
                              )
--Razón social y promedio de cantidad entregada de los proveedores cuyo promedio de cantidad entregada es mayor al promedio de la cantidad entregada por el proveedor con el RFC 'VAGO780901'.
--No existe tal rfc VAGO780901
SELECT RazonSocial, AVG (Cantidad) AS Promedio
FROM Proveedores,Entregan
WHERE Proveedores.RFC=Entregan.RFC
GROUP BY RazonSocial
HAVING AVG(Cantidad)>(SELECT AVG(Cantidad)
                     FROM Entregan,Proveedores
                     WHERE Entregan.RFC=Proveedores.RFC AND Proveedores.RFC='VAGO780901'
                    )
--RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' y cuyas cantidades totales entregadas en el 2000 fueron mayores a las cantidades totales entregadas en el 2001.
SELECT RFC,RazonSocial
FROM Proveedores
WHERE Proveedores.RFC IN (SELECT Entregan.RFC, AVG(Cantidad)
                            FROM Entregan,Proveedores,Proyectos
                            WHERE Entregan.RFC=Proveedores.RFC AND Entregan.Numero=Proyectos.Numero AND Proyectos.Denominacion='Infonavit Durango' AND Entregan.Fecha BETWEEN '01/01/2000' AND '31/12/2000'
                            GROUP BY Entregan.RFC
                            HAVING AVG(Cantidad)>(SELECT Entregan.RFC, AVG(Cantidad)
                                                    FROM Entregan,Proveedores,Proyectos
                                                    WHERE Entregan.RFC=Proveedores.RFC AND Entregan.Numero=Proyectos.Numero AND Proyectos.Denominacion='Infonavit Durango' AND Entregan.Fecha BETWEEN '01/01/2001' AND '31/12/2001'
                                                    GROUP BY Entregan.RFC
                          )
                        )
