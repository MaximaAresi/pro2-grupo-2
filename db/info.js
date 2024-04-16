let db = {
    usuario: {
        email: 'juanperez@gmail.com',
        usuario: 'juan-perez',
        contraseña: '12345',
        fechaDeNacimiento: '21/09/2002',
        DNI: '12345678',
        fotoDePerfil: '/images/images.jpeg'
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
                    img_perfil: '/images/fotoUsuario1.png'
                },
                {
                    nombre_usuario: 'luis_n',
                    texto_comentario: 'Divino!',
                    img_perfil: '/images/fotoUsuario5.png'
                },
                {
                    nombre_usuario: 'vic_molinari',
                    texto_comentario: 'Muy contenta con la compra!',
                    img_perfil: '/images/fotoUsuario2.png'
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
                    texto_comentario: 'Estoy super contenta!!',
                    img_perfil: '/images/fotoUsuario1.png'
                },
                {
                    nombre_usuario: 'luis_n',
                    texto_comentario: 'Divino!',
                    img_perfil: '/images/fotoUsuario5.png'
                },
                {
                    nombre_usuario: 'vic_molinari',
                    texto_comentario: 'Muy contenta con la compra!',
                    img_perfil: '/images/fotoUsuario2.png'
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
                    texto_comentario: 'Lindo diseño pero la calidad no tanto :(',
                    img_perfil: '/images/fotoUsuario1.png'
                },
                {
                    nombre_usuario: 'vic_molinari',
                    texto_comentario: 'No me convencio del todo',
                    img_perfil: '/images/fotoUsuario2.png'
                }, 
                {
                    nombre_usuario: 'luis_n',
                    texto_comentario: 'Fea la tela',
                    img_perfil: '/images/fotoUsuario5.png'
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
                    nombre_usuario: 'vic_molinari',
                    texto_comentario: 'De las mejores compras de mi vida <3',
                    img_perfil: '/images/fotoUsuario2.png'
                }, 
                {
                    nombre_usuario: 's_villar',
                    texto_comentario: 'Muy lindo!',
                    img_perfil: '/images/fotoUsuario3.png'
                },
                {
                    nombre_usuario: 'bgomez',
                    texto_comentario: 'Lo recomiendo',
                    img_perfil: '/images/fotoUsuario4.png'
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
                    nombre_usuario: 'vic_molinari',
                    texto_comentario: 'No me gustó!',
                    img_perfil: '/images/fotoUsuario2.png'
                },
                {
                    nombre_usuario: 's_villar',
                    texto_comentario: 'No lo recomiendo',
                    img_perfil: '/images/fotoUsuario3.png'
                },
                {
                    nombre_usuario: 'maresi',
                    texto_comentario: 'No es lo que me esperaba :(',
                    img_perfil: '/images/fotoUsuario1.png'
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
                    nombre_usuario: 'vic_molinari',
                    texto_comentario: 'Espectacular!',
                    img_perfil: '/images/fotoUsuario2.png'
                },
                {
                    nombre_usuario: 'maresi',
                    texto_comentario: 'Muy bueno!',
                    img_perfil: '/images/fotoUsuario1.png'
                }, 
                {
                    nombre_usuario: 's_villar',
                    texto_comentario: 'Gran compra!',
                    img_perfil: '/images/fotoUsuario3.png'
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
                    nombre_usuario: 's_villar',
                    texto_comentario: 'Super lindo!',
                    img_perfil: '/images/fotoUsuario3.png'
                },
                {
                    nombre_usuario: 'maresi',
                    texto_comentario: 'Muy bueno!',
                    img_perfil: '/images/fotoUsuario1.png'
                }, 
                {
                    nombre_usuario: 'bgomez',
                    texto_comentario: 'Lo recomiendo',
                    img_perfil: '/images/fotoUsuario4.png'
                }
            ]
        },
        {
            nombreProducto: 'Zapatillas',
            descripcionProducto: 'Zapatillas color negro, con cordones',
            fotoProducto: '/images/fotoProducto8.png',
            comentarios: [
                {
                    nombre_usuario: 's_villar',
                    texto_comentario: 'No lo volvería a comprar!',
                    img_perfil: '/images/fotoUsuario3.png'
                },
                {
                    nombre_usuario: 'luis_n',
                    texto_comentario: 'No me gusto mucho!',
                    img_perfil: '/images/fotoUsuario5.png'
                }, 
                {
                    nombre_usuario: 'bgomez',
                    texto_comentario: 'No lo recomiendo',
                    img_perfil: '/images/fotoUsuario4.png'
                }
            ]
        },
        {
            nombreProducto: 'Campera',
            descripcionProducto: 'Campera color azul, con capucha',
            fotoProducto: '/images/fotoProducto9.png',
            comentarios: [
                {
                    nombre_usuario: 's_villar',
                    texto_comentario: 'Muy lindo producto!',
                    img_perfil: '/images/fotoUsuario3.png'
                },
                {
                    nombre_usuario: 'bgomez',
                    texto_comentario: 'Divino!',
                    img_perfil: '/images/fotoUsuario4.png'
                }, 
                {
                    nombre_usuario: 'luis_n',
                    texto_comentario: 'Super bueno!',
                    img_perfil: '/images/fotoUsuario5.png'
                }
            ]
        },
        {
            nombreProducto: 'Chaleco',
            descripcionProducto: 'Chaleco color beige',
            fotoProducto: '/images/fotoProducto10.png',
            comentarios: [
                {
                    nombre_usuario: 's_villar',
                    texto_comentario: 'Muy lindo! Lo vovería a comprar!!',
                    img_perfil: '/images/fotoUsuario3.png'
                }, 
                {
                    nombre_usuario: 'bgomez',
                    texto_comentario: 'Me encanto!',
                    img_perfil: '/images/fotoUsuario4.png'
                }, 
                {
                    nombre_usuario: 'luis_n',
                    texto_comentario: 'Super bueno!',
                    img_perfil: '/images/fotoUsuario5.png'
                }
            ]
        },
    ],
}

/* Exportar */
module.exports = db;