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

    const validacion = (Fecha) => {
        switch (Fecha) {
            case 'Fecha18':
                if (props.setD.Fecha18 === false) {
                    simPJ()
                    props.setD.setFecha18(true)
                    props.setD.setFecha('Fecha-18')
                }else{
                    alert('Ya ha sido registrada esta fecha')
                }
                break;
            case 'Fecha19':
                if (props.setD.Fecha19 === false && props.setD.Fecha18 === true) {
                    simPJ()
                    props.setD.setFecha19(true)
                    props.setD.setFecha('Fecha-19')
                }else{
                    alert('Ya ha sido registrada esta fecha o no se ha registrado aun la fecha 18')
                }
                break;
        }
    };

    const simPJ = () => {

        props.set(props.Tequipos.map(ele => {
            ele.PJ = ele.PJ + 1
            return ele
        }))

        setPartidos(Partidos.map(ele2 => {
            ele2.Goals1 = 0
            ele2.Goals2 = 0
            return ele2
        }))

        setPartidos(Partidos.map(ele2 => {
            ele2.Goals1 = Math.floor(Math.random() * (10 - 0)) + 0;
            ele2.Goals2 = Math.floor(Math.random() * (10 - 0)) + 0;
            return ele2
        }))

        setPartidos(Partidos.map(ele2 => {
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
            return 0
        }))
        
        console.log(Partidos);

    }

    return (
        <div className="text-center">
            <div className="mt-5"><h1>TABLA DE POSICIONES LIGA BETPLAY</h1></div>
            <div className="mt-5"><h1>{props.setD.Fecha}</h1></div>
            <div className="container border mt-5">
                <div className="container mt-3">
                    <button onClick={()=>{validacion('Fecha19')}} id="F19" className="btn btn-primary float-right mr-4">simular F-19</button>
                    <button onClick={()=>{validacion('Fecha18')}} id="F18" className="btn btn-primary float-right mr-4">simular F-18</button>
                </div>
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

export default Tabla