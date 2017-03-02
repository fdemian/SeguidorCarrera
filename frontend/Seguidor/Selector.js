import { createSelector} from 'reselect';

const getMaterias = state => state.seguidor.materias
const getEstados = state => state.seguidor.estados
const getCorrelativas = state => state.seguidor.correlativas

/*
 *   Estados: 
 *   1 - Pendiente
 *   2 - Cursando
 *   3 - Firmada
 *   4 - Aprobada
 *
 *   Los que importan en este caso son firma(3) y aprobación(4).
*/
const ESTADO_FIRMA = 3;
const ESTADO_APROBACION = 4;

/* 
 * @name: validarReq
 * @desc: Valida un conjunto de requerimientos contra un conjunto de estados. 
 * @param requerimientos: el conjunto de requerimientos a validar.
 * @param estados: estados contra los que se comparan los requerimientos.
 * @param estado: el estado que se quiere que tengan los requerimientos (aprobada/firmada).
*/
function validarReq(requerimientos, estados, estado)
{
    let _valido = true;
	
	// No hay requisitos, la condición es verdadera.
	if(!requerimientos || requerimientos.length == 0)
		return true;
	
    for(var req of requerimientos)
	{		 
	  var result = estados.filter(e => e.id == req && e.status >= estado);
	  
  	  if(result.length == 0)
	  {
	     _valido = false;
		 break;			  
      }	  
	}
	
	return _valido;
}

// TODO: Por ahora solo evalúa si puede cursar la materia _NO_ si puede dar final.
// materia: materia cuyo estado se desea conocer.
// correlativas: correlativas de esa materia.
// aprobadas: materias aprobadas hasta el momento.
function getEstadoMateria(_correlativas, estados){	
      
   if(_correlativas.length == 0)
	  return { cursada: true, final: true};
   
   const c_cursadas = _correlativas["rCC"];
   const c_finales  = _correlativas["rFC"];

   const f_cursadas = _correlativas["rCF"];   
   const f_finales  = _correlativas["rFF"];     
   
   const puedeCursar = validarReq(c_cursadas, estados, ESTADO_FIRMA) &&
                       validarReq(c_finales, estados, ESTADO_APROBACION);
					   
   const puededarFinal = validarReq(f_cursadas, estados, ESTADO_FIRMA) &&
                         validarReq(f_finales, estados, ESTADO_APROBACION);    
   
   return { cursada: puedeCursar, final: puededarFinal };   
}

const getMateriasEstado = createSelector(
  [ getMaterias, getEstados, getCorrelativas ],
  (materias, estados, correlativas) => {
	 for(var materia of materias)	  
	 {
		const _materiaEstado = estados.filter(c => c.id == materia.id);
		let estadoMateria = 1; // Por defecto, la materia esta pendiente.
		
		if(_materiaEstado.length > 0)
			estadoMateria = _materiaEstado[0].status
		
		let _correlativas = correlativas.filter(c => c.m == materia.id);
				
		if(_correlativas.length > 0)
          _correlativas = _correlativas[0].d;
				
		let estado = getEstadoMateria(_correlativas, estados);
	     
		materia.status = (estado.cursada == false ? 1 : estadoMateria);
		materia.cursada = estado.cursada;
		materia.final = estado.final;		
	  }
	  	  
	  return materias;	 
   }    
);

export default getMateriasEstado;