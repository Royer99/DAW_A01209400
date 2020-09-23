BULK INSERT a1209400.a1209400.[Materiales]
FROM 'e:\wwwroot\rcortese\materiales.csv'
	WITH
	(
		CODEPAGE = 'ACP',
        FIELDTERMINATOR = ',',
        ROWTERMINATOR = '\n'
	)

SELECT  * FROM Materiales
