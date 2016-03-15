package co.arconomy.rest.exceptionHandlers;
import co.arconomy.rest.exceptions.NotFoundException;
import co.arconomy.rest.resources.ExceptionResource;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

/**
 * Created by cornishac on 6/01/2016.
 */

@ControllerAdvice
public class CustomResponseEntityExceptionHandler extends ResponseEntityExceptionHandler{

    @ExceptionHandler (DataIntegrityViolationException.class)
    protected ResponseEntity<Object> handleDataConstraintException (RuntimeException e, WebRequest request) {
        RuntimeException ex = new RuntimeException("Cannot create duplicate records",e);
        return handleDataException(ex,request);
    }

    @ExceptionHandler (co.arconomy.core.services.exceptions.InvalidDataException.class)
    protected ResponseEntity<Object> handleInvalidDataException (RuntimeException e, WebRequest request) {
        return handleDataException(e,request);
    }

    @ExceptionHandler (NotFoundException.class)
    protected ResponseEntity<Object> handleBaseDataNotFoundException (RuntimeException e, WebRequest request) {
        return handleDataException(e,request);

    }
    private ResponseEntity<Object> handleDataException (RuntimeException e, WebRequest request)  {
        ExceptionResource error = new ExceptionResource(e.getMessage());
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        return handleExceptionInternal(e, error, headers, HttpStatus.UNPROCESSABLE_ENTITY, request);
    }
}