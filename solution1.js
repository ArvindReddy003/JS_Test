function sorting(str) {
    if (!str) {
        return;
    }
    str = str.split('');
    str = str.sort();
    str = str.join('');
    return str;
}

const w = ["AMOR", "XISELA", "JAMON", "ROMA", "OMAR", "MORA", "ESPONJA", "RAMO","JAPONES","ARMO","MOJAN","MARO","ORAM","MONJA","ALEXIS"];

function getGroupedAnagrams(w){
    const agms = {}; // {abc:[abc,cba], dell:[dell, ledl]}
    w.forEach((word)=>{
        const sortedWord = sorting(word);
        if (agms[sortedWord]) {
            return agms[sortedWord].push(word);
        }
        agms[sortedWord] = [word];
    });
    return agms;
}

const ga = getGroupedAnagrams(w);
for(const sortedWord in ga){
    console.log(ga[sortedWord].toString());

}