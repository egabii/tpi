

const Citas = () => {
    return (
        <div>
            <div >
                <h1>Solicitudes</h1>
            </div>
            <div className ="body">
                <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Horario</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td><button class="btn-primary">Ver solicitud</button></td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>
                            <button class="btn-primary">Ver solicitud</button>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        <td><button class="btn-primary">Ver solicitud</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Citas
