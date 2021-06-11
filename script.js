'use strict'
// Please don't delete the 'use strict' line above;


//Assign 'male' or 'organization' value to 'sex' key, if value does not already exist


for (let entry of nobels.prizes){
    for (let person of entry.laureates){
        if (person["sex"] === undefined && person["surname"] !== "") {
        person["sex"] = "male"}
        else if (person["sex"] !== "female" && person["surname"] === "" ){
        person["sex"] = "organization"};
    }}



for (let entry of nobels.prizes){
//Create h2 elements for each category of prize, each category is unique div
    let categoryElement = document.getElementById(entry.category)
    if (typeof(categoryElement) === 'undefined' || categoryElement === null){
        const div = document.createElement('div');
        div.id = `${entry.category}Div`; //Div ID is 'category' + Div
        document.body.appendChild(div);
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = entry.category;
        document.getElementById(`${entry.category}Div`).appendChild(categoryTitle)
        categoryTitle.id = entry.category; //'h2' id is 'category' 
        
        //ATTEMPT TO ADD CLICK LINKS
        let categoryDiv = document.getElementById(`${entry.category}Div`);
        let aTag = document.createElement('a');
        aTag.setAttribute('href', 'ANCHORLINK');
        //aTag.innerText = 
        categoryDiv.appendChild(aTag);

//Under each category of prize, create new h3 element for each unique year
        } const yearHeadding = document.createElement('h3');
        yearHeadding.textContent = entry.year
        document.getElementById(`${entry.category}Div`).appendChild(yearHeadding);

//Under each unique year & category combination, add person name, sex, and 'motivation' for
    for (let person of entry.laureates){
        const personEntry = document.createElement('p');
        personEntry.style.display = "block";

//Decided if the 'motivation' and/or 'surname' values should be added to the element, based on their value
        if ("motivation" in person){
            if (person["surname"] !== ""){
                personEntry.textContent = `${person["surname"]}, ${person["firstname"]}, ${person["sex"]}: ${person["motivation"]}`;
            } else {personEntry.textContent = `${person["firstname"]}, ${person["sex"]}: ${person["motivation"]}`;

        }} else if (!("motivation" in person)){
            if (person["surname"] !== ""){
                personEntry.textContent = `${person["surname"]}, ${person["firstname"]}, ${person["sex"]}`;
            } else {personEntry.textContent = `${person["firstname"]}, ${person["sex"]}`}

//Add each person entry to the document and assign class based on sex
            } document.getElementById(`${entry.category}Div`).appendChild(personEntry);
            if (person.sex ===  "female"){
                personEntry.className = "female"}
            else if (person.sex === "male"){
                personEntry.className = "male"
            } else if (person.sex ===  "organization"){
                personEntry.className = "organization";  
            }
        } 
} 


////////////////////////////////////////////////////////////////////////////////////
///Need some if/else to be able to toggle between things here

// v2
// const displayFunction = (displayParams, displayMode) => {
//     let queryInputs = ''
//     displayParams.forEach(query => queryInputs = queryInputs + `.${query},`);    
//     queryInputs = queryInputs.slice(0, -1);
//     if (queryInputs === ''){
//         return;
//     } else {
//     let displayNobels = document.querySelectorAll(queryInputs);
//     for (let i = 0; i < displayNobels.length; i++){
//     displayNobels[i].style.display = displayMode};}
// }

//v3
const displayFunction = (displayParams, displayMode) => {
    let queryInputs = ''
    displayParams.forEach(query => queryInputs = queryInputs + `.${query},`);    
    queryInputs = queryInputs.slice(0, -1);
    let displayNobels = document.querySelectorAll(queryInputs);
    for (let i = 0; i < displayNobels.length; i++){
    displayNobels[i].style.display = displayMode};}


const toggleFunction = (showParams, hideParams) => {
    displayFunction(showParams, "block");
    displayFunction(hideParams, "none");
}



// let womenLaureates = [
//     "Jane Addams",
//     "Svetlana Alexievich",
//     "Frances H. Arnold",
//     "Aung San Suu Kyi", //should be first and last name
//     "Emily Greene Balch",
//     "Françoise Barré-Sinoussi",
//     "Elizabeth Blackburn",
//     "Linda B. Buck",
//     "Pearl S. Buck",
//     "Emmanuelle Charpentier", //MISSING
//     "Gerty Cori",
//     "Marie Curie",
//     "Margaret A. Davidson", //MISSING
//     "Grazia Deledda",
//     "Jennifer Doudna", //MISSING
//     "Esther Duflo", //MISSING
//     "Shirin Ebadi",
//     "Gertrude B. Elion",
//     "Leymah Gbowee",
//     "Andrea M. Ghez", //MISSING
//     "Louise Glück", //missing
//     "Maria Goeppert Mayer",
//     "Nadine Gordimer",
//     "Carol W. Greider",
//     "Dorothy Hodgkin",
//     "Elfriede Jelinek",
//     "Irène Joliot-Curie",
//     "Tawakkol Karman",
//     "Selma Lagerlöf",
//     "Doris Lessing",
//     "Rita Levi-Montalcini",
//     "Wangari Maathai",
//     "Mairead Maguire",
//     "Barbara McClintock",
//     "Rigoberta Menchú",
//     "Gabriela Mistral",
//     "Toni Morrison",
//     "May-Britt Moser",
//     "Herta Müller",
//     "Alice Munro",
//     "Nadia Murad",
//     "Alva Myrdal",
//     "Christiane Nüsslein-Volhard",
//     "Elinor Ostrom",
//     "Nelly Sachs",
//     "Ellen Johnson Sirleaf",
//     "Donna Strickland",
//     "Bertha von Suttner",
//     "Wisława Szymborska",
//     "Mother Teresa",
//     "Olga Tokarczuk", //MISSING
//     "Tu Youyou",
//     "Sigrid Undset",
//     "Betty Williams",
//     "Jody Williams",
//     "Rosalyn Sussman Yalow",
//     "Ada Yonath",
//     "Malala Yousafzai"]