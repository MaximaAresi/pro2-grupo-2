CREATE SCHEMA piProg2; /* CREO LA BASE DE DATOS */

USE piProg2; /* SELECCIONA LA BASE DE DATOS QUE ACABAMOS DE CREAR */

/* CREO TABLA USUARIOS */
CREATE TABLE usuarios (
/* 	nombreColumna 		tipoDato 		Restricciones */
    id  				INT 			UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    usuario				VARCHAR(250)	NOT NULL,
    mail 				VARCHAR(250) 	NOT NULL UNIQUE,
    contrasenia         VARCHAR(250) 	NOT NULL,
    fecha               DATE 			NOT NULL,
    dni 				INT 			NOT NULL,
    fotoPerfil 			VARCHAR(250) 	NOT NULL,
    createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
    updatedAt			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt			TIMESTAMP		NULL
) ;

/* CREO TABLA PRODUCTOS */
CREATE TABLE productos (
/* 	nombreColumna 		tipoDato 		Restricciones */
    id 					INT 			UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    fotoProducto 		VARCHAR(250) 	NOT NULL,
    nombreProducto 		VARCHAR(250) 	NOT NULL,
	descripcionProducto TEXT		 	NOT NULL,
    createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
	updatedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt			TIMESTAMP		NULL,
    id_usuario 			INT 			UNSIGNED
    );

/* ALTERO TABLA PRODUCTOS -- + FK */
alter table productos
add FOREIGN KEY (id_usuario) REFERENCES usuarios(id);


/* CREO TABLA COMENTARIOS */
CREATE TABLE comentarios (
/* nombreColumna    tipoDato 			Restricciones*/
id					INT					UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuarios_id			INT					UNSIGNED, 
producto_id			INT 				UNSIGNED,
texto_comentario	TEXT				NOT NULL,
createdAt 			TIMESTAMP 			DEFAULT CURRENT_TIMESTAMP ,
updatedAt 			TIMESTAMP 			DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt			TIMESTAMP			NULL
); 

/* ALTERO TABLA COMENTARIOS -- + FK */
alter table comentarios
add FOREIGN KEY (usuarios_id) REFERENCES usuarios(id),
add FOREIGN KEY (producto_id) REFERENCES productos(id);




/* AGREGAR REGISTROS EN USUARIOS */
INSERT INTO usuarios (id, usuario, mail, contrasenia, fecha, dni, fotoPerfil, createdAt, updatedAt, deletedAt) 
VALUES(DEFAULT, "maresi" ,"maresilavalle@udesa.edu.ar", "Clave123", "2005-05-26", 46754423, "foto1.png", DEFAULT, DEFAULT, DEFAULT);
    
INSERT INTO usuarios  (id, usuario, mail, contrasenia, fecha, dni, fotoPerfil, createdAt, updatedAt, deletedAt) 
VALUES(DEFAULT, "vic_molinari","vmolinari@udesa.edu.ar", "Clave1234", "2005-01-11", 12345678, "foto2.png", DEFAULT, DEFAULT, DEFAULT);
    
INSERT INTO usuarios (id, usuario, mail, contrasenia, fecha, dni, fotoPerfil, createdAt, updatedAt, deletedAt) 
VALUES(DEFAULT, "s_villar","svillar@udesa.edu.ar", "Clave12345", "2005-01-30", 87654321, "foto3.png", DEFAULT, DEFAULT, DEFAULT);
    
INSERT INTO usuarios (id, usuario, mail, contrasenia, fecha, dni, fotoPerfil, createdAt, updatedAt, deletedAt) 
VALUES(DEFAULT, "bgomez","bgomez@udesa.edu.ar", "Clave123456", "2005-01-27", 18479834, "foto4.png", DEFAULT, DEFAULT, DEFAULT);
    
INSERT INTO usuarios (id, usuario, mail, contrasenia, fecha, dni, fotoPerfil, createdAt, updatedAt, deletedAt) 
VALUES(DEFAULT, "luis_n", "lnavas@udesa.edu.ar", "Clave1234567", "2005-02-27", 18678902, "foto5.png", DEFAULT, DEFAULT, DEFAULT);


/* AGREGAR REGISTROS EN PRODUCTOS */
INSERT INTO productos 	(id, 		fotoProducto, 		nombreProducto, 	descripcionProducto, 						createdAt, 	updatedAt, 	deletedAt, id_usuario) 
VALUES 					(DEFAULT, 	"fotoProducto.png", "Camisa", 			"Camisa color beige, con botones rosas", 	DEFAULT, 	DEFAULT, 	DEFAULt, 2);

INSERT INTO productos 	(id, 		fotoProducto, 		nombreProducto, 	descripcionProducto, 						createdAt, 	updatedAt, 	deletedAt, id_usuario) 
VALUES 					(DEFAULT, 	"fotoProducto2.png", "Jean", 			"jean color azul, con costuras blancas", 	DEFAULT, 	DEFAULT, 	DEFAULT, 2);

