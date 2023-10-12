namespace stuff;

type Language : String enum {
    DE = 'German';
    EN = 'English'
}

entity Books {
    title    : String;
    language : Language;
}
