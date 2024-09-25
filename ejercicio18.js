const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

for (let places in placesToTravel){

    if ((placesToTravel[places].id == 11 || placesToTravel[places].id == 40 )){
        placesToTravel.splice(placesToTravel[places], 1);
    }
}
console.log(placesToTravel);