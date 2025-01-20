let listData ={};

async function fetchList(prefix = 'shared') {
 
     await fetch(`shared-test.json`)
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          }
          return {};
        })
        .then((data) => {
          
          console.log(data)
          
          listData=data;
        })
        .catch(() => 
          // error loading placeholders
          console.error("Unable to fetch data:", error));
        }

     

 //console.log('data',listData);

 export default async function decorate(block){
  await fetchList();
  
  if(listData && listData.data){

  
   listData.data.forEach(element => {
    const ul=document.createElement("ul");
    for (const key in element) {
      if (element.hasOwnProperty(key)) {
        // Create an LI element
        const li = document.createElement("li");
        // Set the text content of the LI element to include the key and value
        li.textContent = `${key}: ${element[key]}`;
        // Append the LI element to the UL
        ul.appendChild(li);
      }
    }
    block.append(ul);
   });
  
  }
   
 }  
