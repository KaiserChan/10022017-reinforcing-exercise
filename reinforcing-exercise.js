project = {
  committee: ["Stella", "Salma", "Kai"],
  title: "Very Important Project",
  dueDate : "December 14, 2019",
  id: "3284",
  steps: [
    {description: "conduct interviews",
     dueDate: "August 1, 2018"
    },
    {description: "code of conduct",
     dueDate: "January 1, 2018"
    },
    {description: "compile results",
     dueDate: "November 10, 2018"
    },
    {description: "version 1",
     dueDate: "January 15, 2019"
    },
    {description: "revisions",
     dueDate: "March 30, 2019"
    },
    {description: "version 2",
     dueDate: "July 12, 2019"
    },
    {description: "final edit",
     dueDate: "October 1, 2019"
    },
    {description: "final version",
     dueDate: "November 20, 2019"
    },
    {description: "Wrap up",
     dueDate: "December 1, 2019"
    }
  ]
}

function assignTasks(project) {
  var tasks = project['steps'];
  var committees = project['committee']
  // tasks.forEach(function(task) {
  //   committees.forEach(function(committee) {
  //     task['committee'] = committee;
  //   });
  // });
  for (i = 0; i < tasks.length; i += 3) {
    tasks[i]['committee'] = project['committee'][0];
  };
  for (i = 1; i < tasks.length; i += 3) {
    tasks[i]['committee'] = project['committee'][1];
  };
  for (i = 2; i < tasks.length; i += 3) {
    tasks[i]['committee'] = project['committee'][2];
  };
  console.log(project);
}
assignTasks(project)
