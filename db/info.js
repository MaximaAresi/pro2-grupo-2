let db = {
    usuario: {
        email: 'juanperez@gmail.com',
        usuario: 'juan-perez',
        contraseña: '12345',
        fechaDeNacimiento: '21/09/2002',
        DNI: '12345678',
        fotoDePerfil: '/images/users/profile-pic.jpeg'
    },
    productos: [
        {
            nombreProducto: 'Camisa',
            descripcionProducto: 'Camisa color beige, con botones rosas',
            fotoProducto: '/images/fotoProducto.png',
            precioProducto: "$55.000-.",
            comentarios_Producto: [
                {
                    nombre_usuario: 'maresi',
                    texto_comentario: 'Muy lindo producto!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                },
                {
                    nombre_usuario: 'luis_n',
                    texto_comentario: 'Divino!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                },
                {
                    nombre_usuario: 'vic_molinari',
                    texto_comentario: 'Muy contenta con la compra!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                }
            ]
        },
        {
            nombreProducto: 'Jean',
            descripcionProducto: 'Jean color azul, con costuras blancas',
            fotoProducto: '/images/fotoProducto2.png',
            precioProducto: "$70.000-.",
            comentarios_Producto: [
                {
                    nombre_usuario: 'maresi',
                    texto_comentario: 'Muy lindo producto!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                },
                {
                    nombre_usuario: 'luis_n',
                    texto_comentario: 'Divino!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                },
                {
                    nombre_usuario: 'vic_molinari',
                    texto_comentario: 'Muy contenta con la compra!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                }
            ]
        },
        {
            nombreProducto: 'Remera',
            descripcionProducto: 'Remera color negra, con estampa',
            fotoProducto: '/images/fotoProducto3.png',
            precioProducto: "$34.000-.",
            comentarios_Producto: [
                {
                    nombre_usuario: 'maresi',
                    texto_comentario: 'Muy lindo producto!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                },
                {
                    nombre_usuario: 'luis_n',
                    texto_comentario: 'Divino!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                },
                {
                    nombre_usuario: 'vic_molinari',
                    texto_comentario: 'Muy contenta con la compra!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                }
            ]
        },
        {
            nombreProducto: 'Medias',
            descripcionProducto: 'Medias color blanco',
            fotoProducto: '/images/fotoProducto4.png',
            precioProducto: "$12.000-.",
            comentarios_Producto: [
                {
                    nombre_usuario: 'maresi',
                    texto_comentario: 'Muy lindo producto!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                },
                {
                    nombre_usuario: 'luis_n',
                    texto_comentario: 'Divino!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                },
                {
                    nombre_usuario: 'vic_molinari',
                    texto_comentario: 'Muy contenta con la compra!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                }
            ]
        },
        {
            nombreProducto: 'Soquetes',
            descripcionProducto: 'Soquetes color blanco',
            fotoProducto: '/images/fotoProducto5.png',
            precioProducto: "$10.000-.",
            comentarios_Producto: [
                {
                    nombre_usuario: 'maresi',
                    texto_comentario: 'Muy lindo producto!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                },
                {
                    nombre_usuario: 'luis_n',
                    texto_comentario: 'Divino!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                },
                {
                    nombre_usuario: 'vic_molinari',
                    texto_comentario: 'Muy contenta con la compra!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                }
            ]
        },
        {
            nombreProducto: 'Buzo',
            descripcionProducto: 'Buzo color violeta, con capucha',
            fotoProducto: '/images/fotoProducto6.png',
            precioProducto: "$48.000-.",
            comentarios_Producto: [
                {
                    nombre_usuario: 'maresi',
                    texto_comentario: 'Muy lindo producto!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                },
                {
                    nombre_usuario: 'luis_n',
                    texto_comentario: 'Divino!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                },
                {
                    nombre_usuario: 'vic_molinari',
                    texto_comentario: 'Muy contenta con la compra!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                }
            ]
        },
        {
            nombreProducto: 'Sweater',
            descripcionProducto: 'Swater color verde',
            fotoProducto: '/images/fotoProducto7.png',
            precioProducto: "$56.000-.",
            comentarios_Producto: [
                {
                    nombre_usuario: 'maresi',
                    texto_comentario: 'Muy lindo producto!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                },
                {
                    nombre_usuario: 'luis_n',
                    texto_comentario: 'Divino!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                },
                {
                    nombre_usuario: 'vic_molinari',
                    texto_comentario: 'Muy contenta con la compra!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                }
            ]
        },
        {
            nombreProducto: 'Zapatillas',
            descripcionProducto: 'Zapatillas color negro, con cordones',
            fotoProducto: '/images/fotoProducto8.png',
            comentarios_Producto: [
                {
                    nombre_usuario: 'maresi',
                    texto_comentario: 'Muy lindo producto!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                },
                {
                    nombre_usuario: 'luis_n',
                    texto_comentario: 'Divino!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                },
                {
                    nombre_usuario: 'vic_molinari',
                    texto_comentario: 'Muy contenta con la compra!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                }
            ]
        },
        {
            nombreProducto: 'Campera',
            descripcionProducto: 'Campera color azul, con capucha',
            fotoProducto: '/images/fotoProducto9.png',
            comentarios_Producto: [
                {
                    nombre_usuario: 'maresi',
                    texto_comentario: 'Muy lindo producto!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                },
                {
                    nombre_usuario: 'luis_n',
                    texto_comentario: 'Divino!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                },
                {
                    nombre_usuario: 'vic_molinari',
                    texto_comentario: 'Muy contenta con la compra!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                }
            ]
        },
        {
            nombreProducto: 'Chaleco',
            descripcionProducto: 'Chaleco color beige',
            fotoProducto: '/images/fotoProducto10.png',
            comentarios_Producto: [
                {
                    nombre_usuario: 'maresi',
                    texto_comentario: 'Muy lindo producto!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                },
                {
                    nombre_usuario: 'luis_n',
                    texto_comentario: 'Divino!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                },
                {
                    nombre_usuario: 'vic_molinari',
                    texto_comentario: 'Muy contenta con la compra!',
                    img_perfil: '/images/users/profile-pic.jpeg'
                }
            ]
        },
    ],
}

/* Exportar */
module.exports = db;