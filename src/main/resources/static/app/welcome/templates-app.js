angular.module('templates-app', ['common/templates/arcFooter.tpl.html', 'contact/templates/contact.tpl.html', 'contact/templates/directives/arcAlert.tpl.html', 'contact/templates/directives/arcBusinessName.tpl.html', 'contact/templates/directives/arcContactDetails.tpl.html', 'contact/templates/directives/arcContactForm.tpl.html', 'contact/templates/directives/arcEmployees.tpl.html', 'contact/templates/directives/arcEnquiry.tpl.html', 'contact/templates/directives/arcFirstName.tpl.html', 'contact/templates/directives/arcGst.tpl.html', 'contact/templates/directives/arcLastName.tpl.html', 'contact/templates/directives/arcLocation.tpl.html', 'contact/templates/directives/arcRetailOutlets.tpl.html', 'contact/templates/directives/arcSocialDetails.tpl.html', 'contact/templates/directives/arcTitle.tpl.html', 'contact/templates/directives/arcWebSiteDetails.tpl.html', 'contact/templates/directives/fmVersion.tpl.html', 'contact/templates/success.tpl.html', 'home/templates/home.tpl.html']);

angular.module("common/templates/arcFooter.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/templates/arcFooter.tpl.html",
    "<div class=\"banner\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-6\">\n" +
    "                <h2><span class=\"text-fade\">Retail Architecture for a sharing Economy.</span></h2>\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-6\">\n" +
    "                <ul class=\"list-inline banner-social-buttons\">\n" +
    "                    <li>\n" +
    "                        <a href=\"https://twitter.com/arconomy\" class=\"btn btn-default btn-lg\"><i\n" +
    "                                class=\"fa fa-twitter fa-fw\"></i></a>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                        <a href=\"https://facebook.com/arconomy\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-facebook fa-fw\"></i></a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- /.banner -->\n" +
    "");
}]);

angular.module("contact/templates/contact.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/templates/contact.tpl.html",
    "<a name=\"contact\"></a>\n" +
    "<!-- /.intro-header -->\n" +
    "<div class=\"intro-header\">\n" +
    "    <div class=\"container contact-container-top\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-12\">\n" +
    "                <div class=\"contact-intro\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <!-- /.container -->\n" +
    "</div>\n" +
    "\n" +
    "<!-- /.intro-header -->\n" +
    "<!-- Page Content -->\n" +
    "<div class=\"content-section-a\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-5 col-sm-6\">\n" +
    "                <hr class=\"section-heading-spacer\">\n" +
    "                <div class=\"clearfix\"></div>\n" +
    "                <h2 class=\"section-heading\">Your Business:</h2>\n" +
    "                <p class=\"lead\">\n" +
    "                    Please complete the form below and provide as much information as you can to help us understand how\n" +
    "                    we can help your business.</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-5 col-lg-offset-2 col-sm-6\">\n" +
    "                <img class=\"img-responsive\" src=\"assets/images/arc-form.png\" alt=\"\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- /.container -->\n" +
    "</div>\n" +
    "<!-- /.content-section-a -->\n" +
    "<arc-contact-form></arc-contact-form>\n" +
    "<arc-footer></arc-footer>\n" +
    "\n" +
    "");
}]);

angular.module("contact/templates/directives/arcAlert.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/templates/directives/arcAlert.tpl.html",
    "<div>\n" +
    "    <alert id=\"alert\"\n" +
    "           ng-repeat=\"alert in alerts\"\n" +
    "           type=\"{{alert.type}}\"\n" +
    "           close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "</div>");
}]);

