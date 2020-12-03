import React, {useState} from 'react'
import TblaFecha17 from './TblaFecha17'
import Clasificados from './Clasificados'
import Nav from './Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import './App.css'

function App() {

  const [Tequipos, setTequipos] = useState([
    { Equipo: "Tolima",             pts: 34, PJ: 17, G: 9, P: 1, E: 7,    GF: 26, GC: 12, DF: 14,   image: "TolimaL.png"    },
    { Equipo: "Santa Fe",           pts: 31, PJ: 17, G: 8, P: 2, E: 7,    GF: 28, GC: 16, DF: 12,   image: "SantaFeL.png"   },
    { Equipo: "Deportivo Cali",     pts: 30, PJ: 17, G: 7, P: 1, E: 9,    GF: 27, GC: 18, DF: 9,    image: "CaliL.png"      },
    { Equipo: "América",            pts: 30, PJ: 17, G: 8, P: 3, E: 6,    GF: 27, GC: 18, DF: 9,    image: "AmericaL.png"   },
    { Equipo: "Pasto",              pts: 30, PJ: 17, G: 8, P: 3, E: 6,    GF: 24, GC: 16, DF: 8,    image: "PastoL.png"     },
    { Equipo: "Junior",             pts: 26, PJ: 17, G: 6, P: 3, E: 8,    GF: 20, GC: 14, DF: 6,    image: "JuniorL.png"    },
    { Equipo: "Atlético Nacional",  pts: 26, PJ: 17, G: 7, P: 5, E: 5,    GF: 32, GC: 29, DF: 3,    image: "NacionalL.png"  },
    { Equipo: "La Equidad",         pts: 25, PJ: 17, G: 7, P: 6, E: 4,    GF: 26, GC: 21, DF: 5,    image: "EquidadL.png"   },
    { Equipo: "Once Caldas",        pts: 25, PJ: 17, G: 5, P: 2, E: 1,    GF: 18, GC: 15, DF: 3,    image: "OnceCalL.png"   },
    { Equipo: "Águilas Doradas",    pts: 22, PJ: 17, G: 5, P: 5, E: 7,    GF: 19, GC: 18, DF: 1,    image: "AguilasL.png"   },
  ])
  
  const [Fecha18, setFecha18] = useState(false)
  const [Fecha19, setFecha19] = useState(false)
  const [Fecha20, setFecha20] = useState(false)
  const [Fecha, setFecha] = useState('Fecha-17')

  const fechas = {Fecha, setFecha, Fecha18, setFecha18, Fecha19, setFecha19, Fecha20, setFecha20}

  return (
    <Router>
      <Nav />
        <Switch>
          <Route path="/" exact><TblaFecha17 Tequipos={Tequipos} set={setTequipos} setD={fechas}/></Route>
          <Route path="/clasificados"><Clasificados Tequipos={Tequipos} /></Route>
        </Switch> 
    </Router>
  );
}

export default App;
