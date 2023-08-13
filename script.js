let data = [
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
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

   const buttons = document.querySelectorAll('.tracker-option')

   const activateClickedButton = (button) => {
    buttons.forEach(b => b.classList.remove('active'))
    button.classList.add('active')
   }

   const renderCards = (clickOption) => {
    const calcTimeframe = (option) => {
      if (option ==='daily') {
        return 'Yesterday'
      } else if (option === 'weekly') {
        return 'Last Week'
      } else if (option === 'montly') {
        return 'Last Month'
      }
    }

    data.forEach(activity => {
      const name = activity.title;
      const activityClass = name.toLowerCase().replace(' ', '-');
      const timeframesData = activity.timeframes[clickOption]
      const previousTimesframe = calcTimeframe(clickOption)
     // console.log(activity)
     const section = document.createElement('section')
     section.classList.add('activity_tracker', activityClass)
     const stringToinject = `  
     `
    }); 
   };

   buttons.forEach(button => {
    button.addEventListener('click', () => {
        activateClickedButton(button)
        const clickOption = button.dataset.option
        renderCards(clickOption)
    })
   })
   