angular.module("contact/templates/directives/arcBusinessName.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/templates/directives/arcBusinessName.tpl.html",
    "<div class=\"form-group\">\n" +
    "    <label class=\"col-md-2 col-sm-2 control-label\">Business Name:</label>\n" +
    "    <div class=\"col-sm-4\">\n" +
    "        <input ng-readonly=\"readonly\"\n" +
    "               ng-required=\"required\"\n" +
    "               ng-model=\"data.businessName\"\n" +
    "               class=\"form-control\"\n" +
    "               type=\"text\"\n" +
    "               name=\"businessName\">\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("contact/templates/directives/arcContactDetails.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/templates/directives/arcContactDetails.tpl.html",
    "<div class=\"form-group\">\n" +
    "    <label class=\"col-md-2 col-sm-2 control-label\">Contact Phone:</label>\n" +
    "    <div class=\"col-sm-4\">\n" +
    "        <input ng-readonly=\"readonly\"\n" +
    "               ng-required=\"required\"\n" +
    "               ng-model=\"data.phone\"\n" +
    "               class=\"form-control\"\n" +
    "               type=\"text\"\n" +
    "               name=\"phone\">\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"form-group\">\n" +
    "    <label class=\"col-md-2 col-sm-2 control-label\">Email:</label>\n" +
    "    <div class=\"col-sm-4\">\n" +
    "        <input ng-readonly=\"readonly\"\n" +
    "               ng-required=\"required\"\n" +
    "               ng-model=\"data.email\"\n" +
    "               class=\"form-control\"\n" +
    "               type=\"text\"\n" +
    "               name=\"email\">\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("contact/templates/directives/arcContactForm.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/templates/directives/arcContactForm.tpl.html",
    "<hr class=\"contact-form-spacer\">\n" +
    "<form class=\"form-horizontal row-border contact-form\" name=\"contactForm\" ng-submit=\"saveContactForm()\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n" +
    "            <div class=\"panel panel-default arc-panel\">\n" +
    "                <div class=\"panel-body\">\n" +
    "                    <arc-alert></arc-alert>\n" +
    "                    <arc-title></arc-title>\n" +
    "                    <arc-first-name fm-required=\"true\"></arc-first-name>\n" +
    "                    <arc-last-name fm-required=\"true\"></arc-last-name>\n" +
    "                    <arc-business-name fm-required=\"true\"></arc-business-name>\n" +
    "                    <arc-location fm-required=\"true\"></arc-location>\n" +
    "                    <arc-contact-details fm-required=\"true\"></arc-contact-details>\n" +
    "                    <arc-gst></arc-gst>\n" +
    "                    <arc-employees></arc-employees>\n" +
    "                    <span class=\"divider\"></span>\n" +
    "                    <arc-enquiry fm-required=\"true\"></arc-enquiry>\n" +
    "                    <span class=\"divider\"></span>\n" +
    "                    <h4>Please provide any other useful information.</h4>\n" +
    "                    <arc-web-site-details></arc-web-site-details>\n" +
    "                    <arc-social-details></arc-social-details>\n" +
    "                    <arc-retail-outlets></arc-retail-outlets>\n" +
    "\n" +
    "                    <button type=\"submit\" ng-disabled=\"isSaving\" value=\"{{isSaving ? 'Sending...' : 'Submit'}}\"\n" +
    "                            class=\"btn btn-default pull-right\">Submit\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</form>");
}]);

