package co.arconomy.rest.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by cornishac on 18/03/2016.
 */
@Controller
public class DefaultController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public void redirectToHome(HttpServletResponse httpServletResponse) throws IOException {
        httpServletResponse.sendRedirect("/app/welcome/index.html#/");
    }

}
