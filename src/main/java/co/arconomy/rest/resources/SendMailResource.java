package co.arconomy.rest.resources;

/**
 * Created by cornishac on 11/04/2016.
 */
public class SendMailResource   {

    private VendorResource vendorResource;
    private String sendMailTo;
    private String sendMailFrom;

    public VendorResource getVendorResource() {
        return vendorResource;
    }

    public void setVendorResource(VendorResource vendorResource) {
        this.vendorResource = vendorResource;
    }

    public String getSendMailTo() {
        return sendMailTo;
    }

    public void setSendMailTo(String sendMailTo) {
        this.sendMailTo = sendMailTo;
    }

    public String getSendMailFrom() {
        return sendMailFrom;
    }

    public void setSendMailFrom(String sendMailFrom) {
        this.sendMailFrom = sendMailFrom;
    }
}