angular.module("contact/templates/directives/arcEmployees.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/templates/directives/arcEmployees.tpl.html",
    "<div class=\"form-group\">\n" +
    "    <label class=\"col-xs-10 col-sm-2 col-md-2 control-label\">Full-Time Employees:</label>\n" +
    "    <div class=\"col-xs-8 col-sm-4 col-md-3 col-lg-2\">\n" +
    "        <select ng-init=\"data.fullTimeEmployees = employeeOptions[0]\"\n" +
    "                ng-disabled=\"readonly\"\n" +
    "                ng-required=\"required\"\n" +
    "                ng-model=\"data.fullTimeEmployees\"\n" +
    "                name=\"fullTimeEmployees\"\n" +
    "                class=\"form-control\"\n" +
    "                ng-options=\"employee as employee for employee in employeeOptions\">\n" +
    "            <option></option>\n" +
    "        </select>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"form-group\">\n" +
    "    <label class=\"col-xs-10 col-sm-2 col-md-2 control-label\">Part-Time Employees:</label>\n" +
    "    <div class=\"col-xs-8 col-sm-4 col-md-3 col-lg-2\">\n" +
    "        <select ng-init=\"data.partTimeEmployees = employeeOptions[0]\"\n" +
    "                ng-disabled=\"readonly\"\n" +
    "                ng-required=\"required\"\n" +
    "                ng-model=\"data.partTimeEmployees\"\n" +
    "                name=\"partTimeEmployees\"\n" +
    "                class=\"form-control\"\n" +
    "                ng-options=\"employee as employee for employee in employeeOptions\">\n" +
    "            <option></option>\n" +
    "        </select>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("contact/templates/directives/arcEnquiry.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/templates/directives/arcEnquiry.tpl.html",
    "<div class=\"form-group\">\n" +
    "    <label class=\"col-md-2 col-lg-8\">Please tell us about your business and the challenges you are facing.</label>\n" +
    "    <div class=\"col-md-9 col-lg-offset-2\">\n" +
    "        <textarea ng-readonly=\"readonly\"\n" +
    "                  ng-required=\"required\"\n" +
    "                  ng-model=\"data.enquiry\"\n" +
    "                  class=\"form-control contact-textarea\"\n" +
    "                  type=\"text\"\n" +
    "                  name=\"enquiry\"></textarea>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("contact/templates/directives/arcFirstName.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/templates/directives/arcFirstName.tpl.html",
    "<div class=\"form-group\">\n" +
    "    <label class=\"col-md-2 col-sm-2 control-label\">First Name:</label>\n" +
    "    <div class=\"col-sm-4\">\n" +
    "        <input ng-readonly=\"readonly\"\n" +
    "               ng-required=\"required\"\n" +
    "               ng-model=\"data.firstName\"\n" +
    "               class=\"form-control\"\n" +
    "               type=\"text\"\n" +
    "               name=\"firstName\">\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("contact/templates/directives/arcGst.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/templates/directives/arcGst.tpl.html",
    "<div class=\"form-group\">\n" +
    "    <label class=\"col-md-2 col-xs-10 col-sm-2 control-label\">Is your business GST Registered:</label>\n" +
    "        <div class=\"col-xs-6 col-sm-2 col-md-1\">\n" +
    "            <select ng-init=\"data.gstRegistered = yesNoOptions[0]\"\n" +
    "                    ng-disabled=\"readonly\"\n" +
    "                    ng-required=\"required\"\n" +
    "                    ng-model=\"data.gstRegistered\"\n" +
    "                    name=\"gstRegistered\"\n" +
    "                    class=\"form-control\"\n" +
    "                    ng-options=\"yesNo as yesNo for yesNo in yesNoOptions\">\n" +
    "                <option></option>\n" +
    "            </select>\n" +
    "        </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("contact/templates/directives/arcLastName.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/templates/directives/arcLastName.tpl.html",
    "<div class=\"form-group\">\n" +
    "    <label class=\"col-md-2 col-sm-2 control-label\">Last Name:</label>\n" +
    "    <div class=\"col-sm-4\">\n" +
    "        <input ng-readonly=\"readonly\"\n" +
    "               ng-required=\"required\"\n" +
    "               ng-model=\"data.lastName\"\n" +
    "               class=\"form-control\"\n" +
    "               type=\"text\"\n" +
    "               name=\"lastName\">\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("contact/templates/directives/arcLocation.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/templates/directives/arcLocation.tpl.html",
    "<div class=\"form-group\">\n" +
    "    <label class=\"col-md-2 col-sm-2 control-label\">Location:</label>\n" +
    "    <div class=\"col-sm-4\">\n" +
    "        <input ng-readonly=\"readonly\"\n" +
    "               ng-required=\"required\"\n" +
    "               ng-model=\"data.location\"\n" +
    "               class=\"form-control\"\n" +
    "               type=\"text\"\n" +
    "               name=\"location\">\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"form-group\">\n" +
    "    <label class=\"col-xs-10 col-sm-2 col-md-2 control-label\">State:</label>\n" +
    "    <div class=\"col-xs-6 col-sm-2 col-md-2\">\n" +
    "        <select ng-init=\"data.state = stateOptions[0]\"\n" +
    "                ng-disabled=\"readonly\"\n" +
    "                ng-required=\"required\"\n" +
    "                ng-model=\"data.state\"\n" +
    "                name=\"state\"\n" +
    "                class=\"form-control\"\n" +
    "                ng-options=\"state as state for state in stateOptions\">\n" +
    "            <option></option>\n" +
    "        </select>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("contact/templates/directives/arcRetailOutlets.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/templates/directives/arcRetailOutlets.tpl.html",
    "<div class=\"form-group\">\n" +
    "    <label class=\"col-md-2 col-sm-8 col-lg-10\">Do you sell your products and services through anywhere else?</label>\n" +
    "    <div class=\"col-xs-8 col-sm-10 col-lg-offset-2\">\n" +
    "        <label class=\"checkbox-inline arc-checkbox-inline-first-item\">\n" +
    "            <input type=\"checkbox\"\n" +
    "                   id=\"sellsLocalMarkets\"\n" +
    "                   ng-readonly=\"readonly\"\n" +
    "                   ng-model=\"data.sellsLocalMarkets\">Local Markets\n" +
    "        </label>\n" +
    "\n" +
    "        <label class=\"checkbox-inline\">\n" +
    "            <input type=\"checkbox\"\n" +
    "                   id=\"sellsTradeFairs\"\n" +
    "                   ng-readonly=\"readonly\"\n" +
    "                   ng-model=\"data.sellsTradeFairs\">Trade Fairs\n" +
    "        </label>\n" +
    "\n" +
    "        <label class=\"checkbox-inline\">\n" +
    "            <input type=\"checkbox\"\n" +
    "                   id=\"sellsRetailSuppliers\"\n" +
    "                   ng-readonly=\"readonly\"\n" +
    "                   ng-model=\"data.sellsRetailSuppliers\">Retail Supplier\n" +
    "        </label>\n" +
    "\n" +
    "        <label class=\"checkbox-inline\">\n" +
    "            <input type=\"checkbox\"\n" +
    "                   id=\"hasAmazonStore\"\n" +
    "                   ng-readonly=\"readonly\"\n" +
    "                   ng-model=\"data.hasAmazonStore\">Amazon Store\n" +
    "        </label>\n" +
    "\n" +
    "        <label class=\"checkbox-inline\">\n" +
    "            <input type=\"checkbox\"\n" +
    "                   id=\"hasEbayStore\"\n" +
    "                   ng-readonly=\"readonly\"\n" +
    "                   ng-model=\"data.hasEbayStore\">eBay Store\n" +
    "        </label>\n" +
    "\n" +
    "        <label class=\"checkbox-inline\">\n" +
    "            <input type=\"checkbox\"\n" +
    "                   id=\"hasEtzyStore\"\n" +
    "                   ng-readonly=\"readonly\"\n" +
    "                   ng-model=\"data.hasEtzyStore\">Etzy Store\n" +
    "        </label>\n" +
    "\n" +
    "        <label class=\"checkbox-inline\">\n" +
    "            <input type=\"checkbox\"\n" +
    "                   id=\"sellsOnSocialPlatform\"\n" +
    "                   ng-readonly=\"readonly\"\n" +
    "                   ng-model=\"data.sellsOnSocialPlatform\">Sell through Social platform(s)\n" +
    "        </label>\n" +
    "\n" +
    "        <label class=\"checkbox-inline\">\n" +
    "            <input type=\"checkbox\"\n" +
    "                   id=\"sellsOtherChannels\"\n" +
    "                   ng-readonly=\"readonly\"\n" +
    "                   ng-model=\"data.sellsOtherChannels\">Others\n" +
    "        </label>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-show=\"data.sellsOtherChannels\" class=\"form-group\">\n" +
    "    <label class=\"col-md-2 control-label\">Please list any other sales and distribution channels</label>\n" +
    "    <div class=\"col-md-9\">\n" +
    "        <textarea ng-readonly=\"readonly\"\n" +
    "                  ng-required=\"required\"\n" +
    "                  ng-model=\"data.otherSalesChannels\"\n" +
    "                  class=\"form-control contact-textarea\"\n" +
    "                  type=\"text\"\n" +
    "                  name=\"otherSalesChannels\"></textarea>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("contact/templates/directives/arcSocialDetails.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/templates/directives/arcSocialDetails.tpl.html",
    "<div class=\"form-group\">\n" +
    "<label class=\"col-md-2 col-sm-8 col-lg-10\">Which Social platforms does your business use?</label>\n" +
    "    <div class=\"col-xs-6 col-sm-10 col-lg-offset-2\">\n" +
    "    <label class=\"checkbox-inline arc-checkbox-inline-first-item\">\n" +
    "        <input type=\"checkbox\"\n" +
    "               id=\"hasFacebook\"\n" +
    "               ng-readonly=\"readonly\"\n" +
    "               ng-model=\"data.hasFacebook\">Facebook\n" +
    "    </label>\n" +
    "    <label class=\"checkbox-inline\">\n" +
    "        <input type=\"checkbox\"\n" +
    "               id=\"hasTwitter\"\n" +
    "               ng-readonly=\"readonly\"\n" +
    "               ng-model=\"data.hasTwitter\">Twitter\n" +
    "    </label>\n" +
    "    <label class=\"checkbox-inline\">\n" +
    "        <input type=\"checkbox\"\n" +
    "               id=\"hasGooglePlus\"\n" +
    "               ng-readonly=\"readonly\"\n" +
    "               ng-model=\"data.hasGooglePlus\">Google+\n" +
    "    </label>\n" +
    "    <label class=\"checkbox-inline\">\n" +
    "        <input type=\"checkbox\"\n" +
    "               id=\"hasInstagram\"\n" +
    "               ng-readonly=\"readonly\"\n" +
    "               ng-model=\"data.hasInstagram\">Instagram\n" +
    "    </label>\n" +
    "    <label class=\"checkbox-inline\">\n" +
    "        <input type=\"checkbox\"\n" +
    "               id=\"hasPinterest\"\n" +
    "               ng-readonly=\"readonly\"\n" +
    "               ng-model=\"data.hasPinterest\">Pinterest\n" +
    "    </label>\n" +
    "    <label class=\"checkbox-inline\">\n" +
    "        <input type=\"checkbox\"\n" +
    "               id=\"hasLinkedIn\"\n" +
    "               ng-readonly=\"readonly\"\n" +
    "               ng-model=\"data.hasLinkedIn\">Linkedin\n" +
    "    </label>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("contact/templates/directives/arcTitle.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/templates/directives/arcTitle.tpl.html",
    "<div class=\"form-group\">\n" +
    "    <label class=\"col-xs-10 col-sm-2 col-md-2 control-label\">Title:</label>\n" +
    "    <div class=\"col-xs-6 col-sm-2 col-md-2\">\n" +
    "        <select ng-init=\"data.title = titleOptions[0]\"\n" +
    "                ng-disabled=\"readonly\"\n" +
    "                ng-required=\"required\"\n" +
    "                ng-model=\"data.title\"\n" +
    "                name=\"title\"\n" +
    "                class=\"form-control\"\n" +
    "                ng-options=\"title as title for title in titleOptions\">\n" +
    "            <option></option>\n" +
    "        </select>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("contact/templates/directives/arcWebSiteDetails.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/templates/directives/arcWebSiteDetails.tpl.html",
    "<div class=\"form-group\">\n" +
    "    <label class=\"col-md-2 col-sm-2 control-label\">Web Site URL:</label>\n" +
    "    <div class=\"col-sm-4\">\n" +
    "        <input ng-readonly=\"readonly\"\n" +
    "               ng-required=\"required\"\n" +
    "               ng-model=\"data.websiteUrl\"\n" +
    "               class=\"form-control\"\n" +
    "               type=\"text\"\n" +
    "               name=\"name\">\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"form-group\">\n" +
    "    <label class=\"col-md-2 col-sm-2 control-label\">Can you accept payments on your website?</label>\n" +
    "    <div class=\"col-xs-6 col-sm-2 col-md-1\"\">\n" +
    "        <select ng-init=\"data.hasCommerceWebSite = yesNoOptions[0]\"\n" +
    "                ng-disabled=\"readonly\"\n" +
    "                ng-required=\"required\"\n" +
    "                ng-model=\"data.hasCommerceWebSite\"\n" +
    "                name=\"hasCommerceWebSite\"\n" +
    "                class=\"form-control\"\n" +
    "                ng-options=\"yesNo as yesNo for yesNo in yesNoOptions\">\n" +
    "            <option></option>\n" +
    "        </select>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("contact/templates/directives/fmVersion.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/templates/directives/fmVersion.tpl.html",
    "<span ng-bind=\"versionNumber\"></span>");
}]);

