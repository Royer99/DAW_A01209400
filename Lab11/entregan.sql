SET DATEFORMAT DMY
BULK INSERT a1209400.a1209400.[Entregan]
FROM 'e:\wwwroot\rcortese\entregan.csv'
	WITH
	(
		CODEPAGE = 'ACP',
        FIELDTERMINATOR = ',',
        ROWTERMINATOR = '\n'
		
	)

SELECT  * FROM Entregan