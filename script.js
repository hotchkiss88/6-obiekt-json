let listaPracownikow = {
    "pracownicy": [{
            "firstName": "Krystian",
            "lastName": "Dziopa"
        },
        {
            "firstName": "Anna",
            "lastName": "Szapiel"
        },
        {
            "firstName": "Piotr",
            "lastName": "Żmuda"
        }
    ]
};


listaPracownikow.pracownicy.forEach(function(element, index) {

        console.log("Numer pracownika: " +
            index + "/ Nazwisko: " +
            element.lastName + "/ Imienie: " +
            element.firstName);
    }

);