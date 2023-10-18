using {stuff} from '../db/stuff';

service TestService {
    entity AvailableBooks as projection on stuff.Books;

    function readOneBook() returns {
        title : stuff.Books:title;
    }
}
