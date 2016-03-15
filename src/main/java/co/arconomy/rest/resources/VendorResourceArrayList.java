package co.arconomy.rest.resources;

import org.springframework.hateoas.ResourceSupport;
import java.util.ArrayList;
import java.util.List;


public class VendorResourceArrayList extends ResourceSupport {

    private List<VendorResource> vendorResourceArrayList = new ArrayList<>();

    public List<VendorResource> getVendorResourceArrayList() {
        return vendorResourceArrayList;
    }

    public void setVendorResourceArrayList(List<VendorResource> vendorResourceArrayList) {
        this.vendorResourceArrayList = vendorResourceArrayList;
    }

    public void add (VendorResource vendorResource)  {
        this.vendorResourceArrayList.add(vendorResource);
    }
}
