package co.arconomy.rest.tasks;

import co.arconomy.rest.resources.SendMailResource;
import co.arconomy.rest.resources.VendorResource;
import org.springframework.mail.MailException;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;

/**
 * Created by cornishac on 11/04/2016.
 */
public class SendMailTask implements Runnable {

    private SendMailResource sendMailResource;
    private MailSender mailSender;

    public SendMailTask(MailSender mailSender, SendMailResource sendMailResource) {
        this.sendMailResource = sendMailResource;
        this.mailSender = mailSender;
    }

    public void run() {
        SimpleMailMessage message = new SimpleMailMessage();
        VendorResource vendorResource = sendMailResource.getVendorResource();

        message.setSubject("New Business Enquiry");
        message.setFrom(vendorResource.getEmail());
        message.setTo(sendMailResource.getSendMailTo());
        message.setText(
                "Business Name: " + vendorResource.getBusinessName() + "\r\n" +
                        "Contact Name: " + vendorResource.getTitle() + " " + vendorResource.getFirstName() + " " + vendorResource.getLastName() + "\r\n" +
                        "Phone: " + vendorResource.getPhone() + "\r\n" +
                        "Email: " + vendorResource.getEmail() + "\r\n" +
                        "URL: " + vendorResource.getWebsiteUrl() + "\r\n" +
                        "Message: " + vendorResource.getEnquiry() + "\r\n"
        );

        try {
            this.mailSender.send(message);
        } catch (MailException ex) {
            System.out.println(ex);
        }
    }
}
