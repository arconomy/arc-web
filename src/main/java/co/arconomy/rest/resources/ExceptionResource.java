package co.arconomy.rest.resources;

import org.springframework.hateoas.ResourceSupport;

/**
 * Created by cornishac on 6/01/2016.
 */
public class ExceptionResource extends ResourceSupport {
    private String errorMessage;

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public ExceptionResource(String errorMessage) {

        this.errorMessage = errorMessage;
    }
}
