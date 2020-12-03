import React, { useState } from 'react'
import 'bootswatch/dist/lux/bootstrap.min.css';

function Tabla(props) {

    const [Partidos, setPartidos] = useState([
        { Equipo1: props.Tequipos[0], Goals1: 0, Equipo2: props.Tequipos[3], Goals2: 0 },
        { Equipo1: props.Tequipos[1], Goals1: 0, Equipo2: props.Tequipos[5], Goals2: 0 },
        { Equipo1: props.Tequipos[2], Goals1: 0, Equipo2: props.Tequipos[4], Goals2: 0 },
        { Equipo1: props.Tequipos[6], Goals1: 0, Equipo2: props.Tequipos[9], Goals2: 0 },
        { Equipo1: props.Tequipos[7], Goals1: 0, Equipo2: props.Tequipos[8], Goals2: 0 }
    ])

    const [PartidosF19] = useState([
        { Equipo1: props.Tequipos[9], Goals1: 0, Equipo2: props.Tequipos[0], Goals2: 0 },
        { Equipo1: props.Tequipos[8], Goals1: 0, Equipo2: props.Tequipos[1], Goals2: 0 },
        { Equipo1: props.Tequipos[7], Goals1: 0, Equipo2: props.Tequipos[2], Goals2: 0 },
        { Equipo1: props.Tequipos[3], Goals1: 0, Equipo2: props.Tequipos[4], Goals2: 0 },
        { Equipo1: props.Tequipos[5], Goals1: 0, Equipo2: props.Tequipos[6], Goals2: 0 }
    ])

    const [PartidosF20] = useState([
        { Equipo1: props.Tequipos[5], Goals1: 0, Equipo2: props.Tequipos[7], Goals2: 0 },
        { Equipo1: props.Tequipos[6], Goals1: 0, Equipo2: props.Tequipos[4], Goals2: 0 },
        { Equipo1: props.Tequipos[3], Goals1: 0, Equipo2: props.Tequipos[8], Goals2: 0 },
        { Equipo1: props.Tequipos[9], Goals1: 0, Equipo2: props.Tequipos[2], Goals2: 0 },
        { Equipo1: props.Tequipos[0], Goals1: 0, Equipo2: props.Tequipos[6], Goals2: 0 }
    ])

    const validacion = (Fecha) => {
        switch (Fecha) {
            case 'Fecha18':
                if (props.setD.Fecha18 === false) {
                    simPJ(Partidos)
                    props.setD.setFecha18(true)
                    props.setD.setFecha('Fecha-18')
                }else{
                    alert('Ya ha sido registrada esta fecha')
                }
                break;
            case 'Fecha19':
                if (props.setD.Fecha19 === false && props.setD.Fecha18 === true) {
                    simPJ(PartidosF19)
                    props.setD.setFecha19(true)
                    props.setD.setFecha('Fecha-19')
                }else{
                    alert('Ya ha sido registrada esta fecha o no se ha registrado aun la fecha 18')
                }
                break;
            case 'Fecha20':
                if (props.setD.Fecha20 === false && props.setD.Fecha19 === true && props.setD.Fecha18 === true) {
                    simPJ(PartidosF20)
                    props.setD.setFecha20(true)
                    props.setD.setFecha('Fecha-20')
                }else{
                    alert('Ya ha sido registrada esta fecha o no se ha registrado aun la fecha 19')
                }
                break;
            default:
        }
    };

    const simPJ = (partidos) => {

        props.set(props.Tequipos.map(ele => {
            ele.PJ = ele.PJ + 1
            return ele
        }))

        setPartidos(partidos.map(ele2 => {
            ele2.Goals1 = 0
            ele2.Goals2 = 0
            return ele2
        }))

        setPartidos(partidos.map(ele2 => {
            ele2.Goals1 = Math.floor(Math.random() * (10 - 0)) + 0;
            ele2.Goals2 = Math.floor(Math.random() * (10 - 0)) + 0;
            return ele2
        }))

        setPartidos(partidos.map(ele2 => {
            if (ele2.Goals1 > ele2.Goals2) {
                ele2.Equipo1.G = ele2.Equipo1.G+1 
                ele2.Equipo2.P = ele2.Equipo2.P+1 
                ele2.Equipo1.pts = ele2.Equipo1.pts + 3
                ele2.Equipo1.GF = ele2.Equipo1.GF + ele2.Goals1
                ele2.Equipo1.GC = ele2.Equipo1.GC + ele2.Goals2
                ele2.Equipo1.DF = ele2.Equipo1.GF - ele2.Equipo1.GC
                ele2.Equipo2.GF = ele2.Equipo2.GF + ele2.Goals2
                ele2.Equipo2.GC = ele2.Equipo2.GC + ele2.Goals1
                ele2.Equipo2.DF = ele2.Equipo2.GF - ele2.Equipo2.GC
            } else if (ele2.Goals1 < ele2.Goals2) {
                ele2.Equipo2.G = ele2.Equipo2.G+1 
                ele2.Equipo1.P = ele2.Equipo1.P+1 
                ele2.Equipo2.pts = ele2.Equipo2.pts + 3
                ele2.Equipo2.GF = ele2.Equipo2.GF + ele2.Goals2
                ele2.Equipo2.GC = ele2.Equipo2.GC + ele2.Goals1
                ele2.Equipo2.DF = ele2.Equipo2.GF - ele2.Equipo2.GC
                ele2.Equipo1.GF = ele2.Equipo1.GF + ele2.Goals1
                ele2.Equipo1.GC = ele2.Equipo1.GC + ele2.Goals2
                ele2.Equipo1.DF = ele2.Equipo1.GF - ele2.Equipo1.GC
            } else {
                ele2.Equipo1.E = ele2.Equipo1.E+1 
                ele2.Equipo2.E = ele2.Equipo2.E+1 
                ele2.Equipo2.pts = ele2.Equipo2.pts + 1
                ele2.Equipo1.pts = ele2.Equipo1.pts + 1
                ele2.Equipo2.GF = ele2.Equipo2.GF + ele2.Goals2
                ele2.Equipo2.GC = ele2.Equipo2.GC + ele2.Goals1
                ele2.Equipo2.DF = ele2.Equipo2.GF - ele2.Equipo2.GC
                ele2.Equipo1.GF = ele2.Equipo1.GF + ele2.Goals1
                ele2.Equipo1.GC = ele2.Equipo1.GC + ele2.Goals2
                ele2.Equipo1.DF = ele2.Equipo1.GF - ele2.Equipo1.GC
            }
            return ele2
        }))

        props.set(props.Tequipos.sort((b,a)=>{
            if (a.pts > b.pts) {
                return 1
            }
            if (a.pts < b.pts) {
                return -1
            }
            if (a.pts === b.pts) {
                if (a.DF > b.DF) {
                    return 1
                }else if (a.DF < b.DF) {
                    return -1
                }else if (a.DF === b.DF) {
                    if (a.GF > b.GF) {
                        return 1
                    }else if (a.GF < b.GF) {
                        return -1
                    }else{
                        return 0
                    }
                }
            }
            return 0;
        }))
        console.log(partidos);
    }

    return (
        <div className="text-center">
            <div className="mt-5"><h1>TABLA DE POSICIONES LIGA BETPLAY</h1></div>
            <div className="mt-5"><h1>{props.setD.Fecha}</h1></div>

            <div className="container">
                <button onClick={()=>{validacion('Fecha18')}} className="btn btn-outline-secondary mr-4 mt-4">simular F-18</button>
                <button onClick={()=>{validacion('Fecha19')}} className="btn btn-outline-secondary mr-4 mt-4">simular F-19</button>
                <button onClick={()=>{validacion('Fecha20')}} className="btn btn-outline-secondary mr-4 mt-4">simular F-20</button>
            </div>

            <div className="container border mt-4">
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
                        {props.Tequipos.map((equipo, position) => (
                            <tr key={equipo.Equipo}>
                                <td>{position+1}</td>
                                <td><div className="image"><img className="float-left" src={'imgs/' + equipo.image} alt="" width="17"></img><div className="float-left ml-5">{equipo.Equipo}</div></div></td>
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

export default Tabla