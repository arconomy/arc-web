package co.arconomy.services.impl;

import co.arconomy.rest.resources.SendMailResource;
import co.arconomy.rest.tasks.SendMailTask;
import co.arconomy.rest.resources.VendorResource;
import co.arconomy.services.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.task.SimpleAsyncTaskExecutor;
import org.springframework.mail.MailSender;
import org.springframework.stereotype.Service;

/**
 * Created by cornishac on 11/04/2016.
 */

@Service
public class MailServiceImpl implements MailService {

    @Autowired
    private SimpleAsyncTaskExecutor sendMailExecutor;

    @Autowired
    MailSender mailSender;

    @Value("${send.to.email}")
    private String sendToEmail;

    @Value("${send.from.email}")
    private String sendFromEmail;

    @Override
    public void sendMail(VendorResource vendorResource) {
        SendMailResource sendMailResource = new SendMailResource();
        sendMailResource.setSendMailTo(sendToEmail);
        sendMailResource.setSendMailFrom(sendFromEmail);
        sendMailResource.setVendorResource(vendorResource);
        sendMailExecutor.execute(new SendMailTask(mailSender,sendMailResource));
    }
}
