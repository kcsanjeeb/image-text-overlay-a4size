// Define text values and their corresponding positions
var textValues = {
    branch: {
        text: "Kapan",
        position: {
            top: "11.2rem",
            left: "6rem",
            right: null
        }
    },
    date: {
        text: "2024/04/01",
        position: {
            top: "10.3rem",
            left: "35rem",
            right: null
        }
    },
    currency: {
        text: "USD",
        position: {
            top: "16.4rem",
            left: "10rem",
            right: null
        }
    },
    amount: {
        text: "5,680",
        position: {
            top: "16.4rem",
            left: "33rem",
            right: null
        }
    },
    amount_words: {
        text: "Five thousand six hundred eighty",
        position: {
            top: "17.4rem",
            left: "10.8rem",
            right: null
        }
    },
    benificiery_name: {
        text: "Sychw Technology (Shenzhen) Co., Ltd",
        position: {
            top: "20rem",
            left: "16rem",
            right: null
        }
    },
    name_block: {
        text: "Sychw Technology (Shenzhen) Co., Ltd",
        position: {
            top: "21.4rem",
            left: "16rem",
            right: null
        }
    },
    address: {
        text: "House E2, 11/F, Block 13, Lehui Science and Technology Centre, Jihua Road,Longgang,ShenZhen,China",
        position: {
            top: "22.8rem",
            left: "15rem",
            right: null
        },
        fontSize:'10px'
    },
    swift_code: {
        text: "SZDBCNBS",
        position: {
            top: "24rem",
            left: "15rem",
            right: null
        },
        fontSize:'18px'
    },
    benificiery_account_number: {
        text: "15000106729249",
        position: {
            top: "25.5rem",
            left: "15rem",
            right: null
        },
        fontSize:'18px'
    },
    bank_name: {
        text: "Ping An Bank Co.,Ltd., Shenzhen Longhua Branch",
        position: {
            top: "27.38rem",
            left: "15rem",
            right: null
        }
    },
    branch_address: {
        text: "Block A, Donghe Garden Complex, Donghuan 2nd",
        position: {
            top: "28.8rem",
            left: "15rem",
            right: null
        }
    },
    ifsc_code: {
        text: "",
        position: {
            top: "30.3rem",
            left: "15rem",
            right: null
        }
    },
    invoice_number: {
        text: "SD240328001    2024/03/28",
        position: {
            top: "31.6rem",
            left: "15rem",
            right: null
        }
    },
    goods_name: {
        text: "SATA 2.5'', NVME 3.0",
        position: {
            top: "31.6rem",
            left: "34.4rem",
            right: null
        },
        fontSize:'12px'
    },
    entry_custom: {
        text: "TIA custom office",
        position: {
            top: "32.8rem",
            left: "15rem",
            right: null
        }
    },
    HS_Code: {
        text: "8471701100 , 8473309000",
        position: {
            top: "32.8rem",
            left: "33rem",
            right: null
        },
        fontSize:'12px'
    },
    applicant_name: {
        text: "DOT TRADE",
        position: {
            top: "37.5rem",
            left: "15rem",
            right: null
        }
    },
    applicant_address: {
        text: "Kapan",
        position: {
            top: "38.6rem",
            left: "9rem",
            right: null
        }
    },
    applicant_tole: {
        text: "Miteripul",
        position: {
            top: "38.6rem",
            left: "14.8rem",
            right: null
        }
    },
    applicant_ward: {
        text: "10",
        position: {
            top: "38.6rem",
            left: "23rem",
            right: null
        }
    },
    applicant_city: {
        text: "Kathmandu",
        position: {
            top: "38.6rem",
            left: "27.6rem",
            right: null
        }
    },
    applicant_pan: {
        text: "301788805",
        position: {
            top: "40rem",
            left: "15rem",
            right: null
        }
    },
    applicant_contact_number: {
        text: "+977 9851075365",
        position: {
            top: "41.2rem",
            left: "15rem",
            right: null
        }
    },
    applicant_bank_account_number: {
        text: "ss",
        position: {
            top: "42.4rem",
            left: "15rem",
            right: null
        }
    },
    applicant_bank_account_number: {
        text: "30800107010645000001 , 30835007010645000004",
        position: {
            top: "42.4rem",
            left: "15rem",
            right: null
        }
    },
    swift_transfer: {
        text: "✔️",
        position: {
            top: "14.3rem",
            left: "39.6rem",
            right: null
        }
    },
    charges_from: {
        text: "✔️",
        position: {
            top: "43.5rem",
            left: "37.8rem",
            right: null
        }
    },
    full_payment: {
        text: "✔️",
        position: {
            top: "33.8rem",
            left: "39rem",
            right: null
        }
    }
};

// Get the image element
var image = document.getElementById("formImage");

// Create and position text overlays dynamically
Object.keys(textValues).forEach(function (id) {
    var textInfo = textValues[id];
    var position = textInfo.position;

    // Create overlay element
    var overlay = document.createElement("div");
    overlay.className = "textOverlay";
    overlay.textContent = textInfo.text;

    // Position overlay element
    overlay.style.top = position.top;
    overlay.style.left = position.left;
    overlay.style.right = position.right;

    // Set font size from JSON
    overlay.style.fontSize = textInfo.fontSize || "14px"; // Default font size if not specified in JSON



    // Append overlay to container
    document.body.appendChild(overlay);
});
