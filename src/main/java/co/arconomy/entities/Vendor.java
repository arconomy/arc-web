package co.arconomy.entities;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.Table;


@Entity
@Table(name = "vendor")

public class Vendor {
    @Id
    @GeneratedValue
    private Long id;

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

    private boolean gstRegistered;
    private boolean hasAmazonStore;
    private boolean hasCommerceWebSite;
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public boolean isGstRegistered() {
        return gstRegistered;
    }

    public void setGstRegistered(boolean gstRegistered) {
        this.gstRegistered = gstRegistered;
    }

    public boolean isHasAmazonStore() {
        return hasAmazonStore;
    }

    public void setHasAmazonStore(boolean hasAmazonStore) {
        this.hasAmazonStore = hasAmazonStore;
    }

    public boolean isHasCommerceWebSite() {
        return hasCommerceWebSite;
    }

    public void setHasCommerceWebSite(boolean hasCommerceWebSite) {
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
}
