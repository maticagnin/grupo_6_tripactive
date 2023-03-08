import React, { useEffect, useState } from "react";

function TotalProducts(props){

    const {TotalProducts, setTotalProducts} = useState('');
    useEffect(() => {
        fetch('localhost:3000/productos/lista')
          .then((result) => result.json())
            .then((dataProducts) => {
                setTotalProducts(dataProducts)
            })
           
    })
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                    Total de Productos
                </h5>
                </div>
                <div className="card-body">
                <div className="row">
                    <div className="col-lg-12 mb-4">
                    <div className="card bg-primary text-white shadow">
                        <div className="card-body text-center">
                        <p> { TotalProducts.cantidadProducts } </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    )
}
export default TotalProducts;