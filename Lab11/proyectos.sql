BULK INSERT a1209400.a1209400.[Proyectos]
FROM 'e:\wwwroot\rcortese\proyectos.csv'
	WITH
	(
		CODEPAGE = 'ACP',
        FIELDTERMINATOR = ',',
        ROWTERMINATOR = '\n'
	)

SELECT  * FROM Proyectos