angular.module("contact/templates/success.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/templates/success.tpl.html",
    "<a name=\"contact\"></a>\n" +
    "<!-- /.intro-header -->\n" +
    "<div class=\"intro-header\">\n" +
    "    <div class=\"container contact-container-top\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-12\">\n" +
    "                <div class=\"contact-intro\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <!-- /.container -->\n" +
    "</div>\n" +
    "\n" +
    "<!-- /.main-msg-container -->\n" +
    "\n" +
    "<div class=\"content-section-a\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-5 col-sm-6\">\n" +
    "                <hr class=\"section-heading-spacer\">\n" +
    "                <div class=\"clearfix\"></div>\n" +
    "                <h2 class=\"section-heading\">Thank You!</h2>\n" +
    "                <p class=\"lead\">\n" +
    "                    Congratulations on taking the first step to joining Arconomy. We will contact you within the next\n" +
    "                    few days.</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-5 col-lg-offset-2 col-sm-6\">\n" +
    "                <img class=\"img-responsive\" src=\"assets/images/success.png\" alt=\"\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- /.container -->\n" +
    "</div>\n" +
    "<!-- /.content-section-a -->\n" +
    "\n" +
    "<arc-footer></arc-footer>\n" +
    "\n" +
    "");
}]);

angular.module("home/templates/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/templates/home.tpl.html",
    "<!-- /.intro-header Section -->\n" +
    "<div class=\"intro-header\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-12\">\n" +
    "                <div class=\"intro-message\">\n" +
    "                    <h3>Every business has a story...</h3>\n" +
    "                    <hr class=\"intro-divider\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <!-- /.container -->\n" +
    "</div>\n" +
    "\n" +
    "<!-- Page Content -->\n" +
    "<div class=\"content-section-a\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-5 col-sm-6\">\n" +
    "                <hr class=\"section-heading-spacer\">\n" +
    "                <div class=\"clearfix\"></div>\n" +
    "                <h2 class=\"section-heading\">Our Mission:</h2>\n" +
    "                <p class=\"lead\">\n" +
    "                    Have you noticed that the same global brands fill your inbox, your social feeds, your internet search results and your high streets?\n" +
    "                    <br>\n" +
    "                    <br>\n" +
    "                    Our aim is to put local businesses back on the high street and on an even playing field with the retail giants online.\n" +
    "                    <br>\n" +
    "                    <br>\n" +
    "                    Arconomy provides a fully managed digital platform together with shared premium retail spaces so that you can focus on creating\n" +
    "                    great products and services for your customers. <br>\n" +
    "                    <br>\n" +
    "            </p>\n" +
    "            </div>\n" +
    "            <div class=\"img-top-margin col-lg-5 col-lg-offset-2 col-sm-6\">\n" +
    "                <img class=\"img-responsive\" src=\"assets/images/arc-you-make.png\" alt=\"\">\n" +
    "                <H4 class=\"text-center\">Focus on your products</H4>\n" +
    "                <hr class=\"img-heading-spacer\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- /.container -->\n" +
    "</div>\n" +
    "<!-- /.content-section-a -->\n" +
    "\n" +
    "<div class=\"content-section-b\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6\">\n" +
    "                <hr class=\"section-heading-spacer\">\n" +
    "                <div class=\"clearfix\"></div>\n" +
    "                <h2 class=\"section-heading\">Business Owners:</h2>\n" +
    "                <p class=\"lead\">Are you a business owner struggling to grow your business? Are you spending too much of your time managing your website,\n" +
    "                    running marketing campaigns and attending events that were not worth the fee?\n" +
    "                    <br>\n" +
    "                    <br>\n" +
    "                    Would you like to spend more time on creating your products and services\n" +
    "                    and discussing new ideas with your customers?\n" +
    "                    <br>\n" +
    "                    <br>\n" +
    "                    Do you dream of having your own store but are constrained to local markets and trade fairs as the only way of meeting new customers face to face.<br>\n" +
    "                    <br>\n" +
    "                    <a ui-sref=\"contact\">Contact us</a> to understand how you can become a member of a store on the high street at a cost and flexibility that suits you.</p>\n" +
    "            </div>\n" +
    "            <div class=\"img-top-margin col-lg-5 col-sm-pull-6  col-sm-6\">\n" +
    "                <img class=\"img-responsive\" src=\"assets/images/arc-customers.png\" alt=\"\">\n" +
    "                <H4 class=\"text-center\">Engage with your customers</H4>\n" +
    "                <hr class=\"img-heading-spacer\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <!-- /.container -->\n" +
    "</div>\n" +
    "<!-- /.content-section-b -->\n" +
    "\n" +
    "<div class=\"content-section-a\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-5 col-sm-6\">\n" +
    "                <hr class=\"section-heading-spacer\">\n" +
    "                <div class=\"clearfix\"></div>\n" +
    "                <h2 class=\"section-heading\">Commerce Everywhere:</h2>\n" +
    "                <p class=\"lead\">Retail Businesses compete for customers in more ways than ever before. There are\n" +
    "                    transactional websites, mobile applications, social commerce and traditional bricks and mortar stores.\n" +
    "                    <br>\n" +
    "                    <br>\n" +
    "                    Despite technology increasing the number of ways to make a purchase,\n" +
    "                    over 90% of retail transactions are still made face to face in a physical store.\n" +
    "                    <br>\n" +
    "                    <br>\n" +
    "                    Digital platforms today create a big part of the shopping experience for a customer but\n" +
    "                    without a store to visit online only businesses will miss out on the majority of sales.\n" +
    "                    <br>\n" +
    "                    <br>\n" +
    "                    We provide a seamless digital and in store shopping experience leveraging cutting edge retail technology\n" +
    "                    so your customers receive a personalised, high quality shopping experience that matches your high quality products and services.\n" +
    "                </p>\n" +
    "            </div>\n" +
    "            <div class=\"img-top-margin col-lg-5 col-lg-offset-2 col-sm-6\">\n" +
    "                <img class=\"img-responsive\" src=\"assets/images/arc-shop.png\" alt=\"\">\n" +
    "                <H4 class=\"text-center\">Retail technology</H4>\n" +
    "                <hr class=\"img-heading-spacer\">\n" +
    "                <img class=\"img-responsive\" src=\"assets/images/arc-store.png\" alt=\"\">\n" +
    "                <H4 class=\"text-center\">Premium store locations</H4>\n" +
    "                <hr class=\"img-heading-spacer\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <!-- /.container -->\n" +
    "</div>\n" +
    "<!-- /.content-section-a -->\n" +
    "<div class=\"content-section-b\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6\">\n" +
    "                <hr class=\"section-heading-spacer\">\n" +
    "                <div class=\"clearfix\"></div>\n" +
    "                <h2 class=\"section-heading\">Creating a brand:</h2>\n" +
    "                <p class=\"lead\">Having a great vision for your brand and products is only as good as the creative\n" +
    "                    production that designs the final media and branded collateral. We understand that working with design agencies can be expensive and challenging to manage.\n" +
    "                    <br>\n" +
    "                    <br>\n" +
    "                    We recognise that Business owners are passionate about their brand and want to be involved in the creative process. We offer solutions to help\n" +
    "                    you build your brand and produce quality content. Our aim is to support you on your journey, providing advice and expertise as required or simply\n" +
    "                    getting the job done as part of your virtual team.\n" +
    "                    <br>\n" +
    "                    <br>\n" +
    "                    As part of the Arconomy family you will have access to a creative team that can support you bringing\n" +
    "                    your vision to life.\n" +
    "                </p>\n" +
    "            </div>\n" +
    "            <div class=\"img-top-margin col-lg-5 col-sm-pull-6  col-sm-6\">\n" +
    "                <img class=\"img-responsive\" src=\"assets/images/arc-creative.png\" alt=\"\">\n" +
    "                <H4 class=\"text-center\">Creative, Brand and Marketing Support</H4>\n" +
    "                <hr class=\"img-heading-spacer\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <!-- /.container -->\n" +
    "</div>\n" +
    "<!-- /.content-section-b -->\n" +
    "\n" +
    "<div class=\"content-section-a\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-5 col-sm-6\">\n" +
    "                <hr class=\"section-heading-spacer\">\n" +
    "                <div class=\"clearfix\"></div>\n" +
    "                <h2 class=\"section-heading\">Why join us:</h2>\n" +
    "                <p class=\"lead\">\n" +
    "                    There are many reasons why small businesses join the Arconomy family.<br>\n" +
    "                </p>\n" +
    "                <ul>\n" +
    "                    <li>Sell your products and services using world class eCommerce site</li>\n" +
    "                    <li>Sell your products and services in a premium retail space</li>\n" +
    "                    <li>Gain access to technology, marketing and business consulting expertise</li>\n" +
    "                    <li>Become part of a dynamic small business network</li>\n" +
    "                    <li>Focus externally on your customers rather than internally on your business processes</li>\n" +
    "                    <li>Spend more time innovating and creating personalised products and services your customers love</li>\n" +
    "                    <li>Share the cost and time overheads of a operating a professional retail space\n" +
    "                    <li>Remove the challenges of developing and maintaining a competitive website on your own</li>\n" +
    "                    <li>Benefit from shared marketing efforts attracting new customers both online and to your retail store</li>\n" +
    "                    <li>Provide your customers a shopping experience that is as high quality as your products and services</li>\n" +
    "                    <li>Connect and collaborate creatively with other small businesses</li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            <div class=\"img-top-margin col-lg-5 col-lg-offset-2 col-sm-6\">\n" +
    "                <img class=\"img-responsive\" src=\"assets/images/arc-payment.png\" alt=\"\">\n" +
    "                <H4 class=\"text-center\">Payment technology</H4>\n" +
    "                <hr class=\"img-heading-spacer\">\n" +
    "                <img class=\"img-responsive\" src=\"assets/images/arc-deliver.png\" alt=\"\">\n" +
    "                <H4 class=\"text-center\">Delivery services</H4>\n" +
    "                <hr class=\"img-heading-spacer\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- /.container -->\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"content-section-b\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6\">\n" +
    "                <hr class=\"section-heading-spacer\">\n" +
    "                <div class=\"clearfix\"></div>\n" +
    "                <h2 class=\"section-heading\">Logistics:</h2>\n" +
    "                <p class=\"lead\">\n" +
    "                Providing better options to your customers to be able to collect their orders has become a battleground that ultimately\n" +
    "                    drones are going to win.\n" +
    "                    <br>\n" +
    "                    <br>\n" +
    "                    In the meantime as part of a network of small businesses you will be able to offer convenient pick up locations\n" +
    "                        throughout your local area through your Arconomy business network as well as the Store network. To find out more <a ui-sref=\"contact\">get in touch here.</a></p>\n" +
    "            </div>\n" +
    "            <div class=\"img-top-margin col-lg-5 col-sm-pull-6  col-sm-6\">\n" +
    "                <img class=\"img-responsive\" src=\"assets/images/arc-ship.png\" alt=\"\">\n" +
    "                <H4 class=\"text-center\">Fulfil orders from anywhere</H4>\n" +
    "                <hr class=\"img-heading-spacer\">\n" +
    "                <img class=\"img-responsive\" src=\"assets/images/arc-collect.png\" alt=\"\">\n" +
    "                <H4 class=\"text-center\">Convenient local pick up locations</H4>\n" +
    "                <hr class=\"img-heading-spacer\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <!-- /.container -->\n" +
    "</div>\n" +
    "<!-- /.content-section-b -->\n" +
    "\n" +
    "<arc-footer></arc-footer>\n" +
    "");
}]);
