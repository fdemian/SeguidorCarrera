export function getNuevoEstadoArray(materia, estados)
{	
   const indexMateria = estados.findIndex(function(estado){return estado.id == materia.id;});
   
   let _estados = [];
   
   // La materia no esta en el array.
   if(indexMateria == -1)
   {
	  _estados = estados.concat(materia);   
   }		
   else
   {
	 _estados = estados.slice();
	 _estados[indexMateria].status = materia.status;
   }
   
   return _estados;   	
}

function flattenSubjects(studyYears)
{
  let subjects = [];
	
  for(var subjectYear of studyYears)
  {
	let year = subjectYear.a;
    
	for(var _subject of subjectYear.v)
	{
		let subject = {
			id:  _subject.v,
			name: _subject.t,
			status: 1,			
			year: year,
			cursada: false,
			final: false
		}
		
		subjects.push(subject);
	}	
  }

  return subjects;  
}

export default flattenSubjects;
