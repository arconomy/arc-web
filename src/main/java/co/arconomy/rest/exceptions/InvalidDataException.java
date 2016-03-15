package co.arconomy.core.services.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class InvalidDataException extends RuntimeException {
    public InvalidDataException() {}
    public InvalidDataException(Throwable cause) {
        super(cause);
    }
    public InvalidDataException(String cause)   { super(cause);}
}