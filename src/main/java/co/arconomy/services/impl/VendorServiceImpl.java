package co.arconomy.services.impl;

import co.arconomy.entities.Vendor;
import co.arconomy.repositories.VendorRepo;
import co.arconomy.rest.resources.VendorResource;
import co.arconomy.rest.resources.VendorResourceArrayList;
import co.arconomy.rest.resources.asm.VendorResourceAsm;
import co.arconomy.services.VendorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class VendorServiceImpl implements VendorService {

    @Autowired
    VendorRepo vendorRepo;

    @Override
    public VendorResource saveVendor(VendorResource vendorResource) {
        Vendor vendor = vendorResource.toEntity(vendorRepo);
        return new VendorResourceAsm().toResource(vendorRepo.save(vendor));
    }

    @Override
    public VendorResource findVendor(Long id) {
        return new VendorResourceAsm().toResource(vendorRepo.findOne(id));
    }

    @Override
    public VendorResourceArrayList getVendors() {

        VendorResourceArrayList vendorResources = new VendorResourceArrayList();
        vendorRepo.findAll()
                .forEach(vendor -> vendorResources.add(new VendorResourceAsm().toResource(vendor)));
        return vendorResources;
    }
}
