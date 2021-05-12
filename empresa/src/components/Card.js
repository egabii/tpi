export default function Card ({titulo, descripcion, imagen}) {
  return (
    <div class="card" style={{ width: '18rem' }}>
      <img src={imagen} class="card-img-top" alt="" />
        <div class="card-body">
          <h5 class="card-title">{ titulo }</h5>
          <p class="card-text">{ descripcion }</p>
          <button class="btn btn-primary">Go somewhere</button>
        </div>
    </div>
  )
}