function mapSubjectsFromServer(subjectData)
{
   let seguidorInfo = [];
   const subjectGroups = groupSubjectsByYear(subjectData);
   
   for(let yearGroup of subjectGroups)
   {
      for(let subjectTypeGrouping of yearGroup)
      {
         if(subjectTypeGrouping.e != 1 && subjectTypeGrouping.x != 1)
         {
             let year = {number: subjectTypeGrouping.a, subjects: []};

             for(let subject of subjectTypeGrouping.v)
             {
                var newSubject = {id: subject.v, name: subject.t, status: 1};
                year.subjects.push(newSubject)
             }
             seguidorInfo.push(year);
          }
       }
    }

    return seguidorInfo;
}


function groupSubjectsByYear(subjectData)
{
    var objMap = subjectData.reduce(function(acc, item) {

     if(item.a == null)
       item.a = -1;

     var key = item.a.toString();

     acc[key] = acc[key] || [];
     acc[key].push(item);

     return acc;

    }, {});

    return Object.keys(objMap).map((k) => objMap[k]);
}

export default mapSubjectsFromServer;
