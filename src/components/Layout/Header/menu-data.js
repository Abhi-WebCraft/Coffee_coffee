const menu_data = [

    {
        has_dropdown: true,
        title: "Company",
        link: "#",
        dropdownDetails: {
            title: "Company ",
            description: "Explore more about our company and values:",
            readMoreLink: "/company/about-us",
        },
        sub_menus: [
            { link: "/company/about-us", title: "About Us", icon: "/images/sub-menu-icon/accounts.svg" },
            { link: "/company/transition-process", title: "Transition Process", icon: "/images/sub-menu-icon/mortarboard-1.svg" },
            { link: "/company/engagement-models", title: "Engagement Models", icon: "/images/sub-menu-icon/delivery-truck.svg" },
            { link: "/company/secure-data-transfer-and-storage", title: "Data Transfer & Storage", icon: "/images/sub-menu-icon/investment.svg" },
            { link: "/blog", title: "Blog", icon: "/images/sub-menu-icon/checkout.svg" },
        ],
    },

    {
        has_dropdown: true,
        title: "Data Entry",
        link: "/data-entry-services",
        dropdownDetails: {
            title: "Data Entry ",
            description: "Explore more about our company and values:",
            readMoreLink: "/data-entry-services",
        },
        sub_menus: [
            { link: "/document-data-entry-services", title: "Document Data Entry", icon: "/images/sub-menu-icon/contract.svg", },
            { link: "/mortgage-data-entry-services", title: "Mortgage Data Entry", icon: "/images/sub-menu-icon/discount.svg", },
            { link: "/real-estate-data-collection-services", title: "Real Estate Data Collection", icon: "/images/sub-menu-icon/apartment-1.svg", },
            { link: "/image-data-entry-services", title: "Image Data Entry", icon: "/images/sub-menu-icon/image-1.svg", },
            { link: "/outsourcing-typing-services", title: "Typing Services", icon: "/images/sub-menu-icon/keyboard.svg", },
        ],
    },
    {
        has_dropdown: true,
        title: "Data Processing",
        link: "/data-processing-services",
        dropdownDetails: {
            title: "Data Processing ",
            description: "Explore more about our company and values:",
            readMoreLink: "/data-processing-services",
        },
        sub_menus: [
            { link: "/invoice-processing-services", title: "Invoice Processing", icon: "/images/sub-menu-icon/invoice-1.svg" },
            { link: "/outsource-freight-audit-services", title: "Freight Audit", icon: "/images/sub-menu-icon/transportation.svg" },
            { link: "/resume-formatting-and-processing-services", title: "Resume Processing", icon: "/images/sub-menu-icon/cv.svg" },
            { link: "/data-cleansing-and-enhancement-services", title: "Data Cleansing", icon: "/images/sub-menu-icon/data-cleaning-1.svg" },
            { link: "/survey-and-forms-processing-services", title: "Survey Forms Processing", icon: "/images/sub-menu-icon/online-survey.svg" },
        ],
    },
    {
        has_dropdown: true,
        title: "Data Management",
        link: "/data-management-services",
        dropdownDetails: {
            title: "Data Management ",
            description: "Explore more about our company and values:",
            readMoreLink: "/data-management-services",
        },
        sub_menus: [
            { link: "/outsource-catalog-management", title: "Catalog Management", icon: "/images/sub-menu-icon/catalog-1.svg" },
            { link: "/data-collection-services", title: "Data Collection", icon: "/images/sub-menu-icon/data-collection-1.svg" },
            { link: "/web-research-services", title: "Web Research", icon: "/images/sub-menu-icon/web.svg" },
            { link: "/web-scraping-services", title: "Web Scraping", icon: "/images/sub-menu-icon/security-1.svg" },
            { link: "/virtual-assistant-services", title: "Virtual Assistants", icon: "/images/sub-menu-icon/virtual-assistant-1.svg" }
        ],
    },
    {
        has_dropdown: true,
        title: "Industries",
        link: "#",
        dropdownDetails: {
            title: "Industries ",
            description: "Explore more about our company and values:",
            readMoreLink: "#",
        },
        sub_menus: [
            { link: "/accounting-and-finance-back-office-solutions", title: "Accounting & Finance", icon: "/images/sub-menu-icon/accounts.svg" },
            { link: "/educational-institutions-back-office-solutions", title: "Educational Institutions", icon: "/images/sub-menu-icon/mortarboard-1.svg" },
            { link: "/logistics-and-shipping-back-office-solutions", title: "Logistics & Shipping", icon: "/images/sub-menu-icon/delivery-truck.svg" },
            { link: "/real-estate-and-mortgage-back-office-solutions", title: "Real Estate & Mortgage", icon: "/images/sub-menu-icon/investment.svg" },
            { link: "/retail-and-ecommerce-back-office-solutions", title: "Retail & e-Commerce", icon: "/images/sub-menu-icon/checkout.svg" },
            { link: "/restaurant-and-hospitality-back-office-solutions", title: "Restaurant & Hospitality", icon: "/images/sub-menu-icon/food-tray.svg" },
        ],
    },

    {
        has_dropdown: true,
        title: "Case Studies",
        link: "/case-studies",
    },

];

export default menu_data;