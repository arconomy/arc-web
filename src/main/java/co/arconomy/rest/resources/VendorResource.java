package co.arconomy.rest.resources;

import co.arconomy.entities.Vendor;
import co.arconomy.repositories.VendorRepo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.hateoas.ResourceSupport;

public class VendorResource extends ResourceSupport{

    private Long uuid;
    private String title;
    private String firstName;
    private String lastName;
    private String businessName;
    private String location;
    private String state;
    private String phone;
    private String email;
    private String enquiry;
    private String websiteUrl;
    private String fullTimeEmployees;
    private String partTimeEmployees;

    private String gstRegistered;
    private boolean hasAmazonStore;
    private String hasCommerceWebSite;
    private boolean hasEbayStore;
    private boolean hasEtzyStore;
    private boolean hasFacebook;
    private boolean hasGooglePlus;
    private boolean hasInstagram;
    private boolean hasLinkedIn;
    private boolean hasPinterest;
    private boolean hasTwitter;
    private String otherSalesChannels;

    private boolean sellsLocalMarkets;
    private boolean sellsOnSocialPlatform;
    private boolean sellsOtherChannels;
    private boolean sellsRetailSuppliers;
    private boolean sellsTradeFairs;

    public Long getUuid() {
        return uuid;
    }

    public void setUuid(Long uuid) {
        this.uuid = uuid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getBusinessName() {
        return businessName;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEnquiry() {
        return enquiry;
    }

    public void setEnquiry(String enquiry) {
        this.enquiry = enquiry;
    }

    public String getWebsiteUrl() {
        return websiteUrl;
    }

    public void setWebsiteUrl(String websiteUrl) {
        this.websiteUrl = websiteUrl;
    }

    public String getFullTimeEmployees() {
        return fullTimeEmployees;
    }

    public void setFullTimeEmployees(String fullTimeEmployees) {
        this.fullTimeEmployees = fullTimeEmployees;
    }

    public String getPartTimeEmployees() {
        return partTimeEmployees;
    }

    public void setPartTimeEmployees(String partTimeEmployees) {
        this.partTimeEmployees = partTimeEmployees;
    }

    public String getGstRegistered() {
        return gstRegistered;
    }

    public void setGstRegistered(String gstRegistered) {
        this.gstRegistered = gstRegistered;
    }

    @JsonIgnore
    public boolean getGstRegisteredAsBoolean() {
        if (getGstRegistered() != null) {
            return gstRegistered.equalsIgnoreCase("Yes");
        }
        return false;
    }

    @JsonIgnore
    public void setGstRegisteredFromBoolean(boolean gstRegistered) {
        if (gstRegistered) {
            setGstRegistered("Yes");
        } else {
            setGstRegistered("No");
        }
    }

    public boolean isHasAmazonStore() {
        return hasAmazonStore;
    }

    public void setHasAmazonStore(boolean hasAmazonStore) {
        this.hasAmazonStore = hasAmazonStore;
    }

    @JsonIgnore
    public boolean isHasCommerceWebSiteAsBoolean() {
        if (getHasCommerceWebSite() != null) {
            return hasCommerceWebSite.equalsIgnoreCase("Yes");
        }
        return false;
    }

    @JsonIgnore
    public void setHasCommerceWebSiteFromBoolean(boolean hasCommerceWebSite) {
        if (hasCommerceWebSite) {
            setHasCommerceWebSite("Yes");
        } else {
            setHasCommerceWebSite("No");
        }
    }

    public String getHasCommerceWebSite() {
        return hasCommerceWebSite;
    }

    public void setHasCommerceWebSite(String hasCommerceWebSite) {
        this.hasCommerceWebSite = hasCommerceWebSite;
    }

    public boolean isHasEbayStore() {
        return hasEbayStore;
    }

    public void setHasEbayStore(boolean hasEbayStore) {
        this.hasEbayStore = hasEbayStore;
    }

    public boolean isHasEtzyStore() {
        return hasEtzyStore;
    }

    public void setHasEtzyStore(boolean hasEtzyStore) {
        this.hasEtzyStore = hasEtzyStore;
    }

    public boolean isHasFacebook() {
        return hasFacebook;
    }

    public void setHasFacebook(boolean hasFacebook) {
        this.hasFacebook = hasFacebook;
    }

    public boolean isHasGooglePlus() {
        return hasGooglePlus;
    }

    public void setHasGooglePlus(boolean hasGooglePlus) {
        this.hasGooglePlus = hasGooglePlus;
    }

    public boolean isHasInstagram() {
        return hasInstagram;
    }

    public void setHasInstagram(boolean hasInstagram) {
        this.hasInstagram = hasInstagram;
    }

    public boolean isHasLinkedIn() {
        return hasLinkedIn;
    }

    public void setHasLinkedIn(boolean hasLinkedIn) {
        this.hasLinkedIn = hasLinkedIn;
    }

    public boolean isHasPinterest() {
        return hasPinterest;
    }

    public void setHasPinterest(boolean hasPinterest) {
        this.hasPinterest = hasPinterest;
    }

    public boolean isHasTwitter() {
        return hasTwitter;
    }

    public void setHasTwitter(boolean hasTwitter) {
        this.hasTwitter = hasTwitter;
    }

    public String getOtherSalesChannels() {
        return otherSalesChannels;
    }

    public void setOtherSalesChannels(String otherSalesChannels) {
        this.otherSalesChannels = otherSalesChannels;
    }

    public boolean isSellsLocalMarkets() {
        return sellsLocalMarkets;
    }

    public void setSellsLocalMarkets(boolean sellsLocalMarkets) {
        this.sellsLocalMarkets = sellsLocalMarkets;
    }

    public boolean isSellsOnSocialPlatform() {
        return sellsOnSocialPlatform;
    }

    public void setSellsOnSocialPlatform(boolean sellsOnSocialPlatform) {
        this.sellsOnSocialPlatform = sellsOnSocialPlatform;
    }

    public boolean isSellsOtherChannels() {
        return sellsOtherChannels;
    }

    public void setSellsOtherChannels(boolean sellsOtherChannels) {
        this.sellsOtherChannels = sellsOtherChannels;
    }

    public boolean isSellsRetailSuppliers() {
        return sellsRetailSuppliers;
    }

    public void setSellsRetailSuppliers(boolean sellsRetailSuppliers) {
        this.sellsRetailSuppliers = sellsRetailSuppliers;
    }

    public boolean isSellsTradeFairs() {
        return sellsTradeFairs;
    }

    public void setSellsTradeFairs(boolean sellsTradeFairs) {
        this.sellsTradeFairs = sellsTradeFairs;
    }

    public Vendor toEntity(VendorRepo vendorRepo) {
        Vendor vendor;
        if (this.uuid != null && vendorRepo.exists(this.uuid)) {
            vendor = vendorRepo.findOne(this.uuid);
        } else {
            vendor = new Vendor();
        }

        vendor.setTitle(this.getTitle());
        vendor.setFirstName(this.getFirstName());
        vendor.setLastName(this.getLastName());
        vendor.setBusinessName(this.getBusinessName());
        vendor.setLocation(this.getLocation());
        vendor.setState(this.getState());
        vendor.setPhone(this.getPhone());
        vendor.setEmail(this.getEmail());
        vendor.setEnquiry(this.getEnquiry());
        vendor.setWebsiteUrl(this.getWebsiteUrl());
        vendor.setFullTimeEmployees(this.getFullTimeEmployees());
        vendor.setPartTimeEmployees(this.getPartTimeEmployees());
        vendor.setGstRegistered(this.getGstRegisteredAsBoolean());
        vendor.setHasAmazonStore(this.isHasAmazonStore());
        vendor.setHasCommerceWebSite(this.isHasCommerceWebSiteAsBoolean());
        vendor.setHasEbayStore(this.isHasEbayStore());
        vendor.setHasEtzyStore(this.isHasEtzyStore());
        vendor.setHasFacebook(this.isHasFacebook());
        vendor.setHasGooglePlus(this.isHasGooglePlus());
        vendor.setHasInstagram(this.isHasInstagram());
        vendor.setHasLinkedIn(this.isHasLinkedIn());
        vendor.setHasPinterest(this.isHasPinterest());
        vendor.setHasTwitter(this.isHasTwitter());
        vendor.setOtherSalesChannels(this.getOtherSalesChannels());
        vendor.setSellsLocalMarkets(this.isSellsLocalMarkets());
        vendor.setSellsOnSocialPlatform(this.isSellsOnSocialPlatform());
        vendor.setSellsOtherChannels(this.isSellsOtherChannels());
        vendor.setSellsRetailSuppliers(this.isSellsRetailSuppliers());
        vendor.setSellsTradeFairs(this.isSellsTradeFairs());
        return vendor;
    }

}
