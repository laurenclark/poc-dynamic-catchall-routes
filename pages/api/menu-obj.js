export default function handler(req, res) {
    res.status(200).json([
        {
            id: "149",
            code: "M2_DASHBOARD",
            name: "Home",
            parent_id: null,
            canvas_id: null,
            can_code: null,
            sub_form_code: null,
            icon_id: null,
            url: "dashboard",
            display_type: null,
            header: null,
            from_main_menu: "Y",
            action_type: "goto",
            attributes: {
                icon: "fas fa-home"
            }
        },
        {
            id: "150",
            code: "M2_MEM_CONT",
            name: "Membership / Contacts",
            parent_id: null,
            canvas_id: null,
            can_code: null,
            sub_form_code: null,
            icon_id: null,
            url: "membership-contact",
            display_type: null,
            header: null,
            from_main_menu: "Y",
            action_type: "goto",
            attributes: {
                icon: "fas fa-user-friends",
                breadcrumb_title: "Membership - Contacts"
            },
            children: [
                {
                    id: "151",
                    code: "M2_MEM_CONT_MEM",
                    name: "Membership",
                    parent_id: "150",
                    canvas_id: "155556",
                    can_code: "MTL_CONT_FOR_MB100",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "membership",
                    display_type: "PAGE",
                    header: "Members",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-user-check"
                    }
                },
                {
                    id: "152",
                    code: "M2_MEM_CONT_CONT",
                    name: "Contacts",
                    parent_id: "150",
                    canvas_id: "155559",
                    can_code: "MTL_CONT_FOR_CT100",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "contacts",
                    display_type: "PAGE",
                    header: "Contacts",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-user-tag"
                    }
                },
                {
                    id: "153",
                    code: "M2_MEM_CONT_CM",
                    name: "Committees",
                    parent_id: "150",
                    canvas_id: null,
                    can_code: null,
                    sub_form_code: null,
                    icon_id: null,
                    url: "committees",
                    display_type: null,
                    header: null,
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-users"
                    },
                    children: [
                        {
                            id: "154",
                            code: "M2_MEM_CONT_CM_CD",
                            name: "Committee Codes",
                            parent_id: "153",
                            canvas_id: "130980",
                            can_code: "MB445_CONTAINER",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "committee-codes",
                            display_type: "PORTLET",
                            header: "{name} ({committee_code})",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fas fa-user-check"
                            }
                        },
                        {
                            id: "155",
                            code: "M2_MEM_CONT_CM_FD",
                            name: "Forum Codes",
                            parent_id: "153",
                            canvas_id: "155574",
                            can_code: "MB455_CONTAINER",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "forum-codes",
                            display_type: "PAGE",
                            header: "Committee Codes",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fas fa-user-check"
                            }
                        }
                    ]
                },
                {
                    id: "171",
                    code: "M2_MEM_CONT_STAF",
                    name: "Staff",
                    parent_id: "150",
                    canvas_id: "155565",
                    can_code: "MTL_CONT_FOR_CT110",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "staff",
                    display_type: "PAGE",
                    header: "Staff",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-user-check"
                    }
                },
                {
                    id: "172",
                    code: "M2_MEM_CONT_WEB_APP_FORM",
                    name: "Web Application Form",
                    parent_id: "150",
                    canvas_id: "155568",
                    can_code: "MTL_CONT_FOR_AP01_WEB",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "web-application-form",
                    display_type: "PAGE",
                    header: "Web Application Form",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-user-check"
                    }
                },
                {
                    id: "173",
                    code: "M2_MEM_CONT_PEND_APP",
                    name: "Pending Applications",
                    parent_id: "150",
                    canvas_id: "133661",
                    can_code: "MP140_CONTAINER",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "pending-application",
                    display_type: "PORTLET",
                    header: "Pending Applications",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-user-check"
                    }
                },
                {
                    id: "383",
                    code: "M2_MEM_CONT_ADD_NEW_MEM",
                    name: "Add New Member",
                    parent_id: "150",
                    canvas_id: null,
                    can_code: null,
                    sub_form_code: null,
                    icon_id: null,
                    url: null,
                    display_type: null,
                    header: null,
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-briefcase"
                    }
                }
            ]
        },
        {
            id: "164",
            code: "M2_ORGANISATION",
            name: "Organisation",
            parent_id: null,
            canvas_id: null,
            can_code: null,
            sub_form_code: null,
            icon_id: null,
            url: null,
            display_type: null,
            header: null,
            from_main_menu: "Y",
            action_type: "goto",
            attributes: {
                icon: "fas fa-building"
            },
            children: [
                {
                    id: "727",
                    code: "M2_ORGANISATION_MB520",
                    name: "Branches",
                    parent_id: "164",
                    canvas_id: "155562",
                    can_code: "MTL_CONT_FOR_MB520",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "branches",
                    display_type: "PAGE",
                    header: "Branches",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-building"
                    }
                },
                {
                    id: "219",
                    code: "M2_ORGANISATION_HOLD_COMP",
                    name: "Holding Company",
                    parent_id: "164",
                    canvas_id: "156208",
                    can_code: "MTL_CONT_FOR_MB597",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "holding-company",
                    display_type: "PAGE",
                    header: "Holding Company",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-building"
                    }
                },
                {
                    id: "220",
                    code: "M2_ORGANISATION_NATIONAL_OFFICE",
                    name: "National Office",
                    parent_id: "164",
                    canvas_id: "156211",
                    can_code: "MTL_CONT_FOR_MB580",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "national-office",
                    display_type: "PAGE",
                    header: "National Office",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-building"
                    }
                },
                {
                    id: "221",
                    code: "M2_ORGANISATION_DIVISIONS",
                    name: "Divisions",
                    parent_id: "164",
                    canvas_id: "156214",
                    can_code: "MTL_CONT_FOR_MB510",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "division",
                    display_type: "PAGE",
                    header: "Divisions",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-building"
                    }
                },
                {
                    id: "222",
                    code: "M2_ORGANISATION_DISTRICT_OFFICE",
                    name: "District Offices",
                    parent_id: "164",
                    canvas_id: "156217",
                    can_code: "MTL_CONT_FOR_MB570",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "district-offices",
                    display_type: "PAGE",
                    header: "District Offices",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-building"
                    }
                },
                {
                    id: "223",
                    code: "M2_ORGANISATION_FEDERATION",
                    name: "Federations",
                    parent_id: "164",
                    canvas_id: "156220",
                    can_code: "MTL_CONT_FOR_MB525",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "federations",
                    display_type: "PAGE",
                    header: "Federations",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-building"
                    }
                },
                {
                    id: "224",
                    code: "M2_ORGANISATION_EMPLOYERS",
                    name: "Employers",
                    parent_id: "164",
                    canvas_id: "156223",
                    can_code: "MTL_CONT_FOR_MB560",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "employers",
                    display_type: "PAGE",
                    header: "Employers",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-building"
                    }
                },
                {
                    id: "728",
                    code: "M2_ORGANISATION_PAYSOURCES",
                    name: "Paysources",
                    parent_id: "164",
                    canvas_id: "155581",
                    can_code: "MTL_CONT_FOR_MB550",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "paysources",
                    display_type: "PAGE",
                    header: "Paysources",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-building"
                    }
                },
                {
                    id: "227",
                    code: "M2_ORGANISATION_WORKPLACES",
                    name: "Workplaces",
                    parent_id: "164",
                    canvas_id: "156226",
                    can_code: "MTL_CONT_FOR_MB540",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "workplaces",
                    display_type: "PAGE",
                    header: "Workplaces",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-building"
                    }
                },
                {
                    id: "228",
                    code: "M2_ORGANISATION_CONTACT_ORG",
                    name: "Contact Organisations",
                    parent_id: "164",
                    canvas_id: "156229",
                    can_code: "MTL_CONT_FOR_MB208",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "contact-org",
                    display_type: "PAGE",
                    header: "Contact Organisations",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-building"
                    }
                },
                {
                    id: "229",
                    code: "M2_ORGANISATION_HOTELS",
                    name: "Hotels",
                    parent_id: "164",
                    canvas_id: "156232",
                    can_code: "MTL_CONT_FOR_MB211",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "hotels",
                    display_type: "PAGE",
                    header: "Hotels",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-building"
                    }
                },
                {
                    id: "231",
                    code: "M2_ORGANISATION_VENUES",
                    name: "Venues",
                    parent_id: "164",
                    canvas_id: "156235",
                    can_code: "MTL_CONT_FOR_CB216",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "venues",
                    display_type: "PAGE",
                    header: "Venues",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-building"
                    }
                }
            ]
        },
        {
            id: "176",
            code: "M2_ELECTED_POS",
            name: "Elected Positions",
            parent_id: null,
            canvas_id: null,
            can_code: null,
            sub_form_code: null,
            icon_id: null,
            url: "elected-position",
            display_type: null,
            header: null,
            from_main_menu: "Y",
            action_type: "goto",
            attributes: {
                icon: "fas fa-user-check"
            },
            children: [
                {
                    id: "177",
                    code: "M2_ELECTED_POS_DETAIL_SETUP",
                    name: "Position Details Setup",
                    parent_id: "176",
                    canvas_id: "146285",
                    can_code: "MTL_CONT_FOR_PD001",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "position-details-setup",
                    display_type: "PAGE",
                    header: "Position Details Setup",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-user-check"
                    }
                },
                {
                    id: "179",
                    code: "M2_ELECTED_ELECT_MEM_ACT100",
                    name: "Elected Member",
                    parent_id: "176",
                    canvas_id: "155621",
                    can_code: "MTL_CONT_FOR_ACT100",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "elected-member",
                    display_type: "PAGE",
                    header: "Elected Member",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-user-check"
                    }
                }
            ]
        },
        {
            id: "180",
            code: "M2_SUBSCRIPTIONS",
            name: "Subscriptions",
            parent_id: null,
            canvas_id: null,
            can_code: null,
            sub_form_code: null,
            icon_id: null,
            url: null,
            display_type: null,
            header: null,
            from_main_menu: "Y",
            action_type: "goto",
            attributes: {
                icon: "fas fa-user-check"
            },
            children: [
                {
                    id: "181",
                    code: "M2_SUBS_DEDUCT_AT_SOURCE",
                    name: "Deduction at Source",
                    parent_id: "180",
                    canvas_id: null,
                    can_code: null,
                    sub_form_code: null,
                    icon_id: null,
                    url: null,
                    display_type: null,
                    header: null,
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-user-check"
                    },
                    children: [
                        {
                            id: "183",
                            code: "M2_SUBS_MANUAL_PROCESS",
                            name: "Manual Processing",
                            parent_id: "181",
                            canvas_id: "155577",
                            can_code: "MTL_CONT_FOR_DS001",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "manual-processing",
                            display_type: "PAGE",
                            header: "Manual Processing",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fas fa-user-check"
                            }
                        },
                        {
                            id: "184",
                            code: "M2_SUBS_FILE_PROCESS",
                            name: "File Processing",
                            parent_id: "181",
                            canvas_id: "155578",
                            can_code: "MTL_CONT_FOR_DS004",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "file-processing",
                            display_type: "PAGE",
                            header: "File Processing",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fas fa-user-check"
                            }
                        },
                        {
                            id: "185",
                            code: "M2_SUBS_PAYSOURCES",
                            name: "Paysources",
                            parent_id: "181",
                            canvas_id: "155581",
                            can_code: "MTL_CONT_FOR_MB550",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "paysources",
                            display_type: "PAGE",
                            header: "Paysources",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fas fa-user-check"
                            }
                        },
                        {
                            id: "186",
                            code: "M2_SUBS_DAS_TRANSLATIONS",
                            name: "Das Translations",
                            parent_id: "181",
                            canvas_id: "155584",
                            can_code: "MTL_CONT_FOR_DTR001",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "das-translation",
                            display_type: "PAGE",
                            header: "Das Translations",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fas fa-user-check"
                            }
                        },
                        {
                            id: "187",
                            code: "M2_SUBS_DISK_LAYOUTS",
                            name: "Disk Layouts",
                            parent_id: "181",
                            canvas_id: "155587",
                            can_code: "MTL_CONT_FOR_MB555",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "disk-layouts",
                            display_type: "PAGE",
                            header: "Disk Layouts",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fas fa-user-check"
                            }
                        },
                        {
                            id: "202",
                            code: "M2_SUBS_DISK_LAYOUT",
                            name: "Disk Layout",
                            parent_id: "181",
                            canvas_id: "155590",
                            can_code: "MTL_CONT_FOR_MB555_MASTER",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "disk-layout",
                            display_type: "PAGE",
                            header: "Disk Layout",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fas fa-user-check"
                            }
                        }
                    ]
                },
                {
                    id: "188",
                    code: "M2_SUBS_DIRECT_DEBIT",
                    name: "Direct Debit",
                    parent_id: "180",
                    canvas_id: null,
                    can_code: null,
                    sub_form_code: null,
                    icon_id: null,
                    url: null,
                    display_type: null,
                    header: null,
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-user-check"
                    },
                    children: [
                        {
                            id: "189",
                            code: "M2_SUBS_MEM_BANK_DET",
                            name: "Members Bank Details",
                            parent_id: "188",
                            canvas_id: "155593",
                            can_code: "MTL_CONT_FOR_DD840",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "member-bank-details",
                            display_type: "PAGE",
                            header: "Members Bank Details",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fas fa-user-check"
                            }
                        },
                        {
                            id: "190",
                            code: "M2_SUBS_NEW_MANDATES",
                            name: "New Mandates (AUDDIS)",
                            parent_id: "188",
                            canvas_id: "126408",
                            can_code: "DD870_CONTAINER",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "new-mandates",
                            display_type: "PAGE",
                            header: "AUDDIS New Mandates(DD870)",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fas fa-user-check"
                            }
                        },
                        {
                            id: "191",
                            code: "M2_SUBS_BACS_FILE",
                            name: "Bacs Files",
                            parent_id: "188",
                            canvas_id: "155596",
                            can_code: "MTL_CONT_FOR_DD874",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "bacs-file",
                            display_type: "PAGE",
                            header: "Bacs File",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fas fa-user-check"
                            }
                        },
                        {
                            id: "192",
                            code: "M2_SUBS_BACS_PROCESSING",
                            name: "BACS Processing",
                            parent_id: "188",
                            canvas_id: "155597",
                            can_code: "MTL_CONT_FOR_DAB103",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "bacs-proccessing",
                            display_type: "PAGE",
                            header: "BACS Processing",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fas fa-user-check"
                            }
                        },
                        {
                            id: "193",
                            code: "M2_SUBS_ARUDDS_PROCESSING",
                            name: "ARUDDS/ADDACS Processing",
                            parent_id: "188",
                            canvas_id: "126493",
                            can_code: "DD860_CONTAINER",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "arudss-proccessing",
                            display_type: "PAGE",
                            header: "ARUDDS/ADDACS Processing(DD860)",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fas fa-user-check"
                            }
                        },
                        {
                            id: "194",
                            code: "M2_SUBS_CREDIT_TRANSFER",
                            name: "Credit Transfer",
                            parent_id: "188",
                            canvas_id: "155598",
                            can_code: "MTL_CONT_FOR_DD200",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "credit-transfer",
                            display_type: "PAGE",
                            header: "Credit Transfer",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fas fa-user-check"
                            }
                        },
                        {
                            id: "195",
                            code: "M2_SUBS_LETTER_PRODUCTION",
                            name: "Letter Production",
                            parent_id: "188",
                            canvas_id: "126488",
                            can_code: "DD105_CONTAINER",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "letter-production",
                            display_type: "PAGE",
                            header: "DD Letter Production(DD105)",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fas fa-user-check"
                            }
                        },
                        {
                            id: "196",
                            code: "M2_SUBS_DD_MAINTAINCE",
                            name: "DD Maintenance",
                            parent_id: "188",
                            canvas_id: null,
                            can_code: null,
                            sub_form_code: null,
                            icon_id: null,
                            url: null,
                            actions_xml: null,
                            display_type: null,
                            header: null,
                            from_main_menu: "Y",
                            action_type: "goto"
                        },
                        {
                            id: "197",
                            code: "M2_SUBS_BANK_DEBIT_CYCLES",
                            name: "Bank Debit Cycles",
                            parent_id: "188",
                            canvas_id: "155601",
                            can_code: "MTL_CONT_FOR_DD100",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "bank-debit-cycles",
                            display_type: "PAGE",
                            header: "Bank Debit Cycles",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fas fa-user-check"
                            }
                        }
                    ]
                },
                {
                    id: "200",
                    code: "M2_SUBS_GIFT_AID",
                    name: "Gift Aid",
                    parent_id: "180",
                    canvas_id: null,
                    can_code: null,
                    sub_form_code: null,
                    icon_id: null,
                    url: null,
                    display_type: null,
                    header: null,
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-user-check"
                    },
                    children: [
                        {
                            id: "201",
                            code: "M2_SUBS_TAX_RE_CLAIMS",
                            name: "Tax Reclaim",
                            parent_id: "200",
                            canvas_id: "155604",
                            can_code: "MTL_CONT_FOR_TC001",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "tax-reclaim",
                            display_type: "PAGE",
                            header: "Tax Reclaim",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fas fa-user-check"
                            }
                        }
                    ]
                },
                {
                    id: "203",
                    code: "M2_SUBS_RECEIPTING",
                    name: "Receipting",
                    parent_id: "180",
                    canvas_id: null,
                    can_code: null,
                    sub_form_code: null,
                    icon_id: null,
                    url: null,
                    display_type: null,
                    header: null,
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-user-check"
                    },
                    children: [
                        {
                            id: "207",
                            code: "M2_SUBS_MAKING_PAYMENT",
                            name: "Making Payment",
                            parent_id: "203",
                            canvas_id: "155607",
                            can_code: "MTL_CONT_FOR_SB601",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "making-payment",
                            display_type: "PAGE",
                            header: "Making Payment",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fas fa-user-check"
                            }
                        },
                        {
                            id: "208",
                            code: "M2_SUBS_ALLOCATION_TO_UNALLOC",
                            name: "Allocation to Unallocated",
                            parent_id: "203",
                            canvas_id: "155608",
                            can_code: "MTL_CONT_FOR_SB602",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "allocation-to-unallocated",
                            display_type: "PAGE",
                            header: "Allocation to Unallocated",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fas fa-user-check"
                            }
                        },
                        {
                            id: "209",
                            code: "M2_SUBS_BATCH_CONTROL",
                            name: "Batch Control",
                            parent_id: "203",
                            canvas_id: "155611",
                            can_code: "MTL_CONT_FOR_BT000",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "subs-batch-control",
                            display_type: "PAGE",
                            header: "Batch Control",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fas fa-user-check"
                            }
                        },
                        {
                            id: "210",
                            code: "M2_SUBS_RECEIPTING_SEARCH",
                            name: "Receipting Search",
                            parent_id: "203",
                            canvas_id: "155614",
                            can_code: "MTL_CONT_FOR_SB610",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "receipting-search",
                            display_type: "PAGE",
                            header: "Receipting Search",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fas fa-user-check"
                            }
                        }
                    ]
                },
                {
                    id: "212",
                    code: "M2_SUBS_MEM_LEDGER_AMEND",
                    name: "Member Ledger Amend",
                    parent_id: "180",
                    canvas_id: "133783",
                    can_code: "IN420_CONTAINER",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "member-ledger-amend",
                    display_type: "PORTLET",
                    header: "Ledger Adjustments (IN420)",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-user-check"
                    }
                },
                {
                    id: "213",
                    code: "M2_SUBS_MEMBERS_LAPSING",
                    name: "Members Lapsing",
                    parent_id: "180",
                    canvas_id: "128201",
                    can_code: "IN550_CONTAINER",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "members-lapsing",
                    display_type: "PAGE",
                    header: "Member Lapsing(IN550)",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-user-check"
                    }
                },
                {
                    id: "214",
                    code: "M2_SUBS_PAYMENT_REFUNDS",
                    name: "Payment Refunds",
                    parent_id: "180",
                    canvas_id: "127737",
                    can_code: "IN410_CONTAINER",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "payment-refunds",
                    display_type: "PAGE",
                    header: "Payment Refunds(IN410)",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-user-check"
                    }
                },
                {
                    id: "215",
                    code: "M2_SUBS_SUBS_RENEWAL",
                    name: "Subs Renewal",
                    parent_id: "180",
                    canvas_id: "128205",
                    can_code: "IN500_CONTAINER",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "subs-renewal",
                    display_type: "PAGE",
                    header: "Subscription Renewal(IN500)",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-user-check"
                    }
                },
                {
                    id: "216",
                    code: "M2_SUBS_SUBS_RATES",
                    name: "Subscription Rates",
                    parent_id: "180",
                    canvas_id: "155617",
                    can_code: "MTL_CONT_FOR_SB500",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "subscription-rates",
                    display_type: "PAGE",
                    header: "Subscription Rates",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-user-check"
                    }
                },
                {
                    id: "217",
                    code: "M2_SUBS_LATE_PAYERS_CHARGES",
                    name: "Late Payers Charges",
                    parent_id: "180",
                    canvas_id: null,
                    can_code: null,
                    sub_form_code: null,
                    icon_id: null,
                    url: "late-payers",
                    display_type: null,
                    header: null,
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-user-check"
                    }
                },
                {
                    id: "218",
                    code: "M2_SUBS_RENEWAL_NOTICE",
                    name: "Renewal Notice",
                    parent_id: "180",
                    canvas_id: "133198",
                    can_code: "IN600_DB_PROCESS_FOR_INVOICE",
                    sub_form_code: "DB_PROCESS",
                    icon_id: null,
                    url: "renewal-notice",
                    display_type: "PORTLET",
                    header: "Invoice",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fas fa-user-check"
                    }
                }
            ]
        },
        {
            id: "232",
            code: "M2_COMMUNICATIONS",
            name: "Communications",
            parent_id: null,
            canvas_id: null,
            can_code: null,
            sub_form_code: null,
            icon_id: null,
            url: null,
            display_type: null,
            header: null,
            from_main_menu: "Y",
            action_type: "goto",
            attributes: {
                icon: "fa fa-fw fa-briefcase"
            },
            children: [
                {
                    id: "235",
                    code: "M2_COMMUNICATIONS_STANDARD_COMM",
                    name: "Standard Comms",
                    parent_id: "232",
                    canvas_id: null,
                    can_code: null,
                    sub_form_code: null,
                    icon_id: null,
                    url: null,
                    display_type: null,
                    header: null,
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-briefcase"
                    },
                    children: [
                        {
                            id: "237",
                            code: "M2_COMMUNICATIONS_SET_STAND_COM",
                            name: "Setup Standard Comms",
                            parent_id: "235",
                            canvas_id: "155654",
                            can_code: "MTL_CONT_FOR_SC306",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "setup-std-comms",
                            display_type: "PAGE",
                            header: "Setup Standard Comms",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "238",
                            code: "M2_COMMUNICATIONS_SETUP_TEMPLATE",
                            name: "Setup Templates",
                            parent_id: "235",
                            canvas_id: "155657",
                            can_code: "MTL_CONT_FOR_SC307",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "setup-templates",
                            display_type: "PAGE",
                            header: "Setup Templates",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "239",
                            code: "M2_COMMUNICATIONS_BULK_MAIL_HIST",
                            name: "Bulk Mailings Histories",
                            parent_id: "235",
                            canvas_id: "155660",
                            can_code: "MTL_CONT_FOR_SC370",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "setup-bulk-mailing-hist",
                            display_type: "PAGE",
                            header: "Bulk Mailings Histories",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "240",
                            code: "M2_COMMUNICATIONS_PRINT_STAND_COMM",
                            name: "Print Standard Comms",
                            parent_id: "235",
                            canvas_id: "155663",
                            can_code: "MTL_CONT_FOR_SC130",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "setup-print-standard-comms",
                            display_type: "PAGE",
                            header: "Print Standard Comms",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "241",
                            code: "M2_COMMUNICATIONS_DEPTT",
                            name: "Departments",
                            parent_id: "235",
                            canvas_id: "155666",
                            can_code: "MTL_CONT_FOR_MB400",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "departments",
                            display_type: "PAGE",
                            header: "Departments",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "242",
                            code: "M2_COMMUNICATIONS_SENDER_MAIL",
                            name: "Sender Mailboxes",
                            parent_id: "235",
                            canvas_id: "155669",
                            can_code: "MTL_CONT_FOR_SC420",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "setup-sender-mailboxes",
                            display_type: "PAGE",
                            header: "Sender Mailboxes",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "243",
                            code: "M2_COMMUNICATIONS_LINK_DET",
                            name: "Link Details",
                            parent_id: "235",
                            canvas_id: "155672",
                            can_code: "MTL_CONT_FOR_SC640",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "setup-link-details",
                            display_type: "PAGE",
                            header: "Link Details",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        }
                    ]
                },
                {
                    id: "244",
                    code: "M2_COMMUNICATIONS_ENQ",
                    name: "Enquiries",
                    parent_id: "232",
                    canvas_id: null,
                    can_code: null,
                    sub_form_code: null,
                    icon_id: null,
                    url: null,
                    display_type: null,
                    header: null,
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-briefcase"
                    },
                    children: [
                        {
                            id: "245",
                            code: "M2_COMMUNICATIONS_ENQ_DET",
                            name: "Enquiry Details",
                            parent_id: "244",
                            canvas_id: "155675",
                            can_code: "MTL_CONT_FOR_TB120S_NEW",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "enquiry-details",
                            display_type: "PAGE",
                            header: "Enquiry Details",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "246",
                            code: "M2_COMMUNICATIONS_TASK_LIST",
                            name: "Task List",
                            parent_id: "244",
                            canvas_id: "155678",
                            can_code: "MTL_CONT_FOR_TODO",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "tasks-lists",
                            display_type: "PAGE",
                            header: "Task List",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "247",
                            code: "M2_COMMUNICATIONS_SCAN_DOC",
                            name: "Scanned Documents",
                            parent_id: "244",
                            canvas_id: "155681",
                            can_code: "MTL_CONT_FOR_SC500",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "scanned-documents",
                            display_type: "PAGE",
                            header: "Scanned Documents",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        }
                    ]
                },
                {
                    id: "248",
                    code: "M2_COMMUNICATIONS_MAILING",
                    name: "Mailing",
                    parent_id: "232",
                    canvas_id: null,
                    can_code: null,
                    sub_form_code: null,
                    icon_id: null,
                    url: null,
                    display_type: null,
                    header: null,
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-briefcase"
                    },
                    children: [
                        {
                            id: "249",
                            code: "M2_COMMUNICATIONS_TABLE_QUERY",
                            name: "Table Query",
                            parent_id: "248",
                            canvas_id: "155684",
                            can_code: "MTL_CONT_FOR_MS150",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "table-query",
                            display_type: "PAGE",
                            header: "Table Query",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "250",
                            code: "M2_COMMUNICATIONS_BULK_MAIL",
                            name: "Bulk Mailing",
                            parent_id: "248",
                            canvas_id: "155685",
                            can_code: "MTL_CONT_FOR_MS500",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "bulk-mailing",
                            display_type: "PAGE",
                            header: "Bulk Mailing",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "251",
                            code: "M2_COMMUNICATIONS_DATA_EXTR",
                            name: "Data Extract",
                            parent_id: "248",
                            canvas_id: "155688",
                            can_code: "MTL_CONT_FOR_MS170",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "data-extract",
                            display_type: "PAGE",
                            header: "Data Extract",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        }
                    ]
                },
                {
                    id: "252",
                    code: "M2_COMMUNICATIONS_CALL_CC",
                    name: "Call Centre",
                    parent_id: "232",
                    canvas_id: null,
                    can_code: null,
                    sub_form_code: null,
                    icon_id: null,
                    url: null,
                    display_type: null,
                    header: null,
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-briefcase"
                    },
                    children: [
                        {
                            id: "253",
                            code: "M2_COMMUNICATIONS_SYS_ADMIN",
                            name: "System Administration",
                            parent_id: "252",
                            canvas_id: null,
                            can_code: null,
                            sub_form_code: null,
                            icon_id: null,
                            url: null,
                            display_type: null,
                            header: null,
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-fw fa-briefcase"
                            },
                            children: [
                                {
                                    id: "254",
                                    code: "M2_COMMUNICATIONS_ENQ_MAIL",
                                    name: "Enquiry Mailboxes",
                                    parent_id: "253",
                                    canvas_id: "155689",
                                    can_code: "MTL_CONT_FOR_CCM021",
                                    sub_form_code: "CONTAINER",
                                    icon_id: null,
                                    url: "enquiry-mailboxes",
                                    display_type: "PAGE",
                                    header: "Enquiry Mailboxes",
                                    from_main_menu: "Y",
                                    action_type: "goto",
                                    attributes: {
                                        icon: "fa fa-globe"
                                    }
                                },
                                {
                                    id: "255",
                                    code: "M2_COMMUNICATIONS_ENQ_SERV",
                                    name: "Enquiry Services",
                                    parent_id: "253",
                                    canvas_id: "155690",
                                    can_code: "MTL_CONT_FOR_CCM022",
                                    sub_form_code: "CONTAINER",
                                    icon_id: null,
                                    url: "enquiry-services",
                                    display_type: "PAGE",
                                    header: "Enquiry Services",
                                    from_main_menu: "Y",
                                    action_type: "goto",
                                    attributes: {
                                        icon: "fa fa-globe"
                                    }
                                },
                                {
                                    id: "256",
                                    code: "M2_COMMUNICATIONS_CATG_SCRIPT",
                                    name: "Categories and Scripts",
                                    parent_id: "253",
                                    canvas_id: "155693",
                                    can_code: "MTL_CONT_FOR_TB121S",
                                    sub_form_code: "CONTAINER",
                                    icon_id: null,
                                    url: "categories-scripts",
                                    display_type: "PAGE",
                                    header: "Categories and Scripts",
                                    from_main_menu: "Y",
                                    action_type: "goto",
                                    attributes: {
                                        icon: "fa fa-globe"
                                    }
                                }
                            ]
                        },
                        {
                            id: "257",
                            code: "M2_COMMUNICATIONS_CC_ADMIN",
                            name: "Call Centre Admin",
                            parent_id: "252",
                            canvas_id: null,
                            can_code: null,
                            sub_form_code: null,
                            icon_id: null,
                            url: null,
                            display_type: null,
                            header: null,
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-fw fa-briefcase"
                            },
                            children: [
                                {
                                    id: "258",
                                    code: "M2_COMMUNICATIONS_STAFF_EMAIL_PRI",
                                    name: "Staff Email Prioirites",
                                    parent_id: "257",
                                    canvas_id: "155694",
                                    can_code: "MTL_CONT_FOR_CCM020",
                                    sub_form_code: "CONTAINER",
                                    icon_id: null,
                                    url: "staff-email-prioirites",
                                    display_type: "PAGE",
                                    header: "Staff Email Prioirites",
                                    from_main_menu: "Y",
                                    action_type: "goto",
                                    attributes: {
                                        icon: "fa fa-globe"
                                    }
                                },
                                {
                                    id: "259",
                                    code: "M2_COMMUNICATIONS_WORKST_DET",
                                    name: "Workstation Details",
                                    parent_id: "257",
                                    canvas_id: "155695",
                                    can_code: "MTL_CONT_FOR_MTLTI05",
                                    sub_form_code: "CONTAINER",
                                    icon_id: null,
                                    url: "workstation-details",
                                    display_type: "PAGE",
                                    header: "Workstation Details",
                                    from_main_menu: "Y",
                                    action_type: "goto",
                                    attributes: {
                                        icon: "fa fa-globe"
                                    }
                                },
                                {
                                    id: "260",
                                    code: "M2_COMMUNICATIONS_AGENT_PH_STATUS",
                                    name: "Agent Phone Statuses",
                                    parent_id: "257",
                                    canvas_id: "155696",
                                    can_code: "MTL_CONT_FOR_CCM030",
                                    sub_form_code: "CONTAINER",
                                    icon_id: null,
                                    url: "agent-phone-statuses",
                                    display_type: "PAGE",
                                    header: "Agent Phone Statuses",
                                    from_main_menu: "Y",
                                    action_type: "goto",
                                    attributes: {
                                        icon: "fa fa-globe"
                                    }
                                },
                                {
                                    id: "261",
                                    code: "M2_COMMUNICATIONS_STATS_PERIOD",
                                    name: "Statistics Periods",
                                    parent_id: "257",
                                    canvas_id: "155697",
                                    can_code: "MTL_CONT_FOR_EQSTPD",
                                    sub_form_code: "CONTAINER",
                                    icon_id: null,
                                    url: "statistics-periods",
                                    display_type: "PAGE",
                                    header: "Statistics Periods",
                                    from_main_menu: "Y",
                                    action_type: "goto",
                                    attributes: {
                                        icon: "fa fa-globe"
                                    }
                                },
                                {
                                    id: "262",
                                    code: "M2_COMMUNICATIONS_DAILY_STAT",
                                    name: "Daily Statistics",
                                    parent_id: "257",
                                    canvas_id: "155698",
                                    can_code: "MTL_CONT_FOR_EQST01",
                                    sub_form_code: "CONTAINER",
                                    icon_id: null,
                                    url: "daily-statistics",
                                    display_type: "PAGE",
                                    header: "Daily Statistics",
                                    from_main_menu: "Y",
                                    action_type: "goto",
                                    attributes: {
                                        icon: "fa fa-globe"
                                    }
                                },
                                {
                                    id: "263",
                                    code: "M2_COMMUNICATIONS_WEEK_STAT",
                                    name: "Weekly Statistics",
                                    parent_id: "257",
                                    canvas_id: "155699",
                                    can_code: "MTL_CONT_FOR_EQST02",
                                    sub_form_code: "CONTAINER",
                                    icon_id: null,
                                    url: "weekly-statistics",
                                    display_type: "PAGE",
                                    header: "Weekly  Statistics",
                                    from_main_menu: "Y",
                                    action_type: "goto",
                                    attributes: {
                                        icon: "fa fa-globe"
                                    }
                                },
                                {
                                    id: "264",
                                    code: "M2_COMMUNICATIONS_MONTH_STAT",
                                    name: "Monthly Statistics",
                                    parent_id: "257",
                                    canvas_id: "155700",
                                    can_code: "MTL_CONT_FOR_EQST03",
                                    sub_form_code: "CONTAINER",
                                    icon_id: null,
                                    url: "monthly-statistics",
                                    display_type: "PAGE",
                                    header: "Monthly Statistics",
                                    from_main_menu: "Y",
                                    action_type: "goto",
                                    attributes: {
                                        icon: "fa fa-globe"
                                    }
                                },
                                {
                                    id: "266",
                                    code: "M2_COMMUNICATIONS_STATS_REPORT",
                                    name: "Statistics Report",
                                    parent_id: "257",
                                    canvas_id: "155701",
                                    can_code: "MTL_CONT_FOR_EQSTRP",
                                    sub_form_code: "CONTAINER",
                                    icon_id: null,
                                    url: "statistics-report",
                                    display_type: "PAGE",
                                    header: "Statistics Report",
                                    from_main_menu: "Y",
                                    action_type: "goto",
                                    attributes: {
                                        icon: "fa fa-globe"
                                    }
                                },
                                {
                                    id: "267",
                                    code: "M2_COMMUNICATIONS_AGENT_PH_TRANSF",
                                    name: "Agent Phone Transfers",
                                    parent_id: "257",
                                    canvas_id: "155702",
                                    can_code: "MTL_CONT_FOR_AGENT_TRAN",
                                    sub_form_code: "CONTAINER",
                                    icon_id: null,
                                    url: "agent-phone-transfers",
                                    display_type: "PAGE",
                                    header: "Agent Phone Transfers",
                                    from_main_menu: "Y",
                                    action_type: "goto",
                                    attributes: {
                                        icon: "fa fa-globe"
                                    }
                                },
                                {
                                    id: "268",
                                    code: "M2_COMMUNICATIONS_AGENT_TIME",
                                    name: "Agent Timings",
                                    parent_id: "257",
                                    canvas_id: "155703",
                                    can_code: "MTL_CONT_FOR_AGENT_TIME",
                                    sub_form_code: "CONTAINER",
                                    icon_id: null,
                                    url: "agent-timings",
                                    display_type: "PAGE",
                                    header: "Agent Timings",
                                    from_main_menu: "Y",
                                    action_type: "goto",
                                    attributes: {
                                        icon: "fa fa-globe"
                                    }
                                }
                            ]
                        },
                        {
                            id: "269",
                            code: "M2_COMMUNICATIONS_EMAIL_MGMT",
                            name: "Email Management",
                            parent_id: "252",
                            canvas_id: null,
                            can_code: null,
                            sub_form_code: null,
                            icon_id: null,
                            url: null,
                            display_type: null,
                            header: null,
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-fw fa-briefcase"
                            },
                            children: [
                                {
                                    id: "270",
                                    code: "M2_COMMUNICATIONS_IMPORT_EMAIL",
                                    name: "Import Emails",
                                    parent_id: "269",
                                    canvas_id: "155704",
                                    can_code: "MTL_CONT_FOR_SC510S",
                                    sub_form_code: "CONTAINER",
                                    icon_id: null,
                                    url: "import-emails",
                                    display_type: "PAGE",
                                    header: "Import Emails",
                                    from_main_menu: "Y",
                                    action_type: "goto",
                                    attributes: {
                                        icon: "fa fa-globe"
                                    }
                                },
                                {
                                    id: "271",
                                    code: "M2_COMMUNICATIONS_EMAIL_IMPORT_LOG",
                                    name: "Email Import Log",
                                    parent_id: "269",
                                    canvas_id: "155705",
                                    can_code: "MTL_CONT_FOR_SC520S",
                                    sub_form_code: "CONTAINER",
                                    icon_id: null,
                                    url: "email-import-log",
                                    display_type: "PAGE",
                                    header: "Email Import Log",
                                    from_main_menu: "Y",
                                    action_type: "goto",
                                    attributes: {
                                        icon: "fa fa-globe"
                                    }
                                }
                            ]
                        },
                        {
                            id: "272",
                            code: "M2_COMMUNICATIONS_CONT_MGMT",
                            name: "Contact Management",
                            parent_id: "252",
                            canvas_id: null,
                            can_code: null,
                            sub_form_code: null,
                            icon_id: null,
                            url: null,
                            display_type: null,
                            header: null,
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-fw fa-briefcase"
                            },
                            children: [
                                {
                                    id: "274",
                                    code: "M2_COMMUNICATIONS_TELE_ENQ",
                                    name: "Telephone Enquiries",
                                    parent_id: "272",
                                    canvas_id: "155706",
                                    can_code: "MTL_CONT_FOR_CTL01A",
                                    sub_form_code: "CONTAINER",
                                    icon_id: null,
                                    url: "telephone-enquiries",
                                    display_type: "PAGE",
                                    header: "Telephone Enquiries",
                                    from_main_menu: "Y",
                                    action_type: "goto",
                                    attributes: {
                                        icon: "fa fa-globe"
                                    }
                                },
                                {
                                    id: "275",
                                    code: "M2_COMMUNICATIONS_EMAIL_ENQ",
                                    name: "Email Enquiries",
                                    parent_id: "272",
                                    canvas_id: "155707",
                                    can_code: "MTL_CONT_FOR_CTL02",
                                    sub_form_code: "CONTAINER",
                                    icon_id: null,
                                    url: "email-enquiries",
                                    display_type: "PAGE",
                                    header: "Email Enquiries",
                                    from_main_menu: "Y",
                                    action_type: "goto",
                                    attributes: {
                                        icon: "fa fa-globe"
                                    }
                                },
                                {
                                    id: "276",
                                    code: "M2_COMMUNICATIONS_ENQ_HIST",
                                    name: "Enquiry History",
                                    parent_id: "272",
                                    canvas_id: "155708",
                                    can_code: "MTL_CONT_FOR_TB126",
                                    sub_form_code: "CONTAINER",
                                    icon_id: null,
                                    url: "enquiry-history",
                                    display_type: "PAGE",
                                    header: "Enquiry History",
                                    from_main_menu: "Y",
                                    action_type: "goto",
                                    attributes: {
                                        icon: "fa fa-globe"
                                    }
                                },
                                {
                                    id: "277",
                                    code: "M2_COMMUNICATIONS_ENQ_VERY_FIELD",
                                    name: "Enquiry Verification Fields",
                                    parent_id: "272",
                                    canvas_id: "155709",
                                    can_code: "MTL_CONT_FOR_CTL03",
                                    sub_form_code: "CONTAINER",
                                    icon_id: null,
                                    url: "enquiry-verification-fields",
                                    display_type: "PAGE",
                                    header: "Enquiry Verification Fields",
                                    from_main_menu: "Y",
                                    action_type: "goto",
                                    attributes: {
                                        icon: "fa fa-globe"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "279",
                    code: "M2_COMMUNICATIONS_MEM_APP_ATTACH",
                    name: "Member Applications attachment",
                    parent_id: "232",
                    canvas_id: "133844",
                    can_code: "QK130_CONTAINER",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: null,
                    display_type: "PAGE",
                    header: "Application Form Import",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-briefcase"
                    }
                }
            ]
        },
        {
            id: "280",
            code: "M2_BENEFITS",
            name: "Benefits",
            parent_id: null,
            canvas_id: null,
            can_code: null,
            sub_form_code: null,
            icon_id: null,
            url: null,
            display_type: null,
            header: null,
            from_main_menu: "Y",
            action_type: "goto",
            attributes: {
                icon: "fa fa-fw fa-circle"
            },
            children: [
                {
                    id: "281",
                    code: "M2_BENEFITS_BENEFIT_PAYM",
                    name: "Benefit Payments",
                    parent_id: "280",
                    canvas_id: "155712",
                    can_code: "MTL_CONT_FOR_BEN02",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "benefits-paymenets",
                    display_type: "PAGE",
                    header: "Benefit Payments",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-globe"
                    }
                },
                {
                    id: "282",
                    code: "M2_BENEFITS_BENEFIT_CODE",
                    name: "Benefit Codes",
                    parent_id: "280",
                    canvas_id: "155715",
                    can_code: "MTL_CONT_FOR_BEN00",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "benefit-codes",
                    display_type: "PAGE",
                    header: "Benefit Codes",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-globe"
                    }
                },
                {
                    id: "283",
                    code: "M2_BENEFITS_BENEFIT_CLAIM",
                    name: "Benefit Claims",
                    parent_id: "280",
                    canvas_id: "155718",
                    can_code: "MTL_CONT_FOR_BEN01",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "benefit-claims",
                    display_type: "PAGE",
                    header: "Benefit Claims",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-globe"
                    }
                },
                {
                    id: "284",
                    code: "M2_BENEFITS_BENEFIT_REPORT",
                    name: "Benefit Report",
                    parent_id: "280",
                    canvas_id: "142352",
                    can_code: "BEN01_REPORT_CONTAINER",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: null,
                    display_type: "PAGE",
                    header: "Benefit Report",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-circle"
                    }
                }
            ]
        },
        {
            id: "287",
            code: "M2_CASEMANAGMENT",
            name: "Case Management",
            parent_id: null,
            canvas_id: null,
            can_code: null,
            sub_form_code: null,
            icon_id: null,
            url: null,
            display_type: null,
            header: null,
            from_main_menu: "Y",
            action_type: "goto",
            attributes: {
                icon: "fa fa-fw fa-briefcase"
            },
            children: [
                {
                    id: "288",
                    code: "M2_CASEMANAGMENT_CASE_DET",
                    name: "Case Details",
                    parent_id: "287",
                    canvas_id: "155723",
                    can_code: "MTL_CONT_FOR_CM005",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "case-details",
                    display_type: "PAGE",
                    header: "Case Details",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-globe"
                    }
                },
                {
                    id: "289",
                    code: "M2_CASEMANAGMENT_CASE_REPORT",
                    name: "Reports",
                    parent_id: "287",
                    canvas_id: "146282",
                    can_code: "CMREPORTS_CONTAINER",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: null,
                    display_type: "PAGE",
                    header: "Case Report",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-briefcase"
                    }
                },
                {
                    id: "290",
                    code: "M2_CASEMANAGMENT_CASE_CODES",
                    name: "Case Codes",
                    parent_id: "287",
                    canvas_id: null,
                    can_code: null,
                    sub_form_code: null,
                    icon_id: null,
                    url: null,
                    display_type: null,
                    header: null,
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-briefcase"
                    },
                    children: [
                        {
                            id: "291",
                            code: "M2_CASEMANAGMENT_DEADLINE_TYPE",
                            name: "Deadline Types",
                            parent_id: "290",
                            canvas_id: "155726",
                            can_code: "MTL_CONT_FOR_CM004",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "deadline-type",
                            display_type: "PAGE",
                            header: "Deadline Types",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "292",
                            code: "M2_CASEMANAGMENT_EVENT_TYPE",
                            name: "Event Types",
                            parent_id: "290",
                            canvas_id: "155729",
                            can_code: "MTL_CONT_FOR_CM304",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "event-type",
                            display_type: "PAGE",
                            header: "Event Types",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "293",
                            code: "M2_CASEMANAGMENT_SOLICI",
                            name: "Solicitor",
                            parent_id: "290",
                            canvas_id: "155730",
                            can_code: "MTL_CONT_FOR_LC510",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "solicitor",
                            display_type: "PAGE",
                            header: "Solicitor",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: "294",
            code: "M2_LOTTERY_SETUP",
            name: "Lottery Setup",
            parent_id: null,
            canvas_id: "155733",
            can_code: "MTL_CONT_FOR_LT000",
            sub_form_code: "CONTAINER",
            icon_id: null,
            url: "lottery-setup",
            display_type: "PAGE",
            header: "Lottery Setup",
            from_main_menu: "Y",
            action_type: "goto",
            attributes: {
                icon: "fa fa-fw fa-briefcase"
            }
        },
        {
            id: "737",
            code: "M2_TASK_LIST",
            name: "Task List",
            parent_id: null,
            canvas_id: "155678",
            can_code: "MTL_CONT_FOR_TODO",
            sub_form_code: "CONTAINER",
            icon_id: null,
            url: null,
            display_type: "PAGE",
            header: "Task List",
            from_main_menu: "Y",
            action_type: "goto",
            attributes: {
                icon: "fa fa-list-ul"
            }
        },
        {
            id: "298",
            code: "M2_EXPENSES",
            name: "Expenses",
            parent_id: null,
            canvas_id: null,
            can_code: null,
            sub_form_code: null,
            icon_id: null,
            url: null,
            display_type: null,
            header: null,
            from_main_menu: "Y",
            action_type: "goto",
            attributes: {
                icon: "fa fa-fw fa-circle"
            },
            children: [
                {
                    id: "299",
                    code: "M2_EXPENSES_TAX_CARD",
                    name: "Tax Cards",
                    parent_id: "298",
                    canvas_id: "155736",
                    can_code: "MTL_CONT_FOR_TC100",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "tax-cards",
                    display_type: "PAGE",
                    header: "Tax Cards",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-circle"
                    }
                }
            ]
        },
        {
            id: "300",
            code: "M2_EVENTS",
            name: "Events",
            parent_id: null,
            canvas_id: null,
            can_code: null,
            sub_form_code: null,
            icon_id: null,
            url: null,
            display_type: null,
            header: null,
            from_main_menu: "Y",
            action_type: "goto",
            attributes: {
                icon: "fa fa-fw fa-briefcase"
            },
            children: [
                {
                    id: "301",
                    code: "M2_EVENTS_LISTS",
                    name: "Event List",
                    parent_id: "300",
                    canvas_id: "155739",
                    can_code: "MTL_CONT_FOR_CF110",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "event-list",
                    display_type: "PAGE",
                    header: "Event List",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-globe"
                    }
                },
                {
                    id: "302",
                    code: "M2_EVENTS_SITTING_SETUP",
                    name: "Event Sittings (setup)",
                    parent_id: "300",
                    canvas_id: "155740",
                    can_code: "MTL_CONT_FOR_EVENTS_SITTINGS",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "event-sitting",
                    display_type: "PAGE",
                    header: "Event Sittings (setup)",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-globe"
                    }
                },
                {
                    id: "303",
                    code: "M2_EVENTS_EXPENSE_AUTH",
                    name: "Expenses Authorisation",
                    parent_id: "300",
                    canvas_id: "155743",
                    can_code: "MTL_CONT_FOR_CF017",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "expenses-authorisation",
                    display_type: "PAGE",
                    header: "Expenses Authorisation",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-globe"
                    }
                },
                {
                    id: "304",
                    code: "M2_EVENTS_ELECTION_NOMINAT",
                    name: "Election and Nominations",
                    parent_id: "300",
                    canvas_id: "155744",
                    can_code: "MTL_CONT_FOR_ELECTIONS",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "election-nomination",
                    display_type: "PAGE",
                    header: "Election and Nominations",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-globe"
                    }
                },
                {
                    id: "305",
                    code: "M2_EVENTS_EVENTS_SETUP",
                    name: "Events Setup",
                    parent_id: "300",
                    canvas_id: null,
                    can_code: null,
                    sub_form_code: null,
                    icon_id: null,
                    url: null,
                    display_type: null,
                    header: null,
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-briefcase"
                    },
                    children: [
                        {
                            id: "306",
                            code: "M2_EVENTS_COURSE_DETAILS",
                            name: "Course Details",
                            parent_id: "305",
                            canvas_id: "155747",
                            can_code: "MTL_CONT_FOR_TR004",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "course-details",
                            display_type: "PAGE",
                            header: "Course Details",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "307",
                            code: "M2_EVENTS_EXPERT_SPEL",
                            name: "Experts/Specialists",
                            parent_id: "305",
                            canvas_id: "155750",
                            can_code: "MTL_CONT_FOR_CPD210",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "expert-specialist",
                            display_type: "PAGE",
                            header: "Experts/Specialists",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "765",
                            code: "M2_EVENTS_HOTEL",
                            name: "Hotels",
                            parent_id: "305",
                            canvas_id: "156232",
                            can_code: "MTL_CONT_FOR_MB211",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: null,
                            display_type: "PAGE",
                            header: "Hotels",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fas fa-building"
                            }
                        },
                        {
                            id: "766",
                            code: "M2_EVENTS_VENUES",
                            name: "Venues",
                            parent_id: "305",
                            canvas_id: "156235",
                            can_code: "MTL_CONT_FOR_CB216",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: null,
                            display_type: "PAGE",
                            header: "Venues",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fas fa-building"
                            }
                        },
                        {
                            id: "310",
                            code: "M2_EVENTS_ROOM_TYPES",
                            name: "Room Types",
                            parent_id: "305",
                            canvas_id: "155753",
                            can_code: "MTL_CONT_FOR_MB214",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "room-type",
                            display_type: "PAGE",
                            header: "Room Types",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        }
                    ]
                },
                {
                    id: "311",
                    code: "M2_EVENTS_EVENT_SITTINGS",
                    name: "Event Sittings",
                    parent_id: "300",
                    canvas_id: null,
                    can_code: null,
                    sub_form_code: null,
                    icon_id: null,
                    url: null,
                    display_type: null,
                    header: null,
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-briefcase"
                    },
                    children: [
                        {
                            id: "314",
                            code: "M2_EVENTS_EVENT_SITT_WAITING_LIST",
                            name: "Waiting List",
                            parent_id: "311",
                            canvas_id: "155756",
                            can_code: "MTL_CONT_FOR_CF013",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "waiting-lists",
                            display_type: "PAGE",
                            header: "Waiting List",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "315",
                            code: "M2_EVENTS_EVENT_SITT_REPORTS",
                            name: "Reports",
                            parent_id: "311",
                            canvas_id: "139655",
                            can_code: "CF002_CONTAINER",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: null,
                            display_type: "PAGE",
                            header: "Events Reports",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-fw fa-briefcase"
                            }
                        },
                        {
                            id: "316",
                            code: "M2_EVENTS_EVENT_SITT_INVOC",
                            name: "Invoicing",
                            parent_id: "311",
                            canvas_id: "133197",
                            can_code: "IN600_CONTAINER",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: null,
                            display_type: "PAGE",
                            header: "Invoices(IN600)",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-fw fa-briefcase"
                            }
                        }
                    ]
                },
                {
                    id: "317",
                    code: "M2_EVENTS_FINANCE",
                    name: "Finance",
                    parent_id: "300",
                    canvas_id: null,
                    can_code: null,
                    sub_form_code: null,
                    icon_id: null,
                    url: null,
                    display_type: null,
                    header: null,
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-briefcase"
                    },
                    children: [
                        {
                            id: "318",
                            code: "M2_EVENTS_FINANCE_INVOIC",
                            name: "Invoicing",
                            parent_id: "317",
                            canvas_id: "133197",
                            can_code: "IN600_CONTAINER",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: null,
                            display_type: "PAGE",
                            header: "Invoices(IN600)",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-fw fa-briefcase"
                            }
                        },
                        {
                            id: "730",
                            code: "M2_EVENTS_FINANCE_RECEPT",
                            name: "Receipting",
                            parent_id: "317",
                            canvas_id: "155607",
                            can_code: "MTL_CONT_FOR_SB601",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: null,
                            display_type: "PAGE",
                            header: "Making Payment",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-fw fa-briefcase"
                            }
                        },
                        {
                            id: "320",
                            code: "M2_EVENTS_FINANCE_REFUND_PAY",
                            name: "Refunds and payment Correction",
                            parent_id: "317",
                            canvas_id: "127737",
                            can_code: "IN410_CONTAINER",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: null,
                            display_type: "PAGE",
                            header: "Payment Refunds(IN410)",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-fw fa-briefcase"
                            }
                        },
                        {
                            id: "732",
                            code: "M2_EVENTS_FINANCE_BATCH_CONTROL",
                            name: "Batch Control",
                            parent_id: "317",
                            canvas_id: "155611",
                            can_code: "MTL_CONT_FOR_BT000",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: null,
                            display_type: "PAGE",
                            header: "Batch Control",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-fw fa-briefcase"
                            }
                        }
                    ]
                },
                {
                    id: "322",
                    code: "M2_EVENTS_TALK_EVENTS",
                    name: "Talk Events",
                    parent_id: "300",
                    canvas_id: "155757",
                    can_code: "MTL_CONT_FOR_TALK_EVENTS",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "talk-events",
                    display_type: "PAGE",
                    header: "Talk Events",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-globe"
                    }
                }
            ]
        },
        {
            id: "323",
            code: "M2_MARKETING",
            name: "Marketing",
            parent_id: null,
            canvas_id: null,
            can_code: null,
            sub_form_code: null,
            icon_id: null,
            url: null,
            display_type: null,
            header: null,
            from_main_menu: "Y",
            action_type: "goto",
            attributes: {
                icon: "fa fa-fw fa-briefcase"
            },
            children: [
                {
                    id: "324",
                    code: "M2_MARKETING_PROMO",
                    name: "Promotions",
                    parent_id: "323",
                    canvas_id: "155760",
                    can_code: "MTL_CONT_FOR_MK130",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "promotions",
                    display_type: "PAGE",
                    header: "Promotions",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-globe"
                    }
                },
                {
                    id: "325",
                    code: "M2_MARKETING_SOURCE_CODE",
                    name: "Source Codes",
                    parent_id: "323",
                    canvas_id: "155763",
                    can_code: "MTL_CONT_FOR_MB307",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "source-codes",
                    display_type: "PAGE",
                    header: "Source Codes",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-globe"
                    }
                }
            ]
        },
        {
            id: "326",
            code: "M2_SALES",
            name: "Sales",
            parent_id: null,
            canvas_id: null,
            can_code: null,
            sub_form_code: null,
            icon_id: null,
            url: null,
            display_type: null,
            header: null,
            from_main_menu: "Y",
            action_type: "goto",
            attributes: {
                icon: "fa fa-fw fa-briefcase"
            },
            children: [
                {
                    id: "327",
                    code: "M2_SALES_PRODUCTS",
                    name: "Products",
                    parent_id: "326",
                    canvas_id: "155766",
                    can_code: "MTL_CONT_FOR_LB301",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "products-material",
                    display_type: "PAGE",
                    header: "Products/Material",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-globe"
                    }
                }
            ]
        },
        {
            id: "328",
            code: "M2_FINANCE",
            name: "Finance",
            parent_id: null,
            canvas_id: null,
            can_code: null,
            sub_form_code: null,
            icon_id: null,
            url: null,
            display_type: null,
            header: null,
            from_main_menu: "Y",
            action_type: "goto",
            attributes: {
                icon: "fa fa-fw fa-briefcase"
            },
            children: [
                {
                    id: "329",
                    code: "M2_FINANCE_INVOICING",
                    name: "Invoicing",
                    parent_id: "328",
                    canvas_id: "133197",
                    can_code: "IN600_CONTAINER",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: null,
                    display_type: "PAGE",
                    header: "Invoices(IN600)",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-briefcase"
                    }
                },
                {
                    id: "729",
                    code: "M2_FINANCE_MAKING_PAYM",
                    name: "Receipting",
                    parent_id: "328",
                    canvas_id: "155607",
                    can_code: "MTL_CONT_FOR_SB601",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: null,
                    display_type: "PAGE",
                    header: "Making Payment",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-briefcase"
                    }
                },
                {
                    id: "332",
                    code: "M2_FINANCE_REFUND_PAY_CORREC",
                    name: "Refunds and payment Correction",
                    parent_id: "328",
                    canvas_id: "127737",
                    can_code: "IN410_CONTAINER",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: null,
                    display_type: "PAGE",
                    header: "Payment Refunds(IN410)",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-briefcase"
                    }
                },
                {
                    id: "731",
                    code: "M2_FINANCE_BATCH_CONTROL",
                    name: "Batch Control",
                    parent_id: "328",
                    canvas_id: "155611",
                    can_code: "MTL_CONT_FOR_BT000",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: null,
                    display_type: "PAGE",
                    header: "Batch Control",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-briefcase"
                    }
                }
            ]
        },
        {
            id: "335",
            code: "M2_REPORTS",
            name: "Reports",
            parent_id: null,
            canvas_id: null,
            can_code: null,
            sub_form_code: null,
            icon_id: null,
            url: null,
            display_type: null,
            header: null,
            from_main_menu: "Y",
            action_type: "goto",
            attributes: {
                icon: "fa fa-fw fa-briefcase"
            },
            children: [
                {
                    id: "336",
                    code: "M2_REPORTS_MEM_CATEG",
                    name: "Members by Category",
                    parent_id: "335",
                    canvas_id: "126597",
                    can_code: "MP113_CONTAINER",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: null,
                    display_type: "PAGE",
                    header: "Membership Reports(MP113)",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-briefcase"
                    }
                },
                {
                    id: "739",
                    code: "M2_REPORTS_DATA_EXTRACT",
                    name: "Data Extract",
                    parent_id: "335",
                    canvas_id: "155688",
                    can_code: "MTL_CONT_FOR_MS170",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: null,
                    display_type: "PAGE",
                    header: "Data Extract",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-briefcase"
                    }
                },
                {
                    id: "738",
                    code: "M2_REPORTS_TABLE_QUERY",
                    name: "User Defined Query",
                    parent_id: "335",
                    canvas_id: "155684",
                    can_code: "MTL_CONT_FOR_MS150",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: null,
                    display_type: "PAGE",
                    header: "Table Query",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-briefcase"
                    }
                },
                {
                    id: "339",
                    code: "M2_REPORTS_MEMBERSHIP_STATS",
                    name: "Membership Stats",
                    parent_id: "335",
                    canvas_id: null,
                    can_code: null,
                    sub_form_code: null,
                    icon_id: null,
                    url: null,
                    display_type: null,
                    header: null,
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-briefcase"
                    },
                    children: [
                        {
                            id: "340",
                            code: "M2_REPORTS_MEM_STATS_REPORT",
                            name: "Monthly Statistics Reports",
                            parent_id: "339",
                            canvas_id: "133875",
                            can_code: "ST000_CONTAINER",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: null,
                            display_type: "PAGE",
                            header: "Run Statistics Report(ST000)",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-fw fa-briefcase"
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: "341",
            code: "M2_ADMIN",
            name: "Administration",
            parent_id: null,
            canvas_id: null,
            can_code: null,
            sub_form_code: null,
            icon_id: null,
            url: null,
            display_type: null,
            header: null,
            from_main_menu: "Y",
            action_type: "goto",
            attributes: {
                icon: "fa fa-fw fa-briefcase"
            },
            children: [
                {
                    id: "342",
                    code: "M2_ADMIN_SYS_PARAMS",
                    name: "System Params",
                    parent_id: "341",
                    canvas_id: null,
                    can_code: null,
                    sub_form_code: null,
                    icon_id: null,
                    url: null,
                    display_type: null,
                    header: null,
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-briefcase"
                    },
                    children: [
                        {
                            id: "343",
                            code: "M2_ADMIN_SYS_PARAMS_JOIN_API",
                            name: "Join Online API",
                            parent_id: "342",
                            canvas_id: "155769",
                            can_code: "MTL_CONT_FOR_API_JONLINE",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "join-online-api",
                            display_type: "PAGE",
                            header: "Join Online API",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "344",
                            code: "M2_ADMIN_SYS_PARAMS_MEM_UPD_API",
                            name: "Members Update API",
                            parent_id: "342",
                            canvas_id: "155772",
                            can_code: "MTL_CONT_FOR_API_MEMUPD",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "api-memupd-list",
                            display_type: "PAGE",
                            header: "Members Update API",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "345",
                            code: "M2_ADMIN_SYS_PARAMS_SYS_CONTROL",
                            name: "System Control",
                            parent_id: "342",
                            canvas_id: "155775",
                            can_code: "MTL_CONT_FOR_SU070",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "system-control",
                            display_type: "PAGE",
                            header: "System Control",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "346",
                            code: "M2_ADMIN_SYS_PARAMS_TAB_INFO",
                            name: "Table Info",
                            parent_id: "342",
                            canvas_id: "155778",
                            can_code: "MTL_CONT_FOR_TB100",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "table-info",
                            display_type: "PAGE",
                            header: "Table Info",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "348",
                            code: "M2_ADMIN_SYS_PARAMS_CSV_DET",
                            name: "CSV Details",
                            parent_id: "342",
                            canvas_id: "155781",
                            can_code: "MTL_CONT_FOR_CSV100",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "csv-details",
                            display_type: "PAGE",
                            header: "CSV Details",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "349",
                            code: "M2_ADMIN_SYS_PARAMS_MANAG_LOV",
                            name: "Manage Lov",
                            parent_id: "342",
                            canvas_id: "155784",
                            can_code: "MTL_CONT_FOR_CD001",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "manage-lov",
                            display_type: "PAGE",
                            header: "Manage Lov",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "350",
                            code: "M2_ADMIN_SYS_PARAMS_MANAG_TAB_COL",
                            name: "Manage Tab Columns",
                            parent_id: "342",
                            canvas_id: "155787",
                            can_code: "MTL_CONT_FOR_MTC01",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "manage-tab-columns",
                            display_type: "PAGE",
                            header: "Manage Tab Columns",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "351",
                            code: "M2_ADMIN_SYS_PARAMS_MANAG_FORM_COL",
                            name: "Manage Forms Columns",
                            parent_id: "342",
                            canvas_id: "155790",
                            can_code: "MTL_CONT_FOR_MTC02",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "manage-forms-columns",
                            display_type: "PAGE",
                            header: "Manage Forms Columns",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "352",
                            code: "M2_ADMIN_SYS_PARAMS_QUERY_SPEC_COL",
                            name: "Query Special Columns",
                            parent_id: "342",
                            canvas_id: "155793",
                            can_code: "MTL_CONT_FOR_MS160",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "query-special-columns",
                            display_type: "PAGE",
                            header: "Query Special Columns",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        }
                    ]
                },
                {
                    id: "353",
                    code: "M2_ADMIN_SECURITY",
                    name: "Security",
                    parent_id: "341",
                    canvas_id: null,
                    can_code: null,
                    sub_form_code: null,
                    icon_id: null,
                    url: null,
                    display_type: null,
                    header: null,
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-briefcase"
                    },
                    children: [
                        {
                            id: "355",
                            code: "M2_ADMIN_SECURITY_USER_DET",
                            name: "User Details",
                            parent_id: "353",
                            canvas_id: "155796",
                            can_code: "MTL_CONT_FOR_US100",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "user-details",
                            display_type: "PAGE",
                            header: "Query Special Columns",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "356",
                            code: "M2_ADMIN_SECURITY_USER_PROF",
                            name: "User Profiles",
                            parent_id: "353",
                            canvas_id: "155799",
                            can_code: "MTL_CONT_FOR_US300",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "user-profiles",
                            display_type: "PAGE",
                            header: "User Profiles",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "357",
                            code: "M2_ADMIN_SECURITY_USER_MOD",
                            name: "User Modules",
                            parent_id: "353",
                            canvas_id: "155802",
                            can_code: "MTL_CONT_FOR_US200",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "user-modules",
                            display_type: "PAGE",
                            header: "User Modules",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        }
                    ]
                },
                {
                    id: "358",
                    code: "M2_ADMIN_ERASURE",
                    name: "Erasure",
                    parent_id: "341",
                    canvas_id: "155803",
                    can_code: "MTL_CONT_FOR_ERA001",
                    sub_form_code: "CONTAINER",
                    icon_id: null,
                    url: "erasure",
                    display_type: "PAGE",
                    header: "Erasure",
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-globe"
                    }
                },
                {
                    id: "360",
                    code: "M2_ADMIN_CODE",
                    name: "Codes",
                    parent_id: "341",
                    canvas_id: null,
                    can_code: null,
                    sub_form_code: null,
                    icon_id: null,
                    url: null,
                    display_type: null,
                    header: null,
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-briefcase"
                    },
                    children: [
                        {
                            id: "361",
                            code: "M2_ADMIN_CODE_ACC_TYPE",
                            name: "Accreditation Types",
                            parent_id: "360",
                            canvas_id: "155806",
                            can_code: "MTL_CONT_FOR_CF308",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "accreditation-type",
                            display_type: "PAGE",
                            header: "Accreditation Types",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "362",
                            code: "M2_ADMIN_CODE_MAIL_CODE",
                            name: "Mailing Codes",
                            parent_id: "360",
                            canvas_id: "155809",
                            can_code: "MTL_CONT_FOR_MB304",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "mailing-codes",
                            display_type: "PAGE",
                            header: "Mailing Codes",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "736",
                            code: "M2_ADMIN_CODE_DEPTT",
                            name: "Departments",
                            parent_id: "360",
                            canvas_id: "155666",
                            can_code: "MTL_CONT_FOR_MB400",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: null,
                            display_type: "PAGE",
                            header: "Departments",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-fw fa-briefcase"
                            }
                        },
                        {
                            id: "742",
                            code: "M2_ADMIN_CODE_PRODUCT",
                            name: "Products/Material",
                            parent_id: "360",
                            canvas_id: "155766",
                            can_code: "MTL_CONT_FOR_LB301",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: null,
                            display_type: "PAGE",
                            header: "Products/Material",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-fw fa-briefcase"
                            }
                        },
                        {
                            id: "365",
                            code: "M2_ADMIN_CODE_COURSE_FAMILY_CODE",
                            name: "Course Family Codes",
                            parent_id: "360",
                            canvas_id: "155812",
                            can_code: "MTL_CONT_FOR_TR001",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "course-family-codes",
                            display_type: "PAGE",
                            header: "Course Family Codes",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "735",
                            code: "M2_ADMIN_CODE_SETUP_STAND_COMM",
                            name: "Setup Standard Comms",
                            parent_id: "360",
                            canvas_id: "155654",
                            can_code: "MTL_CONT_FOR_SC306",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: null,
                            display_type: "PAGE",
                            header: "Setup Standard Comms",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-fw fa-briefcase"
                            }
                        },
                        {
                            id: "367",
                            code: "M2_ADMIN_CODE_GENERAL_CODE",
                            name: "General Codes Control",
                            parent_id: "360",
                            canvas_id: "155815",
                            can_code: "MTL_CONT_FOR_SU045",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "general-codes-control",
                            display_type: "PAGE",
                            header: "General Codes Control",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "368",
                            code: "M2_ADMIN_CODE_SYS_CODE_CONTROL",
                            name: "System Codes Control",
                            parent_id: "360",
                            canvas_id: "155818",
                            can_code: "MTL_CONT_FOR_SU046",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "system-codes-control",
                            display_type: "PAGE",
                            header: "System Codes Control",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "740",
                            code: "M2_ADMIN_CODE_PROMOTIONS",
                            name: "Promotions",
                            parent_id: "360",
                            canvas_id: "155760",
                            can_code: "MTL_CONT_FOR_MK130",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: null,
                            display_type: "PAGE",
                            header: "Promotions",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-fw fa-briefcase"
                            }
                        },
                        {
                            id: "741",
                            code: "M2_ADMIN_CODE_SOURCE_CODE",
                            name: "Source Codes",
                            parent_id: "360",
                            canvas_id: "155763",
                            can_code: "MTL_CONT_FOR_MB307",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: null,
                            display_type: "PAGE",
                            header: "Source Codes",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-fw fa-briefcase"
                            }
                        },
                        {
                            id: "370",
                            code: "M2_ADMIN_CODE_TITLE",
                            name: "Title",
                            parent_id: "360",
                            canvas_id: "155821",
                            can_code: "MTL_CONT_FOR_TITLES",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "titles",
                            display_type: "PAGE",
                            header: "Titles",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "371",
                            code: "M2_ADMIN_CODE_MEM_CATEG",
                            name: "Membership Categories",
                            parent_id: "360",
                            canvas_id: "155824",
                            can_code: "MTL_CONT_FOR_CAT100",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "membership-categories",
                            display_type: "PAGE",
                            header: "Membership Categories",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "372",
                            code: "M2_ADMIN_CODE_GENERAL_NOTE",
                            name: "General Notes",
                            parent_id: "360",
                            canvas_id: "155827",
                            can_code: "MTL_CONT_FOR_CD100",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "general-notes",
                            display_type: "PAGE",
                            header: "General Notes",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        }
                    ]
                },
                {
                    id: "373",
                    code: "M2_ADMIN_MOGGER",
                    name: "Mogger",
                    parent_id: "341",
                    canvas_id: null,
                    can_code: null,
                    sub_form_code: null,
                    icon_id: null,
                    url: null,
                    display_type: null,
                    header: null,
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-briefcase"
                    }
                },
                {
                    id: "375",
                    code: "M2_ADMIN_GDPR",
                    name: "GDPR",
                    parent_id: "341",
                    canvas_id: null,
                    can_code: null,
                    sub_form_code: null,
                    icon_id: null,
                    url: null,
                    display_type: null,
                    header: null,
                    from_main_menu: "Y",
                    action_type: "goto",
                    attributes: {
                        icon: "fa fa-fw fa-briefcase"
                    },
                    children: [
                        {
                            id: "376",
                            code: "M2_ADMIN_GDPR_CONTROL_SETUP",
                            name: "GDPR Control Setup",
                            parent_id: "375",
                            canvas_id: "155830",
                            can_code: "MTL_CONT_FOR_GDPR100",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "gdpr-control-setup",
                            display_type: "PAGE",
                            header: "GDPR Control Setup",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "377",
                            code: "M2_ADMIN_GDPR_ARCHIVE_DET",
                            name: "GDPR Archive Details",
                            parent_id: "375",
                            canvas_id: "155833",
                            can_code: "MTL_CONT_FOR_GDPR300",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: "gdpr-archive-details",
                            display_type: "PAGE",
                            header: "GDPR Archive Details",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-globe"
                            }
                        },
                        {
                            id: "378",
                            code: "M2_ADMIN_GDPR_PROCESS",
                            name: "GDPR Process",
                            parent_id: "375",
                            canvas_id: "139244",
                            can_code: "GDPR200_CONTAINER",
                            sub_form_code: "CONTAINER",
                            icon_id: null,
                            url: null,
                            display_type: "PAGE",
                            header: "GDPR Process(GDPR200)",
                            from_main_menu: "Y",
                            action_type: "goto",
                            attributes: {
                                icon: "fa fa-fw fa-briefcase"
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: "379",
            code: "M2_SURVEY",
            name: "Survey",
            parent_id: null,
            canvas_id: "155834",
            can_code: "MTL_CONT_FOR_SURVEY",
            sub_form_code: "CONTAINER",
            icon_id: null,
            url: "survey",
            display_type: "PAGE",
            header: "Survey",
            from_main_menu: "Y",
            action_type: "goto",
            attributes: {
                icon: "fa fa-globe"
            }
        },
        {
            id: "380",
            code: "M2_GRANTS",
            name: "Grants",
            parent_id: null,
            canvas_id: "155720",
            can_code: "MTL_CONT_FOR_GRANTS",
            sub_form_code: "CONTAINER",
            icon_id: null,
            url: "gdpr-archive-details",
            display_type: "PAGE",
            header: "Grants",
            from_main_menu: "Y",
            action_type: "goto",
            attributes: {
                icon: "fa fa-globe"
            }
        },
        {
            id: "382",
            code: "M2_BULK_UPDATES",
            name: "Bulk Updates",
            parent_id: null,
            canvas_id: "155719",
            can_code: "MTL_CONT_FOR_BULKUPDATES",
            sub_form_code: "CONTAINER",
            icon_id: null,
            url: "bulk-updates",
            display_type: "PAGE",
            header: "Bulk Updates",
            from_main_menu: "Y",
            action_type: "goto",
            attributes: {
                icon: "fa fa-globe"
            }
        }
    ]);
}
