import React from 'react'

function Clasificados(props) {
        
    const NewTable = props.Tequipos.slice(0,8)
    
    return (
        <div className="text-center">
            <div className="mt-5"><h1>TABLA DE POSICIONES LIGA BETPLAY</h1></div>
            <div className="mt-5"><h1>CLASIFICADOS</h1></div>
            <div className="container border mt-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Pos.</th>
                            <th scope="col">Equipo</th>
                            <th scope="col">Pts</th>
                            <th scope="col">PJ</th>
                            <th scope="col">G</th>
                            <th scope="col">P</th>
                            <th scope="col">E</th>
                            <th scope="col">GF</th>
                            <th scope="col">GC</th>
                            <th scope="col">DF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {NewTable.map((equipo, position) => (
                            <tr key={equipo.Equipo}>
                                <td>{position+1}</td>
                                <td><div className="image"><img className="float-left" src={'imgs/' + equipo.image} width="17"></img><div className="float-left ml-5">{equipo.Equipo}</div></div></td>
                                <td>{equipo.pts}</td>
                                <td>{equipo.PJ}</td>
                                <td>{equipo.G}</td>
                                <td>{equipo.P}</td>
                                <td>{equipo.E}</td>
                                <td>{equipo.GF}</td>
                                <td>{equipo.GC}</td>
                                <td>{equipo.DF}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default Clasificados 