var express = require('express');
var router = express.Router();

const itemList = [
  { 'id':1, 
  'term': 'DevOps', 
  'description': 'DevOps is a set of practices, tools, and a cultural philosophy that automate and integrate the processes between software development and IT teams. It emphasizes team empowerment, cross-team communication and collaboration, and technology automation.', 
  'reference': 'Atlassian. “What Is DevOps? | Atlassian.” Atlassian, 2016, www.atlassian.com/devops.'},
  { 'id':2, 
  'term': 'GitHub', 
  'description': 'GitHub is a website and cloud-based service that helps developers store and manage their code, as well as track and control changes to their code.', 
  'reference': 'Jackson, Brian. “What Is GitHub? A Beginners Introduction To...” Kinsta Managed WordPress Hosting, Kinsta Managed WordPress Hosting, 20 Apr. 2018, kinsta.com/knowledgebase/what-is-github/.'},
  { 'id':3, 
  'term': 'Node.js ', 
  'description': 'Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser. ', 
  'reference': 'https://en.wikipedia.org/wiki/Node.js'},
  { 'id':4, 
  'term': 'JavaScript', 
  'description': 'JavaScript is a scripting or programming language that allows you to implement complex features on web pages ', 
  'reference': 'Mozilla. “What Is JavaScript?” MDN Web Docs, 2 July 2019, developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript. '},
  { 'id':5, 
  'term': 'Docker', 
  'description': 'Docker is a software platform that allows you to build, test, and deploy applications quickly.', 
  'reference': 'AWS. “What Is Docker? | AWS.” Amazon Web Services, Inc., 2019, aws.amazon.com/docker/.'},
  { 'id':6, 
  'term': 'Microservices ',
  'description': 'Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams.', 
  'reference': 'AWS. “What Are Microservices? | AWS.” Amazon Web Services, Inc., 2019, aws.amazon.com/microservices/.'},
  { 'id':7, 
  'term': 'CI/CD', 
  'description': 'CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development. The main concepts attributed to CI/CD are continuous integration, continuous delivery, and continuous deployment. CI/CD is a solution to the problems integrating new code can cause for development and operations teams ', 
  'reference': 'Redhat. “What Is CI/CD?” Redhat.com, 2019, www.redhat.com/en/topics/devops/what-is-ci-cd.'},
  { 'id':8, 
  'term': 'Agile', 
  'description': 'The Agile methodology is a project management approach that involves breaking the project into phases and emphasizes continuous collaboration and improvement. Teams follow a cycle of planning, executing, and evaluating. ', 
  'reference': 'Atlassian. “Agile Best Practices and Tutorials | Atlassian.” Atlassian, 2019, www.atlassian.com/agile. '},
  { 'id':9, 
  'term': 'Git ', 
  'description': 'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. Git is easy to learn and has a tiny footprint with lightning fast performance. It outclasses SCM tools like Subversion, CVS, Perforce, and ClearCase with features like cheap local branching, convenient staging areas, and multiple workflows.', 
  'reference': 'Git. “Git.” Git-Scm.com, 2019, git-scm.com/.'},
  { 'id':10, 
  'term': 'Visual Studio Code', 
  'description': 'Visual Studio Code is a free, lightweight but powerful source code editor that runs on your desktop and on the web and is available for Windows, macOS, Linux, and Raspberry Pi OS. ', 
  'reference': 'Heller, Martin. “What Is Visual Studio Code? Microsoft’s Extensible Code Editor.” InfoWorld, 8 July 2022, www.infoworld.com/article/3666488/what-is-visual-studio-code-microsofts-extensible-code-editor.html.'},

  
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 DevOps Glossary', subtitle: 'Software Deployment and Operations Glossary', items: itemList });
});

module.exports = router;
