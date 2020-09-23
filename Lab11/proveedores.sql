BULK INSERT a1209400.a1209400.[Proveedores]
FROM 'e:\wwwroot\rcortese\proveedores.csv'
	WITH
	(
		CODEPAGE = 'ACP',
        FIELDTERMINATOR = ',',
        ROWTERMINATOR = '\n'
	)

SELECT  * FROM Proveedores
