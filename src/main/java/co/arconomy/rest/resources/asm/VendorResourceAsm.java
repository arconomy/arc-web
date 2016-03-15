package co.arconomy.rest.resources.asm;

import co.arconomy.entities.Vendor;
import co.arconomy.rest.mvc.VendorController;
import co.arconomy.rest.resources.VendorResource;
import org.springframework.hateoas.mvc.ResourceAssemblerSupport;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;


public class VendorResourceAsm extends ResourceAssemblerSupport<Vendor, VendorResource> {
    public VendorResourceAsm() {
        super(VendorController.class, VendorResource.class);
    }

    @Override
    public VendorResource toResource(Vendor vendor) {
        VendorResource vendorResource = new VendorResource();
        vendorResource.setUuid(vendor.getId());
        vendorResource.setTitle(vendor.getTitle());
        vendorResource.setFirstName(vendor.getFirstName());
        vendorResource.setLastName(vendor.getLastName());
        vendorResource.setBusinessName(vendor.getBusinessName());
        vendorResource.setLocation(vendor.getLocation());
        vendorResource.setState(vendor.getState());
        vendorResource.setPhone(vendor.getPhone());
        vendorResource.setEmail(vendor.getEmail());
        vendorResource.setEnquiry(vendor.getEnquiry());
        vendorResource.setWebsiteUrl(vendor.getWebsiteUrl());
        vendorResource.setFullTimeEmployees(vendor.getFullTimeEmployees());
        vendorResource.setPartTimeEmployees(vendor.getPartTimeEmployees());
        vendorResource.setGstRegisteredFromBoolean(vendor.isGstRegistered());
        vendorResource.setHasAmazonStore(vendor.isHasAmazonStore());
        vendorResource.setHasCommerceWebSiteFromBoolean(vendor.isHasCommerceWebSite());
        vendorResource.setHasEbayStore(vendor.isHasEbayStore());
        vendorResource.setHasEtzyStore(vendor.isHasEtzyStore());
        vendorResource.setHasFacebook(vendor.isHasFacebook());
        vendorResource.setHasGooglePlus(vendor.isHasGooglePlus());
        vendorResource.setHasInstagram(vendor.isHasInstagram());
        vendorResource.setHasLinkedIn(vendor.isHasLinkedIn());
        vendorResource.setHasPinterest(vendor.isHasPinterest());
        vendorResource.setHasTwitter(vendor.isHasTwitter());
        vendorResource.setOtherSalesChannels(vendor.getOtherSalesChannels());
        vendorResource.setSellsLocalMarkets(vendor.isSellsLocalMarkets());
        vendorResource.setSellsOnSocialPlatform(vendor.isSellsOnSocialPlatform());
        vendorResource.setSellsOtherChannels(vendor.isSellsOtherChannels());
        vendorResource.setSellsRetailSuppliers(vendor.isSellsRetailSuppliers());
        vendorResource.setSellsTradeFairs(vendor.isSellsTradeFairs());

        vendorResource.add(linkTo(methodOn(VendorController.class).findVendor(vendor.getId())).withSelfRel());
        return vendorResource;
    }
}
