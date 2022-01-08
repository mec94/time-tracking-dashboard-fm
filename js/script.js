const trackData = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3,
      },
      "weekly": {
        "current": 5,
        "previous": 10,
      },
      "monthly": {
        "current": 21,
        "previous": 23,
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1,
      },
      "weekly": {
        "current": 2,
        "previous": 2,
      },
      "monthly": {
        "current": 7,
        "previous": 11,
      },
    },
  },
];

const pickDate = {
  daily: "Day",
  weekly: "Week",
  monthly: "Month"
}

const frametimeHours =
  document.getElementsByClassName('report-frametime__hours');
const frametimePrevious =
  document.getElementsByClassName('report-frametime__lastweek');

function switchDate(choice) {
  for (let i = 0; i < frametimeHours.length; i++) {
    frametimeHours[i].innerHTML = trackData[i].timeframes[choice].current + "hrs";
    frametimePrevious[i].innerText = `Last ${pickDate[choice]} - ${trackData[i].timeframes[choice].previous} hrs`;
  }
}
