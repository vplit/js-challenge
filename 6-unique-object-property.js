let objects = [
    {
        name: "glaxy note 8",
        company: "sam sung",
    },
    {
        name: "glaxy note 10",
        company: "sam sung"
    },
    {
        name: "nokia note 8",
        company: "nokia"
    },
    {
        name: "xiaomi note 8",
        company: "xiaomi"
    },
    {
        name: "iphone 9",
        company: "apple"
    },
    {
        name: "iphone 10",
        company: "apple"
    }
];

function getCompanies(list) {
    let arr = [];
    for(let i = 0; i < list.length; i++){
        let company = list[i]['company'].trim().toLowerCase();
        if(arr.indexOf(company) < 0){
            arr.push(company);
        }
    }

    return arr;
}

function getCompaniesUseMap(list) {
    let arr = list.map(a => a.company);

    return [ ...new Set(arr)];
}

function getCompanyReduce(list) {
    let arr = [...list.reduce((acc, curr) => { 
        acc.add(curr.company);
        return acc;
    }, new Set())];

    return arr;
}

console.log(getCompanies(objects));
console.log(getCompaniesUseMap(objects));
console.log(getCompanyReduce(objects));