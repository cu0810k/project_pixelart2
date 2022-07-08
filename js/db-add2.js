
import { writeBatch, doc } from "firebase/firestore";

const batch = writeBatch(db);

const A1 = doc(db, "seat", "A-1");
batch.set(A1, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const A2 = doc(db, "seat", "A-2");
batch.set(A2, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const A3 = doc(db, "seat", "A-3");
batch.set(A3, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const B1 = doc(db, "seat", "B-1");
batch.set(B1, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const B2 = doc(db, "seat", "B-2");
batch.set(B2, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const B3 = doc(db, "seat", "B-3");
batch.set(B3, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const C1 = doc(db, "seat", "C-1");
batch.set(C1, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const C2 = doc(db, "seat", "C-2");
batch.set(C2, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const C3 = doc(db, "seat", "C-3");
batch.set(C3, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const D1 = doc(db, "seat", "D-1");
batch.set(D1, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const D2 = doc(db, "seat", "D-2");
batch.set(D2, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const D3 = doc(db, "seat", "D-3");
batch.set(D3, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});


const E1 = doc(db, "seat", "E-1");
batch.set(E1, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const E2 = doc(db, "seat", "E-2");
batch.set(E2, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const E3 = doc(db, "seat", "E-3");
batch.set(E3, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const F1 = doc(db, "seat", "F-1");
batch.set(F1, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const F2 = doc(db, "seat", "F-2");
batch.set(F2, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const F3 = doc(db, "seat", "F-3");
batch.set(F3, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});



const G1 = doc(db, "seat", "G-1");
batch.set(G1, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const G2 = doc(db, "seat", "G-2");
batch.set(G2, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const G3 = doc(db, "seat", "G-3");
batch.set(G3, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const H1 = doc(db, "seat", "H-1");
batch.set(H1, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const H2 = doc(db, "seat", "H-2");
batch.set(H2, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const H3 = doc(db, "seat", "H-3");
batch.set(H3, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});


const I1 = doc(db, "seat", "I-1");
batch.set(I1, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const I2 = doc(db, "seat", "I-2");
batch.set(I2, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const I3 = doc(db, "seat", "I-3");
batch.set(I3, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const J1 = doc(db, "seat", "J-1");
batch.set(J1, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const J2 = doc(db, "seat", "J-2");
batch.set(J2, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const J3 = doc(db, "seat", "J-3");
batch.set(J3, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});


const K1 = doc(db, "seat", "K-1");
batch.set(K1, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const K2 = doc(db, "seat", "K-2");
batch.set(K2, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

const K3 = doc(db, "seat", "K-3");
batch.set(K3, {
  "2022-07-01": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-02": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  },
  "2022-07-03": {
    "09:00-12:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "12:00-18:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "18:00-21:00": {
      "inputDate": "",
      "inputGender": "",
      "inputName": "",
      "inputTel": "",
      "inputTime": "",
      "status": false,
      "tableNum": "",
      "shot": ""
    },
    "morStatus": false,
    "aftStatus": false,
    "nigStatus": false,
  }
});

// Commit the batch
await batch.commit();