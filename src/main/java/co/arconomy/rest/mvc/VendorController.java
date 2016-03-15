package co.arconomy.rest.mvc;

import co.arconomy.services.VendorService;
import co.arconomy.rest.resources.VendorResource;
import co.arconomy.rest.resources.VendorResourceArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/rest")
public class VendorController {

    @Autowired
    VendorService vendorService;

    public VendorController() {
    }


    @RequestMapping(value = "/contact", method = RequestMethod.POST)
    public ResponseEntity<VendorResource> saveContact(@RequestBody VendorResource vendorResource) {

        VendorResource responseVendorResource = vendorService.saveVendor(vendorResource);
        if (responseVendorResource != null) {
            return new ResponseEntity<>(responseVendorResource, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/contact", method = RequestMethod.GET)
    public ResponseEntity<VendorResourceArrayList> getVendors() {
        VendorResourceArrayList responseVendorResources = vendorService.getVendors();
        if (responseVendorResources != null) {
            return new ResponseEntity<>(responseVendorResources, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/contact/{id}", method = RequestMethod.GET)
    public ResponseEntity<VendorResource> findVendor(@PathVariable("id") Long id) {
        VendorResource responseVendorResource = vendorService.findVendor(id);
        return new ResponseEntity<>(responseVendorResource, HttpStatus.OK);
    }

}
