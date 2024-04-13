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
            nombreProducto: 'Jean',
            id: 4,
            descripcionProducto: 'Jean color azul, con costuras blancas',
            fotoProducto: '/images/fotoProducto.png',
            comentarios: [
                {
                    usuarios_id: '2',
                    producto_id: '4',
                    texto_comentario: 'Muy lindo producto!',
                    img_perfil: '/images/fotoUsuario1.png'
                },
                {
                    usuarios_id: '2',
                    producto_id: '4',
                    texto_comentario: 'Estoy super contenta!!',
                    img_perfil: '/images/fotoUsuario2.png'
                }

            ]
        }, 
        {
            nombreProducto: 'Remera',
            id: 5,
            descripcionProducto: 'Remera color negra, con estampa',
            fotoProducto: '/images/fotoProducto.png',
            comentarios: [
                {
                    usuarios_id: '2',
                    producto_id: '4',
                    texto_comentario: 'Muy lindo producto!',
                    img_perfil: '/images/fotoUsuario1.png'
                },
                {
                    usuarios_id: '2',
                    producto_id: '4',
                    texto_comentario: 'Estoy super contenta!!',
                    img_perfil: '/images/fotoUsuario2.png'
                }

            ]
        }, 
        {
            nombreProducto: 'Medias',
            id: 6,
            descripcionProducto: 'Medias color blanco',
            fotoProducto: '/images/fotoProducto.png',
            comentarios: [
                {
                    usuarios_id: '2',
                    producto_id: '4',
                    texto_comentario: 'Muy lindo producto!',
                    img_perfil: '/images/fotoUsuario1.png'
                },
                {
                    usuarios_id: '2',
                    producto_id: '4',
                    texto_comentario: 'Estoy super contenta!!',
                    img_perfil: '/images/fotoUsuario2.png'
                }

            ]
        },
        {
            nombreProducto: 'Soquetes',
            id: 7,
            descripcionProducto: 'Soquetes color blanco',
            fotoProducto: '/images/fotoProducto.png',
            comentarios: [
                {
                    usuarios_id: '2',
                    producto_id: '4',
                    texto_comentario: 'Muy lindo producto!',
                    img_perfil: '/images/fotoUsuario1.png'
                },
                {
                    usuarios_id: '2',
                    producto_id: '4',
                    texto_comentario: 'Estoy super contenta!!',
                    img_perfil: '/images/fotoUsuario2.png'
                }

            ]
        },
        {
            nombreProducto: 'Buzo',
            id: 8,
            descripcionProducto: 'Buzo color violeta, con capucha',
            fotoProducto: '/images/fotoProducto.png',
            comentarios: [
                {
                    usuarios_id: '2',
                    producto_id: '4',
                    texto_comentario: 'Muy lindo producto!',
                    img_perfil: '/images/fotoUsuario1.png'
                },
                {
                    usuarios_id: '2',
                    producto_id: '4',
                    texto_comentario: 'Estoy super contenta!!',
                    img_perfil: '/images/fotoUsuario2.png'
                }

            ]
        },
        {
            nombreProducto: 'Sweater',
            id: 9,
            descripcionProducto: 'Sweater color verde',
            fotoProducto: '/images/fotoProducto.png',
            comentarios: [
                {
                    usuarios_id: '2',
                    producto_id: '4',
                    texto_comentario: 'Muy lindo producto!',
                    img_perfil: '/images/fotoUsuario1.png'
                },
                {
                    usuarios_id: '2',
                    producto_id: '4',
                    texto_comentario: 'Estoy super contenta!!',
                    img_perfil: '/images/fotoUsuario2.png'
                }

            ]
        },
        {
            nombreProducto: 'Zapatillas',
            id: 10,
            descripcionProducto: 'Zapatillas color negro, con cordones',
            fotoProducto: '/images/fotoProducto.png',
            comentarios: [
                {
                    usuarios_id: '2',
                    producto_id: '4',
                    texto_comentario: 'Muy lindo producto!',
                    img_perfil: '/images/fotoUsuario1.png'
                },
                {
                    usuarios_id: '2',
                    producto_id: '4',
                    texto_comentario: 'Estoy super contenta!!',
                    img_perfil: '/images/fotoUsuario2.png'
                }

            ]
        },
        {
            nombreProducto: 'Campera',
            id: 11,
            descripcionProducto: 'Campera color azul, con capucha',
            fotoProducto: '/images/fotoProducto.png',
            comentarios: [
                {
                    usuarios_id: '2',
                    producto_id: '4',
                    texto_comentario: 'Muy lindo producto!',
                    img_perfil: '/images/fotoUsuario1.png'
                },
                {
                    usuarios_id: '2',
                    producto_id: '4',
                    texto_comentario: 'Estoy super contenta!!',
                    img_perfil: '/images/fotoUsuario2.png'
                }

            ]
        },
        {
            nombreProducto: 'Chaleco',
            id: 12,
            descripcionProducto: 'Chaleco color beige',
            fotoProducto: '/images/fotoProducto.png',
            comentarios: [
                {
                    usuarios_id: '2',
                    producto_id: '4',
                    texto_comentario: 'Muy lindo producto!',
                    img_perfil: '/images/fotoUsuario1.png'
                },
                {
                    usuarios_id: '2',
                    producto_id: '4',
                    texto_comentario: 'Estoy super contenta!!',
                    img_perfil: '/images/fotoUsuario2.png'
                }

            ]
        },
    ],
}

/*Exportar*/
module.exports = db;