Sacado de http://www.utnianos.com.ar/foro/tema-documentacion-plugin-academicas .

      ========================= MATERIAS ========================

POST

get_materias

URL: http://www.utnianos.com.ar/foro/xmlhttp.php?action=academica_xmlhttp_getmaterias&my_post_key=

Parametros:
c=id de carrera
p=id de plan.
my_post_key: un id unico que se genera al hacer el request de la pagina, para impedir xss, esta en una variable global que se llama "my_post_key".


Respuesta:
[
{
"a":"año",
"e":"electiva",
"x":"extracurricular",
"v":[
{
"t":"nombre de la materia",
"v":"id de la materia"
},
{
...
}
]
},
{...}
]

estan agrupadas por años, si son electivas o no, y si son extracurriculares.

     ========================= COORRELATIVAS ========================

POST
get_correlativas
URL: http://www.utnianos.com.ar/foro/xmlhttp.php?action=academica_xmlhttp_getcorrelativas&my_post_key=

[
{
"m":id de la materia,
"d":{
"r.$tipomat.$tiporeq":[ requiere],
"h.$tiporeq.$tipomat":[ habilita],
}
},
{ ... }
]

tipoMat y tipoReq son F y C

por ejemplo
rCC es requiere cursada para cursar
rCF es requiere final para cursar

     ========================= CARRERAS ========================

GET
get_carreras

http://www.utnianos.com.ar/foro/xmlhttp.php?action=academica_xmlhttp_getcarreras&my_post_key=

       ========================= PLANES ========================
GET
get_planes

con parametro POST: c=
http://www.utnianos.com.ar/foro/xmlhttp.php?action=academica_xmlhttp_getplanes&my_post_key=
