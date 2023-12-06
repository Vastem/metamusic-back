import AdminDAO from '../data-access/adminDAO.js'

// cargar canciones en la base de datos
export async function createAdmin() {
    const adminDAO = new AdminDAO()
    console.log("Creando users...")
    try {

        adminDAO.create({
            username: "admin",
            email: "admin@admin.com",
            password: "admin"
        })


    } catch (error) {
        console.log(error)
    }
}