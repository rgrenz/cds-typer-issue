namespace stuff;


type Language : String enum {
    DE = 'German';
    EN = 'English'
}

/*
@description: 'Dummy entity to force the correct generation of the Language enum'
entity Dummy {
    language : Language
}
*/


entity Books {
    title : String;
}
