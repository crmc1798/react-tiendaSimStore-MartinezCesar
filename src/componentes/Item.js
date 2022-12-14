import {Link} from 'react-router-dom';

const ulStyle = { width: '25rem' }


const Item = ({ id, title, img, price, stock }) => {
    let url = id - 1;
    return (
        <div className="card container m2" style={ulStyle}>
            <Link to={'/detail/item/' + url}>
                <img src={img} className="card-img-top  " alt="..." />
                </Link>

            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-subtitle">${price}</p>
                <p className="card-subtitle">{stock} Disponibles</p>
                <div className="d-flex justify-content-center align-items-center">
                    <Link to={'/detail/item/' + url}>
                        <button type="button" className="btn btn-outline-dark">ver detalles</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}
export default Item