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

    const clearActivities = () => {
    const activities = document.querySelectorAll('.frame-act')
    activities.forEach(a => a.remove())
   }

   const renderCards = (clickOption) => {

    clearActivities()
    const container = document.querySelector('div.container')

    const calcTimeframe = (option) => {
      if (option ==='daily') {
        return 'Yesterday'
      } else if (option === 'weekly') {
        return 'Last Week'
      } else if (option === 'monthly') {
        return 'Last Month'
      }
    }

    data.forEach(activity => {
      const name = activity.title;
      const activityClass = name.toLowerCase().replace(' ', '-');
      const timeframeData = activity.timeframes[clickOption]
      const previousTimesframe = calcTimeframe(clickOption)
     // console.log(activity)
     const div = document.createElement('div')
     div.classList.add('frame-act', activityClass)
     const stringToInject = `
     <img class="icon" src="images/icon-${activityClass}.svg" alt="work">
    <div class="activity_info"> 
       <div class="ellipsis">
          <h2 class="activity_name">${name}</h2>
           <div class="activity_option">
             <img class="sv" src="images/icon-ellipsis.svg" alt="svg">
           </div>
        </div>
          <div class="activity_timeframes">
            <div class="hours">
              ${timeframeData.current}hrs
            </div>
            
            <div class="previoustime">
              <p class="previous">${previousTimesframe} - </p>
              <p class="time">${timeframeData.previous} hrs</p>
            </div>

          </div>    
    </div>
     `
     div.innerHTML =  stringToInject
     container.append(div)

    //  console.log(section) 
    }); 
   }; 

   buttons.forEach(button => {
    button.addEventListener('click', () => {
        activateClickedButton(button)
        const clickOption = button.dataset.option
        renderCards(clickOption)
    })
   })
   
   buttons[1].click()