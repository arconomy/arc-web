package co.arconomy.services;

import co.arconomy.rest.resources.VendorResource;
import co.arconomy.rest.resources.VendorResourceArrayList;


public interface VendorService {

    public VendorResource saveVendor(VendorResource vendorResource);
    public VendorResourceArrayList getVendors();
    public VendorResource findVendor(Long id);
}