INSERT INTO productos 	(id, 		fotoProducto, 		nombreProducto, 	descripcionProducto, 						createdAt, 	updatedAt, 	deletedAt, id_usuario) 
VALUES 					(DEFAULT, 	"fotoProducto3.png", "Remera", 			"Remera color negra, con estampa", 			DEFAULT, 	DEFAULT, 	DEFAULT, 2);

INSERT INTO productos 	(id, 		fotoProducto, 		nombreProducto, 	descripcionProducto, 	createdAt, 	updatedAt, 	deletedAt, id_usuario) 
VALUES 					(DEFAULT, 	"fotoProducto4.png", "Medias", 			"Medias color blanco", 	DEFAULT, 	DEFAULT, 	DEFAULT, 2);

INSERT INTO productos 	(id, 		fotoProducto, 		nombreProducto, 	descripcionProducto, 						createdAt, 	updatedAt, 	deletedAt,	id_usuario) 
VALUES 					(DEFAULT, 	"fotoProducto5.png", "Soquetes", 		"Soquetes color blanco", 	DEFAULT, 	DEFAULT, 	DEFAULT, 3);

INSERT INTO productos 	(id, 		fotoProducto, 		nombreProducto, 	descripcionProducto, 						createdAt, 	updatedAt, 	deletedAt,	id_usuario) 
VALUES 					(DEFAULT, 	"fotoProducto6.png", "Buzo", 			"Buzo color violeta, con capucha", 			DEFAULT, 	DEFAULT, 	DEFAULT, 3);

INSERT INTO productos 	(id, 		fotoProducto, 		nombreProducto, 	descripcionProducto, 						createdAt, 	updatedAt, 	deletedAt,	id_usuario) 
VALUES 					(DEFAULT, 	"fotoProducto7.png", "Sweater", 		"Swater color verde", 						DEFAULT, 	DEFAULT, 	DEFAULT, 4);

INSERT INTO productos 	(id, 		fotoProducto, 		nombreProducto, 	descripcionProducto, 						createdAt, 	updatedAt, 	deletedAt,	id_usuario) 
VALUES 					(DEFAULT, 	"fotoProducto8.png", "Zapatillas", 		"Zapatillas color negro, con cordones", 	DEFAULT, 	DEFAULT, 	DEFAULT, 4);

INSERT INTO productos 	(id, 		fotoProducto, 		nombreProducto, 	descripcionProducto, 				createdAt, 	updatedAt, 	deletedAt, id_usuario) 
VALUES 					(DEFAULT, 	"fotoProducto9.png", "Campera", 		"Campera color azul, con capucha", 	DEFAULT, 	DEFAULT, 	DEFAULT, 5);

INSERT INTO productos 	(id, 		fotoProducto, 		nombreProducto, 	descripcionProducto, 	createdAt, 	updatedAt, 	deletedAt, id_usuario) 
VALUES 					(DEFAULT, 	"fotoProducto10.png", "Chaleco", 		"Chaleco color beige", 	DEFAULT, 	DEFAULT, 	DEFAULT, 5);


/* AGREGAR REGISTROS EN COMENTARIOS */
INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 1, 1, "Muy lindo producto!");  

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 1, 2, "Estoy super contenta!!");  

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario ) 
VALUES 				(DEFAULT, 1, 3, "Lindo diseño pero la calidad no tanto :(");  

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 2, 4, "De las mejores compras de mi vida <3");  

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 2, 5, "No me gustó!");  

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 2, 6, "Espectacular!");  

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 3, 7, "Super lindo!!");

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 3, 8, "No lo volvería a comprar!"); 
 
INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 3, 9, "Muy lindo producto!");  
 
INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 3, 10, "Muy lindo! Lo vovería a comprar!!");

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 4, 9, "Divino! ");

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 4, 10, "Me encanto!");

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 5, 9, "Super bueno!");

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 5, 8, "No me gusto mucho");

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 5, 2, "Divino!");

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 5, 1, "Divino!");

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 2, 1, "Muy contenta con la compra!");

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 2, 2, "Muy contenta con la compra!");

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 2, 3, "No me convencio del todo");

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 5, 3, "Fea la tela");

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 3, 4, "Muy lindo!");

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 4, 4, "Lo recomiendo");

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 3, 5, "No lo recomiendo");

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 1, 5, "No es lo que me esperaba :(");

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 1, 6, "Muy bueno!");

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 3, 6,  "Gran compra!");

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 1, 7, "Muy bueno!");

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 4, 7,  "Lo recomiendo");


INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 4, 8, "No lo recomiendo");

INSERT INTO comentarios (id, usuarios_id, producto_id, texto_comentario) 
VALUES 				(DEFAULT, 5, 10, "Super bueno!");
